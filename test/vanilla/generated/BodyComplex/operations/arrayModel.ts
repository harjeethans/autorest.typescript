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
import { AutoRestComplexTestService } from "../autoRestComplexTestService";

/** Class representing a ArrayModel. */
export class ArrayModel {
  private readonly client: AutoRestComplexTestService;
  /**
   * Create a ArrayModel.
   * @param {AutoRestComplexTestService} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestService) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/valid';

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
          const resultMapper = Mappers.ArrayWrapper;
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
   * Put complex types with array property
   *
   * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putValidWithHttpOperationResponse(options?: Models.ArrayModelPutValidOptionalParams): Promise<msRest.HttpResponse> {
    let client = this.client;
    let arrayProperty = (options && options.arrayProperty !== undefined) ? options.arrayProperty : undefined;
    // Validate
    try {
      if (Array.isArray(arrayProperty)) {
        for (let i = 0; i < arrayProperty.length; i++) {
          if (arrayProperty[i] != undefined && typeof arrayProperty[i] !== "string") {
            throw new Error('arrayProperty[i] must be of type string.');
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let complexBody: any
    if (arrayProperty !== null && arrayProperty !== undefined) {
      complexBody = {};
      complexBody.arrayProperty = arrayProperty;
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/valid';

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
      if (complexBody !== null && complexBody !== undefined) {
        let requestModelMapper = Mappers.ArrayWrapper;
        requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(complexBody, null, 2)}.`);
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * Get complex types with array property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/empty';

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
          const resultMapper = Mappers.ArrayWrapper;
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
   * Put complex types with array property which is empty
   *
   * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putEmptyWithHttpOperationResponse(options?: Models.ArrayModelPutEmptyOptionalParams): Promise<msRest.HttpResponse> {
    let client = this.client;
    let arrayProperty = (options && options.arrayProperty !== undefined) ? options.arrayProperty : undefined;
    // Validate
    try {
      if (Array.isArray(arrayProperty)) {
        for (let i = 0; i < arrayProperty.length; i++) {
          if (arrayProperty[i] != undefined && typeof arrayProperty[i] !== "string") {
            throw new Error('arrayProperty[i] must be of type string.');
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let complexBody: any
    if (arrayProperty !== null && arrayProperty !== undefined) {
      complexBody = {};
      complexBody.arrayProperty = arrayProperty;
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/empty';

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
      if (complexBody !== null && complexBody !== undefined) {
        let requestModelMapper = Mappers.ArrayWrapper;
        requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(complexBody, null, 2)}.`);
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
    httpResponse.deserializedBody = () => Promise.resolve(deserializedBody);
    return httpResponse;
  }

  /**
   * Get complex types with array property while server doesn't provide a
   * response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getNotProvidedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    let client = this.client;

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/array/notprovided';

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
          const resultMapper = Mappers.ArrayWrapper;
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
   * Get complex types with array property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.ArrayWrapper>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getValid(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * Put complex types with array property
   *
   * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
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
  putValid(): Promise<void>;
  putValid(options: Models.ArrayModelPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ArrayModelPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ArrayModelPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * Get complex types with array property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(): Promise<Models.ArrayWrapper>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getEmpty(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
    if (!callback) {
      return this.getEmptyWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * Put complex types with array property which is empty
   *
   * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
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
  putEmpty(): Promise<void>;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams): Promise<void>;
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.ArrayModelPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putEmptyWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putEmptyWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
   * Get complex types with array property while server doesn't provide a
   * response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getNotProvided(): Promise<Models.ArrayWrapper>;
  getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getNotProvided(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    const cb = callback as msRest.ServiceCallback<Models.ArrayWrapper>;
    if (!callback) {
      return this.getNotProvidedWithHttpOperationResponse(options).then((httpResponse: msRest.HttpResponse) => {
        return httpResponse.deserializedBody();
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getNotProvidedWithHttpOperationResponse(options))((err: Error, httpResponse: msRest.HttpResponse) => {
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
