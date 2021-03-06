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
import * as Mappers from "../models/byteModelMappers";
import { AutoRestSwaggerBATByteServiceContext } from "../autoRestSwaggerBATByteServiceContext";

/** Class representing a ByteModel. */
export class ByteModel {
  private readonly client: AutoRestSwaggerBATByteServiceContext;

  /**
   * Create a ByteModel.
   * @param {AutoRestSwaggerBATByteServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATByteServiceContext) {
    this.client = client;
  }

  /**
   * Get null byte value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNullWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Uint8Array>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec);
  }

  /**
   * Get empty byte value ''
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Uint8Array>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec);
  }

  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNonAsciiWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Uint8Array>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNonAsciiOperationSpec);
  }

  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   *
   * @param {Uint8Array} byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7
   * F6)
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putNonAsciiWithHttpOperationResponse(byteBody: Uint8Array, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        byteBody,
        options
      },
      putNonAsciiOperationSpec);
  }

  /**
   * Get invalid byte value ':::SWAGGER::::'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getInvalidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Uint8Array>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec);
  }

  /**
   * Get null byte value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Uint8Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNull(): Promise<Uint8Array>;
  getNull(options: msRest.RequestOptionsBase): Promise<Uint8Array>;
  getNull(callback: msRest.ServiceCallback<Uint8Array>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Uint8Array>): any {
    return msRest.responseToBody(this.getNullWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get empty byte value ''
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Uint8Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(): Promise<Uint8Array>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Uint8Array>;
  getEmpty(callback: msRest.ServiceCallback<Uint8Array>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Uint8Array>): any {
    return msRest.responseToBody(this.getEmptyWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Uint8Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNonAscii(): Promise<Uint8Array>;
  getNonAscii(options: msRest.RequestOptionsBase): Promise<Uint8Array>;
  getNonAscii(callback: msRest.ServiceCallback<Uint8Array>): void;
  getNonAscii(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getNonAscii(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Uint8Array>): any {
    return msRest.responseToBody(this.getNonAsciiWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   *
   * @param {Uint8Array} byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7
   * F6)
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
  putNonAscii(byteBody: Uint8Array): Promise<void>;
  putNonAscii(byteBody: Uint8Array, options: msRest.RequestOptionsBase): Promise<void>;
  putNonAscii(byteBody: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  putNonAscii(byteBody: Uint8Array, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putNonAscii(byteBody: Uint8Array, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putNonAsciiWithHttpOperationResponse.bind(this), byteBody, options, callback);
  }

  /**
   * Get invalid byte value ':::SWAGGER::::'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Uint8Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getInvalid(): Promise<Uint8Array>;
  getInvalid(options: msRest.RequestOptionsBase): Promise<Uint8Array>;
  getInvalid(callback: msRest.ServiceCallback<Uint8Array>): void;
  getInvalid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getInvalid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Uint8Array>): any {
    return msRest.responseToBody(this.getInvalidWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/empty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNonAsciiOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/nonAscii",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putNonAsciiOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "byte/nonAscii",
  requestBody: {
    parameterPath: "byteBody",
    mapper: {
      required: true,
      serializedName: "byteBody",
      type: {
        name: "ByteArray"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/invalid",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
