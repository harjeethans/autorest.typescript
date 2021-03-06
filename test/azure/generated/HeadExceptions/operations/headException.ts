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
import * as Mappers from "../models/headExceptionMappers";
import * as Parameters from "../models/parameters";
import { AutoRestHeadExceptionTestServiceContext } from "../autoRestHeadExceptionTestServiceContext";

/** Class representing a HeadException. */
export class HeadException {
  private readonly client: AutoRestHeadExceptionTestServiceContext;

  /**
   * Create a HeadException.
   * @param {AutoRestHeadExceptionTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHeadExceptionTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head200WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head200OperationSpec);
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head204WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head204OperationSpec);
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head404WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head404OperationSpec);
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
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
  head200(): Promise<void>;
  head200(options: msRest.RequestOptionsBase): Promise<void>;
  head200(callback: msRest.ServiceCallback<void>): void;
  head200(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head200(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.head200WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
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
  head204(): Promise<void>;
  head204(options: msRest.RequestOptionsBase): Promise<void>;
  head204(callback: msRest.ServiceCallback<void>): void;
  head204(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head204(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.head204WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
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
  head404(): Promise<void>;
  head404(options: msRest.RequestOptionsBase): Promise<void>;
  head404(callback: msRest.ServiceCallback<void>): void;
  head404(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head404(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.head404WithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head200OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const head204OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/204",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const head404OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/success/404",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
