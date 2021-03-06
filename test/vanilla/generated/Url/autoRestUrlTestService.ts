/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestUrlTestServiceContext } from "./autoRestUrlTestServiceContext";

class AutoRestUrlTestService extends AutoRestUrlTestServiceContext {
  // Operation groups
  paths: operations.Paths;
  queries: operations.Queries;
  pathItems: operations.PathItems;

  /**
   * @class
   * Initializes a new instance of the AutoRestUrlTestService class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.globalStringQuery] - should contain value null
   *
   */
  constructor(globalStringPath: string, baseUri?: string, options?: Models.AutoRestUrlTestServiceOptions) {
    super(globalStringPath, baseUri, options);
    this.paths = new operations.Paths(this);
    this.queries = new operations.Queries(this);
    this.pathItems = new operations.PathItems(this);
  }
}

// Operation Specifications

export { AutoRestUrlTestService, Models as AutoRestUrlTestServiceModels, Mappers as AutoRestUrlTestServiceMappers };
