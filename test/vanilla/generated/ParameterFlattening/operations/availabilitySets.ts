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
import * as Mappers from "../models/mappers";
import { AutoRestParameterFlattening } from "../autoRestParameterFlattening";

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: AutoRestParameterFlattening;
  /**
   * Create a AvailabilitySets.
   * @param {AutoRestParameterFlattening} client Reference to the service client.
   */
  constructor(client: AutoRestParameterFlattening) {
    this.client = client;
  }

  /**
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A
   * description about the set of tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async updateWithHttpOperationResponse(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (resourceGroupName == undefined || typeof resourceGroupName !== "string") {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (avset == undefined || typeof avset !== "string") {
        throw new Error('avset cannot be null or undefined and it must be of type string.');
      }
      if (avset != undefined) {
        if (avset.length > 80)
        {
          throw new Error('"avset" should satisfy the constraint - "MaxLength": 80');
        }
      }
      if (tags === null || tags === undefined || typeof tags !== 'object') {
        throw new Error('tags cannot be null or undefined and it must be of type object.');
      }
      for(let valueElement in tags) {
        if (tags[valueElement] != undefined && typeof tags[valueElement] !== "string") {
          throw new Error('tags[valueElement] must be of type string.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let tags1: any
    if (tags !== null && tags !== undefined) {
      tags1 = {};
      tags1.tags = tags;
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterFlattening/{resourceGroupName}/{availabilitySetName}';
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    requestUrl = requestUrl.replace('{availabilitySetName}', encodeURIComponent(avset));

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "PATCH", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    if(options && options.customHeaders) {
      for(const headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers.set(headerName, options.customHeaders[headerName]);
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (tags1 !== null && tags1 !== undefined) {
        let requestModelMapper = Mappers.AvailabilitySetUpdateParameters;
        requestModel = client.serializer.serialize(requestModelMapper, tags1, 'tags1');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(tags1, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    const httpResponse: msRest.HttpResponse = await client.sendRequest(httpRequest);
    const statusCode: number = httpResponse.statusCode;
    let deserializedBody: { [key: string]: any } | undefined;
    if (statusCode !== 200) {
      deserializedBody = await httpResponse.deserializedBody();
      let errorMessage: string = deserializedBody.error && deserializedBody.error.message || deserializedBody.message;
      try {
      } catch (deserializationError) {
        errorMessage = `Error "${deserializationError.message}" occurred in deserializing the responseBody - "${JSON.stringify(deserializedBody)}" for the default response.`;
      }
      throw new msRest.RestError(errorMessage, {
        code: deserializedBody.error && deserializedBody.error.code || deserializedBody.code,
        statusCode: httpResponse.statusCode,
        request: httpRequest,
        response: httpResponse,
        body: deserializedBody
      });
    }
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A
   * description about the set of tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.updateWithHttpOperationResponse(resourceGroupName, avset, tags, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.updateWithHttpOperationResponse(resourceGroupName, avset, tags, options))((err: Error, httpResponse: msRest.HttpResponse) => {
        if (err) {
          cb(err);
        } else {
          httpResponse.deserializedBody().then((httpResponseBody: any) => {
            cb(err, httpResponseBody, httpResponse.request, httpResponse);
          });
        }
      });
    }
  }

}
