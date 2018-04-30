// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Generators
{
    public static class MethodWithHttpResponseGenerator
    {
        public static string Generate(MethodTS method)
        {
            TSBuilder builder = new TSBuilder();
            builder.Indent(() =>
            {
                builder.DocumentationComment(comment =>
                {
                    comment.Summary(method.Summary);
                    comment.Description(method.Description);
                    foreach (ParameterTS parameter in method.LocalParametersWithOptions)
                    {
                        comment.Parameter(method.ProvideParameterType(parameter.ModelType, true), MethodTS.GetParameterDocumentationName(parameter), parameter.Documentation, !parameter.IsRequired);
                    }
                    comment.Returns("Promise", "A promise is returned.");
                    comment.Resolve("HttpResponse", "- The deserialized result object.");
                    comment.Reject("Error|ServiceError", "- The error object.");
                });
                builder.AsyncMethod(
                    $"{method.Name}WithHttpResponse",
                    "Promise<HttpResponse>",
                    parameterList =>
                    {
                        IEnumerable<ParameterTS> requiredParameters = method.LocalParameters.Where(p => p.IsRequired);
                        foreach (ParameterTS parameter in requiredParameters)
                        {
                            parameterList.Parameter(parameter.Name, method.ProvideParameterType(parameter.ModelType));
                        }

                        string optionsTypeName = method.OptionsParameterModelType.Name;
                        string optionsTypePrefix = optionsTypeName.EqualsIgnoreCase("RequestOptionsBase") ? "msRest" : "Models";
                        string optionsType = $"{optionsTypePrefix}.{optionsTypeName}";
                        parameterList.Parameter("options", optionsType, true);
                    },
                    methodBody =>
                    {
                        string optionsParameterName = method.OptionsParameterTemplateModel.Name;

                        IEnumerable<Property> optionalParametersWithDefaultValues = method.OptionsParameterModelType.Properties
                            .Where((Property parameter) => parameter.Name != "customHeaders" && !string.IsNullOrWhiteSpace(parameter.DefaultValue));
                        if (optionalParametersWithDefaultValues.Any())
                        {
                            methodBody.If($"!{optionsParameterName}", ifBlock =>
                            {
                                ifBlock.Line($"{optionsParameterName} = {{}};");
                            });

                            foreach (Property optionalParameter in optionalParametersWithDefaultValues)
                            {
                                methodBody.If($"{optionsParameterName}.{optionalParameter.Name} === undefined", ifBlock =>
                                {
                                    ifBlock.Line($"{optionsParameterName}.{optionalParameter.Name} = {optionalParameter.DefaultValue};");
                                });
                            }
                        }

                        methodBody.Return(returnValue =>
                        {
                            returnValue.FunctionCall($"await {method.ClientReference}.sendOperation", argumentList =>
                            {
                                argumentList.Object(operation =>
                                {
                                    string className = (method.MethodGroup != null ? method.MethodGroup.TypeName.ToString() : method.CodeModel.Name);

                                    //operation.TextProperty("spec", $"{className}.{OperationSpecGenerator.GetOperationSpecName(method)}");

                                    IEnumerable<ParameterTS> requiredParameters = method.LocalParameters
                                        .Where(parameter => parameter.IsRequired);
                                    IEnumerable<ParameterTS> constantParameters = method.ParameterTemplateModels
                                        .Where(parameter => parameter.IsConstant && !parameter.IsClientProperty);
                                    if (requiredParameters.Any() || constantParameters.Any())
                                    {
                                        operation.ObjectProperty("requiredArguments", requiredArguments =>
                                        {
                                            foreach (ParameterTS requiredParameter in requiredParameters)
                                            {
                                                requiredArguments.TextProperty(requiredParameter.Name, requiredParameter.Name);
                                            }

                                            foreach (ParameterTS constantParameter in constantParameters)
                                            {
                                                requiredArguments.TextProperty(constantParameter.Name, constantParameter.DefaultValue);
                                            }
                                        });
                                    }

                                    operation.TextProperty("optionalArguments", optionsParameterName);
                                });
                            });
                        });
                    });
            });
            return builder.ToString();
        }
    }
}
