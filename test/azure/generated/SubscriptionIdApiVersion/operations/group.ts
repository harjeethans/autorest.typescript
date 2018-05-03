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
import * as Mappers from "../models/mappers";
import { MicrosoftAzureTestUrl } from "../microsoftAzureTestUrl";

/** Class representing a Group. */
export class Group {
  private readonly client: MicrosoftAzureTestUrl;
  /**
   * Create a Group.
   * @param {MicrosoftAzureTestUrl} client Reference to the service client.
   */
  constructor(client: MicrosoftAzureTestUrl) {
    this.client = client;
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   *
   * @param {string} resourceGroupName Resource Group name 'testgroup101'.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getSampleResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId == undefined || typeof this.client.subscriptionId !== "string") {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName == undefined || typeof resourceGroupName !== "string") {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.client.apiVersion == undefined || typeof this.client.apiVersion !== "string") {
        throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage != undefined && typeof this.client.acceptLanguage !== "string") {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "GET", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers.set("accept-language", this.client.acceptLanguage);
    }
    if(options && options.customHeaders) {
      for(const headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers.set(headerName, options.customHeaders[headerName]);
        }
      }
    }
    // Send Request
    const httpResponse: msRest.HttpResponse = await client.sendRequest(httpRequest);
    const statusCode: number = httpResponse.statusCode;
    let deserializedBody: { [key: string]: any } | undefined;
    if (statusCode !== 200) {
      deserializedBody = await httpResponse.deserializedBody();
      let errorMessage: string = deserializedBody.error && deserializedBody.error.message || deserializedBody.message;
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.ErrorModel;
          deserializedBody = client.serializer.deserialize(resultMapper, deserializedBody, 'deserializedBody');
        }
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
    // Deserialize Response
    if (statusCode === 200) {
      deserializedBody = await httpResponse.deserializedBody();
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.SampleResourceGroup;
          deserializedBody = client.serializer.deserialize(resultMapper, deserializedBody, 'deserializedBody');
        }
      } catch (error) {
        throw new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${JSON.stringify(deserializedBody)}`, {
          request: httpRequest,
          response: httpResponse
        });
      }
    }
        httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   *
   * @param {string} resourceGroupName Resource Group name 'testgroup101'.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.SampleResourceGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.SampleResourceGroup} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getSampleResourceGroup(resourceGroupName: string): Promise<Models.SampleResourceGroup>;
  getSampleResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.SampleResourceGroup>;
  getSampleResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SampleResourceGroup>): void;
  getSampleResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SampleResourceGroup>): void;
  getSampleResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SampleResourceGroup>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.SampleResourceGroup>;
    if (!callback) {
      return this.getSampleResourceGroupWithHttpOperationResponse(resourceGroupName, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getSampleResourceGroupWithHttpOperationResponse(resourceGroupName, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
