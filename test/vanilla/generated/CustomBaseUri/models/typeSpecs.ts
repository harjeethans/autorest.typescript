/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { compositeSpec, CompositeTypeSpec, numberSpec, stringSpec } from "ms-rest-js";

export const ErrorModel: CompositeTypeSpec = compositeSpec("ErrorModel", {
  status: {
    valueSpec: numberSpec
  },
  message: {
    valueSpec: stringSpec
  }
});

export const AutoRestParameterizedHostTestClientOptions: CompositeTypeSpec = compositeSpec("AutoRestParameterizedHostTestClientOptions", {
  /**
   * A string value that is used as a global part of the parameterized host
   */
  host: {
    valueSpec: stringSpec
  }
});
