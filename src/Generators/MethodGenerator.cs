// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;

namespace AutoRest.TypeScript.Generators
{
    public static class MethodGenerator
    {
        public static string InvokeCallbackFromPromiseResult(MethodTS method)
        {
            TSBuilder builder = new TSBuilder();
            TSBlock block = new TSBlock(builder);

            block.If("err", ifBlock =>
            {
                ifBlock.Line("cb(err);");
            })
            .Else(elseBlock =>
            {
                elseBlock.Line($"{method.BuildResultInitialization("httpResponse")}.then((httpResponseBody: any) => {{");
                elseBlock.Indent(() =>
                {
                    elseBlock.Line("cb(err, httpResponseBody, httpResponse.request, httpResponse);");
                });
                elseBlock.Line($"}});");
            });

            return builder.ToString();
        }
    }
}
