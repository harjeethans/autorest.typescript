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
import { AutoRestHttpInfrastructureTestService } from "../autoRestHttpInfrastructureTestService";

const WebResource = msRest.WebResource;

/** Class representing a HttpServerFailure. */
export class HttpServerFailure {
  private readonly client: AutoRestHttpInfrastructureTestService;
  /**
   * Create a HttpServerFailure.
   * @param {AutoRestHttpInfrastructureTestService} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestService) {
    this.client = client;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async head501WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/failure/server/501");

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(httpRequest, {
        httpMethod: "HEAD"
      });
      let statusCode = operationRes.status;
      if (statusCode < 200 || statusCode >= 300) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      let parsedResponse = operationRes.parsedBody as { [key: string]: any };
      try {
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = Mappers.ErrorModel;
          operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
        }
      } catch (error) {
        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(operationRes);
        return Promise.reject(deserializationError);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async get501WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/failure/server/501");

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(httpRequest, {
        httpMethod: "GET"
      });
      let statusCode = operationRes.status;
      if (statusCode < 200 || statusCode >= 300) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      let parsedResponse = operationRes.parsedBody as { [key: string]: any };
      try {
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = Mappers.ErrorModel;
          operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
        }
      } catch (error) {
        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(operationRes);
        return Promise.reject(deserializationError);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailurePost505OptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async post505WithHttpOperationResponse(options?: Models.HttpServerFailurePost505OptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let booleanValue = (options && options.booleanValue !== undefined) ? options.booleanValue : undefined;
    // Validate
    try {
      if (booleanValue !== null && booleanValue !== undefined && typeof booleanValue !== 'boolean') {
        throw new Error('booleanValue must be of type boolean.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/failure/server/505");

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (booleanValue !== null && booleanValue !== undefined) {
        let requestModelMapper = {
          required: false,
          serializedName: 'booleanValue',
          type: {
            name: 'Boolean'
          }
        };
        requestModel = client.serializer.serialize(requestModelMapper, booleanValue, 'booleanValue');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(booleanValue, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(httpRequest, {
        httpMethod: "POST"
      });
      let statusCode = operationRes.status;
      if (statusCode < 200 || statusCode >= 300) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      let parsedResponse = operationRes.parsedBody as { [key: string]: any };
      try {
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = Mappers.ErrorModel;
          operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
        }
      } catch (error) {
        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(operationRes);
        return Promise.reject(deserializationError);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailureDelete505OptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async delete505WithHttpOperationResponse(options?: Models.HttpServerFailureDelete505OptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let booleanValue = (options && options.booleanValue !== undefined) ? options.booleanValue : undefined;
    // Validate
    try {
      if (booleanValue !== null && booleanValue !== undefined && typeof booleanValue !== 'boolean') {
        throw new Error('booleanValue must be of type boolean.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/failure/server/505");

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (booleanValue !== null && booleanValue !== undefined) {
        let requestModelMapper = {
          required: false,
          serializedName: 'booleanValue',
          type: {
            name: 'Boolean'
          }
        };
        requestModel = client.serializer.serialize(requestModelMapper, booleanValue, 'booleanValue');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(booleanValue, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(httpRequest, {
        httpMethod: "DELETE"
      });
      let statusCode = operationRes.status;
      if (statusCode < 200 || statusCode >= 300) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      let parsedResponse = operationRes.parsedBody as { [key: string]: any };
      try {
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = Mappers.ErrorModel;
          operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
        }
      } catch (error) {
        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(operationRes);
        return Promise.reject(deserializationError);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head501(): Promise<Models.ErrorModel>;
  head501(options: msRest.RequestOptionsBase): Promise<Models.ErrorModel>;
  head501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head501(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ErrorModel>;
    if (!callback) {
      return this.head501WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ErrorModel);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head501WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ErrorModel;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get501(): Promise<Models.ErrorModel>;
  get501(options: msRest.RequestOptionsBase): Promise<Models.ErrorModel>;
  get501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get501(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ErrorModel>;
    if (!callback) {
      return this.get501WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ErrorModel);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.get501WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ErrorModel;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailurePost505OptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  post505(): Promise<Models.ErrorModel>;
  post505(options: Models.HttpServerFailurePost505OptionalParams): Promise<Models.ErrorModel>;
  post505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post505(options: Models.HttpServerFailurePost505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post505(options?: Models.HttpServerFailurePost505OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ErrorModel>;
    if (!callback) {
      return this.post505WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ErrorModel);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.post505WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ErrorModel;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailureDelete505OptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  delete505(): Promise<Models.ErrorModel>;
  delete505(options: Models.HttpServerFailureDelete505OptionalParams): Promise<Models.ErrorModel>;
  delete505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete505(options: Models.HttpServerFailureDelete505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete505(options?: Models.HttpServerFailureDelete505OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ErrorModel>;
    if (!callback) {
      return this.delete505WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ErrorModel);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.delete505WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ErrorModel;
        return cb(err, result, data.request, data);
      });
    }
  }

}