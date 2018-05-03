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
import * as Models from "./models";
import * as Mappers from "./models/mappers";

class AutoRestValidationTest extends msRest.ServiceClient {
  /**
   * Subscription ID.
   */
  public subscriptionId: string;
  /**
   * Required string following pattern \d{2}-\d{2}-\d{4}
   */
  public apiVersion: string;
  public baseUri: string;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestValidationTest class.
   * @constructor
   *
   * @param {string} subscriptionId - Subscription ID.
   *
   * @param {string} apiVersion - Required string following pattern \d{2}-\d{2}-\d{4}
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
   */
  constructor(subscriptionId: string, apiVersion: string, baseUri?: string, options?: msRest.ServiceClientOptions) {
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }
    if (apiVersion === null || apiVersion === undefined) {
      throw new Error('\'apiVersion\' cannot be null.');
    }

    if (!options) options = {};

    super(options);

    this.baseUri = baseUri || "http://localhost:3000";
    this.subscriptionId = subscriptionId;
    this.apiVersion = apiVersion;

    this.serializer = new msRest.Serializer(Mappers, false);
  }
  // methods on the client.

  /**
   * Validates input parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars
   * with pattern [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async validationOfMethodParametersWithHttpOperationResponse(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this;
    // Validate
    try {
      if (this.subscriptionId == undefined || typeof this.subscriptionId !== "string") {
        throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName == undefined || typeof resourceGroupName !== "string") {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName != undefined) {
        if (resourceGroupName.length > 10)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
        }
        if (resourceGroupName.length < 3)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
        }
        if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
        }
      }
      if (id == undefined || typeof id !== 'number') {
        throw new Error('id cannot be null or undefined and it must be of type number.');
      }
      if (id != undefined) {
        if (id > 1000)
        {
          throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
        }
        if (id < 100)
        {
          throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
        }
        if (id % 10 !== 0)
        {
          throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
        }
      }
      if (this.apiVersion == undefined || typeof this.apiVersion !== "string") {
        throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
      }
      if (this.apiVersion != undefined) {
        if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null)
        {
          throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('apiVersion=' + encodeURIComponent(this.apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "GET", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
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
          const resultMapper = Mappers.Product;
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
  // methods on the client.

  /**
   * Validates body parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars
   * with pattern [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {AutoRestValidationTestValidationOfBodyOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async validationOfBodyWithHttpOperationResponse(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams): Promise<msRest.HttpResponse> {
    let client = this;
    let body = (options && options.body !== undefined) ? options.body : undefined;
    // Validate
    try {
      if (this.subscriptionId == undefined || typeof this.subscriptionId !== "string") {
        throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName == undefined || typeof resourceGroupName !== "string") {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName != undefined) {
        if (resourceGroupName.length > 10)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
        }
        if (resourceGroupName.length < 3)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
        }
        if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null)
        {
          throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
        }
      }
      if (id == undefined || typeof id !== 'number') {
        throw new Error('id cannot be null or undefined and it must be of type number.');
      }
      if (id != undefined) {
        if (id > 1000)
        {
          throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
        }
        if (id < 100)
        {
          throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
        }
        if (id % 10 !== 0)
        {
          throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
        }
      }
      if (this.apiVersion == undefined || typeof this.apiVersion !== "string") {
        throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
      }
      if (this.apiVersion != undefined) {
        if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null)
        {
          throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('apiVersion=' + encodeURIComponent(this.apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "PUT", url: requestUrl });
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
      if (body !== null && body !== undefined) {
        let requestModelMapper = Mappers.Product;
        requestModel = client.serializer.serialize(requestModelMapper, body, 'body');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(body, null, 2)}.`);
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
          const resultMapper = Mappers.Product;
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
  // methods on the client.

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getWithConstantInPathWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this;
    let constantParam = 'constant';

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
    requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "GET", url: requestUrl });
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
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
  // methods on the client.

  /**
   * @param {AutoRestValidationTestPostWithConstantInBodyOptionalParams}
   * [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postWithConstantInBodyWithHttpOperationResponse(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams): Promise<msRest.HttpResponse> {
    let client = this;
    let body = (options && options.body !== undefined) ? options.body : undefined;
    let constantParam = 'constant';

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
    requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));

    // Create HTTP transport objects
    const httpRequest = new msRest.HttpRequest({ method: "POST", url: requestUrl });
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
      if (body !== null && body !== undefined) {
        let requestModelMapper = Mappers.Product;
        requestModel = client.serializer.serialize(requestModelMapper, body, 'body');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(body, null, 2)}.`);
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
    // Deserialize Response
    if (statusCode === 200) {
      deserializedBody = await httpResponse.deserializedBody();
      try {
        if (deserializedBody != undefined) {
          const resultMapper = Mappers.Product;
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
   * Validates input parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars
   * with pattern [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  validationOfMethodParameters(resourceGroupName: string, id: number): Promise<Models.Product>;
  validationOfMethodParameters(resourceGroupName: string, id: number, options: msRest.RequestOptionsBase): Promise<Models.Product>;
  validationOfMethodParameters(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfMethodParameters(resourceGroupName: string, id: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfMethodParameters(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * Validates body parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars
   * with pattern [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {AutoRestValidationTestValidationOfBodyOptionalParams} [options]
   * Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  validationOfBody(resourceGroupName: string, id: number): Promise<Models.Product>;
  validationOfBody(resourceGroupName: string, id: number, options: Models.AutoRestValidationTestValidationOfBodyOptionalParams): Promise<Models.Product>;
  validationOfBody(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfBody(resourceGroupName: string, id: number, options: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfBody(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
  getWithConstantInPath(): Promise<void>;
  getWithConstantInPath(options: msRest.RequestOptionsBase): Promise<void>;
  getWithConstantInPath(callback: msRest.ServiceCallback<void>): void;
  getWithConstantInPath(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getWithConstantInPath(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getWithConstantInPathWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithConstantInPathWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * @param {AutoRestValidationTestPostWithConstantInBodyOptionalParams}
   * [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postWithConstantInBody(): Promise<Models.Product>;
  postWithConstantInBody(options: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams): Promise<Models.Product>;
  postWithConstantInBody(callback: msRest.ServiceCallback<Models.Product>): void;
  postWithConstantInBody(options: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  postWithConstantInBody(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.postWithConstantInBodyWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postWithConstantInBodyWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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

export { AutoRestValidationTest, Models as AutoRestValidationTestModels, Mappers as AutoRestValidationTestMappers };
