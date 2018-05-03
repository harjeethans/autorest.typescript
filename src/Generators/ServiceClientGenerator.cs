// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Generators
{
    public static class ServiceClientGenerator
    {
        public static readonly ISet<string> ServiceClientPropertiesToIgnore = new HashSet<string>()
        {
            "acceptLanguage",
            "credentials",
            "generateClientRequestId",
            "longRunningOperationRetryTimeout",
        };
        public static readonly ISet<string> AzureServiceClientPropertiesToIgnore = new HashSet<string>(ServiceClientPropertiesToIgnore)
        {
            "subscriptionId",
        };

        public static string ClassProperties(CodeModelTS serviceClient, ISet<string> propertiesToIgnore)
        {
            TSBuilder builder = new TSBuilder();
            TSClass serviceClientClass = new TSClass(builder);

            IEnumerable<Property> serviceClientProperties = serviceClient.Properties
                .Where((Property property) => !propertiesToIgnore.Contains(property.Name));

            foreach (Property property in serviceClientProperties)
            {
                serviceClientClass.DocumentationComment(property.Summary, property.Documentation);
                serviceClientClass.PublicProperty(property.Name, property.ModelType.TSType(false), !property.IsRequired);
            }
            serviceClientClass.PublicProperty("baseUri", "string");

            return builder.ToString();
        }

        public static string ClassMethodGroupProperties(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSClass serviceClientClass = new TSClass(builder);

            if (serviceClient.MethodGroupModels.Any())
            {
                foreach (MethodGroupTS methodGroup in serviceClient.MethodGroupModels)
                {
                    serviceClientClass.PublicProperty(methodGroup.NameForProperty, $"operations.{methodGroup.TypeName}");
                }
            }

            return builder.ToString();
        }

        private static IEnumerable<Property> GetConstructorParameters(CodeModel serviceClient)
        {
            return serviceClient.Properties.Where((Property property) => !property.IsConstant && property.IsRequired && string.IsNullOrEmpty(property.DefaultValue));
        }

        public static string ServiceClientConstructorParameterList(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSParameterList parameterList = new TSParameterList(builder);

            IEnumerable<Property> constructorParameters = GetConstructorParameters(serviceClient);
            foreach (Property property in constructorParameters)
            {
                parameterList.Parameter(property.Name, property.ModelType.TSType(inModelsModule: false));
            }

            if (!serviceClient.IsCustomBaseUri)
            {
                parameterList.Parameter("baseUri", "string", optional: true);
            }

            string httpPipelineParameterType = (serviceClient.OptionalParameterTypeForClientConstructor == CodeModelTS.ServiceClientOptions
                    ? $"msRest.{CodeModelTS.ServiceClientOptions}"
                    : serviceClient.OptionalParameterTypeForClientConstructor);
            parameterList.Parameter("options", httpPipelineParameterType, optional: true);

            return builder.ToString();
        }

        public static string AzureServiceClientConstructorParameterList(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSParameterList parameterList = new TSParameterList(builder);

            IEnumerable<Property> constructorParameters = GetConstructorParameters(serviceClient);
            foreach (Property property in constructorParameters)
            {
                parameterList.Parameter(property.Name, property.ModelType.TSType(inModelsModule: false));
            }

            Property subscriptionProperty = GetProperty(serviceClient, "subscriptionId");
            if (subscriptionProperty == null)
            {
                parameterList.Parameter("subscriptionId", "string");
            }

            if (!serviceClient.IsCustomBaseUri)
            {
                parameterList.Parameter("baseUri", "string", optional: true);
            }

            string clientOptionType = serviceClient.OptionalParameterTypeForClientConstructor == "AzureServiceClientOptions"
                ? "msRestAzure.AzureServiceClientOptions"
                : serviceClient.OptionalParameterTypeForClientConstructor;
            parameterList.Parameter("options", clientOptionType, optional: true);

            return builder.ToString();
        }

        private static Property GetProperty(CodeModel serviceClient, string propertyName)
        {
            return serviceClient.Properties.FirstOrDefault((Property property) => property.Name.EqualsIgnoreCase(propertyName));
        }

        private static string GetOptionsValueOrDefaultValue(string propertyName, CodeModel serviceClient)
        {
            Property property = GetProperty(serviceClient, propertyName);
            string result = $"options.{propertyName}";
            if (property != null && !string.IsNullOrEmpty(property.DefaultValue))
            {
                result += $" == undefined ? {property.DefaultValue} : options.{propertyName}";
            }
            return result;
        }

        public static string AzureServiceClientSuperConstructorArgumentList(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSArgumentList argumentList = new TSArgumentList(builder);

            argumentList.Text("credentials");

            Property subscriptionIdProperty = GetProperty(serviceClient, "subscriptionId");
            if (subscriptionIdProperty == null || string.IsNullOrEmpty(subscriptionIdProperty.DefaultValue))
            {
                argumentList.Text("subscriptionId");
            }
            else
            {
                argumentList.Text(subscriptionIdProperty.DefaultValue);
            }

            argumentList.Text("options");

            return builder.ToString();
        }

        public static string ServiceClientConstructorPropertyInitialization(CodeModelTS serviceClient, ISet<string> propertiesToIgnore)
        {
            TSBuilder builder = new TSBuilder();
            TSBlock block = new TSBlock(builder);

            IEnumerable<Property> propertiesToInitialize = serviceClient.Properties.Where((Property property) => !propertiesToIgnore.Contains(property.Name) && property.DefaultValue != null);
            foreach (Property propertyToInitialize in propertiesToInitialize)
            {
                block.Line($"this.{propertyToInitialize.Name} = {propertyToInitialize.DefaultValue};");
            }

            block.Line($"this.baseUri = {(!serviceClient.IsCustomBaseUri ? "baseUri || " : "")}\"{serviceClient.BaseUrl}\";");

            IEnumerable<Property> constructorParameters = GetConstructorParameters(serviceClient).Where((Property property) => !propertiesToIgnore.Contains(property.Name));
            foreach (Property constructorParameter in constructorParameters)
            {
                block.Line($"this.{constructorParameter.Name} = {constructorParameter.Name};");
            }

            IEnumerable<Property> optionalParameters = serviceClient.Properties.Where(p => (!p.IsRequired || p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)) && !p.IsConstant && !propertiesToIgnore.Contains(p.Name) && !p.Name.EqualsIgnoreCase("apiVersion"));
            foreach (Property optionalParameter in optionalParameters)
            {
                block.If($"options.{optionalParameter.Name} != undefined", ifBlock =>
                {
                    ifBlock.Line($"this.{optionalParameter.Name} = options.{optionalParameter.Name};");
                });
            }

            return builder.ToString();
        }

        public static string ConstructorValidateRequiredParameters(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSBlock constructor = new TSBlock(builder);

            IEnumerable<Property> requiredParameters = serviceClient.Properties.Where(p => p.IsRequired && !p.IsConstant && string.IsNullOrEmpty(p.DefaultValue));
            foreach (Property requiredParameter in requiredParameters)
            {
                constructor.If($"{requiredParameter.Name} == undefined", ifBlock =>
                {
                    ifBlock.Throw($"new Error(\"'{requiredParameter.Name}' cannot be null.\")");
                });
            }

            return builder.ToString();
        }

        public static string ConstructorBaseUriInitialization(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSBlock constructor = new TSBlock(builder);
            if (serviceClient.IsCustomBaseUri)
            {
                constructor.Line("this.baseUri = baseUri as string;");
                constructor.If("!this.baseUri", ifBlock =>
                {
                    ifBlock.Line($"this.baseUri = \"{serviceClient.BaseUrl}\";");
                });
            }
            else
            {
                constructor.Line($"this.baseUri = \"{serviceClient.BaseUrl}\";");
            }
            return builder.ToString();
        }

        public static string ConstructorSuper()
        {
            return "super(httpPipeline);";
        }

        public static string ConstructorNodeJsUserAgentPackageSetter(CodeModelTS serviceClient, bool isAzure)
        {
            TSBuilder builder = new TSBuilder();
            TSBlock constructor = new TSBlock(builder);

            string httpPipelineVariableName = isAzure ? "httpPipelineOptions" : "httpPipeline";

            constructor.If($"!{httpPipelineVariableName}", ifBlock =>
            {
                ifBlock.Line($"{httpPipelineVariableName} = {{}};");
            });

            Action<TSBlock> setDefaultNodeJsUserAgentPackage = (TSBlock currentBlock) =>
            {
                currentBlock.If($"!{httpPipelineVariableName}.nodeJsUserAgentPackage", nodeJsUserAgentPackageIfBlock =>
                {
                    nodeJsUserAgentPackageIfBlock.Line($"{httpPipelineVariableName}.nodeJsUserAgentPackage = \"{serviceClient.PackageName}/{serviceClient.PackageVersion}\";");
                });
            };
            if (isAzure)
            {
                setDefaultNodeJsUserAgentPackage(constructor);
            }
            else
            {
                constructor.If($"!({httpPipelineVariableName} instanceof msRest.HttpPipeline)", ifBlock =>
                {
                    setDefaultNodeJsUserAgentPackage(ifBlock);
                });
            }

            return builder.ToString();
        }

    }
}
