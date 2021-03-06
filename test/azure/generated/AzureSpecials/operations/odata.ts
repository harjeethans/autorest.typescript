/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/odataMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a Odata. */
export class Odata {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a Odata.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   *
   * @param {OdataGetWithFilterOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getWithFilterWithHttpOperationResponse(options?: Models.OdataGetWithFilterOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getWithFilterOperationSpec);
  }

  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   *
   * @param {OdataGetWithFilterOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getWithFilter(): Promise<void>;
  getWithFilter(options: Models.OdataGetWithFilterOptionalParams): Promise<void>;
  getWithFilter(callback: msRest.ServiceCallback<void>): void;
  getWithFilter(options: Models.OdataGetWithFilterOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getWithFilter(options?: Models.OdataGetWithFilterOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getWithFilterWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getWithFilterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/odata/filter",
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
