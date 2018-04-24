// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using System;

namespace AutoRest.TypeScript
{
    public static class OperationSpecGenerator
    {
        public static string GenerateOperationSpecs(MethodTS method)
        {
            TSFile tsFile = new TSFile(null);

            tsFile.ConstVariable($"{method.Name.ToCamelCase()}OperationSpec", "OperationSpec", (TSObject tsObject) =>
            {
                tsObject.Property("requestHttpMethod", $"HttpMethod.{method.HttpMethod.ToString().ToUpper()}");
                ParameterTS requestBody = method.RequestBody;
                if (requestBody != null)
                {
                    tsObject.Property("requestBodySpec", (TSValue tsValue) => GenerateTypeSpecReference(tsValue, requestBody.ModelType));
                }
            });

            return tsFile.ToString();
        }

        private static void GenerateTypeSpecReference(TSValue tsValue, IModelType type)
        {
            if (type is CompositeType compositeType)
            {
                tsValue.Text($"TypeSpecs.{compositeType.Name}");
            }
            else if (type is DictionaryType dictionaryType)
            {
                tsValue.FunctionCall("msRest.dictionarySpec", tsArgumentList => GenerateTypeSpecReference(tsArgumentList, dictionaryType.ValueType));
            }
            else if (type is SequenceType sequenceType)
            {
                tsValue.FunctionCall("msRest.sequenceSpec", tsArgumentList => GenerateTypeSpecReference(tsArgumentList, sequenceType.ElementType));
            }
            else if (type is EnumType enumType)
            {
                if (enumType.ModelAsString)
                {
                    tsValue.Text("msRest.stringSpec");
                }
                else
                {
                    tsValue.FunctionCall("msRest.enumSpec", argumentList =>
                    {
                        argumentList.QuotedString(enumType.ClassName);
                        argumentList.Text(enumType.GetEnumValuesArray());
                    });
                }
            }
            else if (type is PrimaryType primaryType)
            {
                switch (primaryType.KnownPrimaryType)
                {
                    case KnownPrimaryType.Base64Url:
                        tsValue.Text("msRest.base64UrlSpec");
                        break;

                    case KnownPrimaryType.Boolean:
                        tsValue.Text("msRest.booleanSpec");
                        break;

                    case KnownPrimaryType.ByteArray:
                        tsValue.Text("msRest.byteArraySpec");
                        break;

                    case KnownPrimaryType.Double:
                    case KnownPrimaryType.Int:
                    case KnownPrimaryType.Long:
                    case KnownPrimaryType.Decimal:
                        tsValue.Text("msRest.numberSpec");
                        break;

                    case KnownPrimaryType.Stream:
                        tsValue.Text("msRest.streamSpec");
                        break;

                    case KnownPrimaryType.String:
                        tsValue.Text("msRest.stringSpec");
                        break;

                    case KnownPrimaryType.Date:
                        tsValue.Text("msRest.dateSpec");
                        break;

                    case KnownPrimaryType.DateTime:
                        tsValue.Text("msRest.dateTimeSpec");
                        break;

                    case KnownPrimaryType.DateTimeRfc1123:
                        tsValue.Text("msRest.dateTimeRfc1123Spec");
                        break;

                    case KnownPrimaryType.Object:
                        tsValue.Text("msRest.objectSpec");
                        break;

                    case KnownPrimaryType.TimeSpan:
                        tsValue.Text("msRest.timeSpanSpec");
                        break;

                    case KnownPrimaryType.UnixTime:
                        tsValue.Text("msRest.unixTimeSpec");
                        break;

                    case KnownPrimaryType.Uuid:
                        tsValue.Text("msRest.uuidSpec");
                        break;

                    default:
                        throw new Exception($"Unrecognized KnownPrimaryType: {primaryType.KnownPrimaryType}");
                }
            }
            else
            {
                throw new Exception($"Unrecognized IModelType: {type.GetType().FullName}");
            }
        }
    }
}
