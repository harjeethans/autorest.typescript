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
        public static string ClassProperties(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSClass serviceClientClass = new TSClass(builder);

            ISet<string> propertiesToIgnore = new HashSet<string>()
            {
                "acceptLanguage",
                "credentials",
                "generateClientRequestId",
                "longRunningOperationRetryTimeout",
                "subscriptionId",
            };

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

        public static string AzureServiceClientConstructorParameterList(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSParameterList parameterList = new TSParameterList(builder);

            IEnumerable<Property> constructorParameters = serviceClient.Properties.Where((Property property) => !property.IsConstant && property.IsRequired && string.IsNullOrEmpty(property.DefaultValue));
            foreach (Property property in constructorParameters)
            {
                parameterList.Parameter(property.Name, property.ModelType.TSType(inModelsModule: false));
            }

            Property subscriptionProperty = serviceClient.Properties.FirstOrDefault((Property property) => property.Name.EqualsIgnoreCase("subscriptionId"));
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

        public static string AzureServiceClientSuperConstructorArgumentList(CodeModelTS serviceClient)
        {
            TSBuilder builder = new TSBuilder();
            TSArgumentList argumentList = new TSArgumentList(builder);

            argumentList.Text("credentials");

            Property subscriptionProperty = serviceClient.Properties.FirstOrDefault((Property property) => property.Name.EqualsIgnoreCase("subscriptionId"));
            if (subscriptionProperty == null || string.IsNullOrEmpty(subscriptionProperty.DefaultValue))
            {
                argumentList.Text("subscriptionId");
            }
            else
            {
                argumentList.Text(subscriptionProperty.DefaultValue);
            }

            argumentList.Object(options =>
            {
                options.TextProperty("acceptLanguage", "options.acceptLanguage");
                options.TextProperty("generateClientRequestId", "options.generateClientRequestId");
                options.TextProperty("longRunningOperationRetryTimeoutInSeconds", "options.longRunningOperationRetryTimeoutInSeconds");
                options.TextProperty("rpRegistrationRetryTimeoutInSeconds", "options.rpRegistrationRetryTimeoutInSeconds");
                options.TextProperty("noRetryPolicy", "options.noRetryPolicy");
                options.TextProperty("nodeJsUserAgentPackage", $"options.nodeJsUserAgentPackage || \"{serviceClient.PackageName}/${serviceClient.PackageVersion}\"");
            });

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
