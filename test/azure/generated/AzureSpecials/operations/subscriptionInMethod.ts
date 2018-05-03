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
import { AutoRestAzureSpecialParametersTestClient } from "../autoRestAzureSpecialParametersTestClient";

/** Class representing a SubscriptionInMethod. */
export class SubscriptionInMethod {
  private readonly client: AutoRestAzureSpecialParametersTestClient;
  /**
   * Create a SubscriptionInMethod.
   * @param {AutoRestAzureSpecialParametersTestClient} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClient) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId This should appear as a method parameter, use
   * value '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMethodLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (subscriptionId == undefined || typeof subscriptionId !== "string") {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage != undefined && typeof this.client.acceptLanguage !== "string") {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/method/string/none/path/local/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "POST", url: requestUrl });
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = null, client-side validation should prevent you from making this call
   *
   * @param {string} subscriptionId This should appear as a method parameter, use
   * value null, client-side validation should prvenet the call
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMethodLocalNullWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (subscriptionId == undefined || typeof subscriptionId !== "string") {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage != undefined && typeof this.client.acceptLanguage !== "string") {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/method/string/none/path/local/null/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "POST", url: requestUrl });
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId Should appear as a method parameter -use
   * value '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postPathLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (subscriptionId == undefined || typeof subscriptionId !== "string") {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage != undefined && typeof this.client.acceptLanguage !== "string") {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/path/string/none/path/local/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "POST", url: requestUrl });
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId The subscriptionId, which appears in the
   * path, the value is always '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postSwaggerLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;
    // Validate
    try {
      if (subscriptionId == undefined || typeof subscriptionId !== "string") {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage != undefined && typeof this.client.acceptLanguage !== "string") {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/swagger/string/none/path/local/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "POST", url: requestUrl });
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId This should appear as a method parameter, use
   * value '1234-5678-9012-3456'
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
  postMethodLocalValid(subscriptionId: string): Promise<void>;
  postMethodLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postMethodLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodLocalValidWithHttpOperationResponse(subscriptionId, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = null, client-side validation should prevent you from making this call
   *
   * @param {string} subscriptionId This should appear as a method parameter, use
   * value null, client-side validation should prvenet the call
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
  postMethodLocalNull(subscriptionId: string): Promise<void>;
  postMethodLocalNull(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postMethodLocalNull(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalNull(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalNull(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodLocalNullWithHttpOperationResponse(subscriptionId, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodLocalNullWithHttpOperationResponse(subscriptionId, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId Should appear as a method parameter -use
   * value '1234-5678-9012-3456'
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
  postPathLocalValid(subscriptionId: string): Promise<void>;
  postPathLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postPathLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postPathLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postPathLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postPathLocalValidWithHttpOperationResponse(subscriptionId, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postPathLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription
   * id = '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId The subscriptionId, which appears in the
   * path, the value is always '1234-5678-9012-3456'
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
  postSwaggerLocalValid(subscriptionId: string): Promise<void>;
  postSwaggerLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postSwaggerLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postSwaggerLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postSwaggerLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postSwaggerLocalValidWithHttpOperationResponse(subscriptionId, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postSwaggerLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
