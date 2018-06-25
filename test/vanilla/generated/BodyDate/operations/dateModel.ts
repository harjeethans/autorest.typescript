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
import * as Mappers from "../models/dateModelMappers";
import { AutoRestDateTestServiceContext } from "../autoRestDateTestServiceContext";

/** Class representing a DateModel. */
export class DateModel {
  private readonly client: AutoRestDateTestServiceContext;

  /**
   * Create a DateModel.
   * @param {AutoRestDateTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestDateTestServiceContext) {
    this.client = client;
  }

  /**
   * Get null date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNullWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec);
  }

  /**
   * Get invalid date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getInvalidDateWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidDateOperationSpec);
  }

  /**
   * Get overflow date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getOverflowDateWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOverflowDateOperationSpec);
  }

  /**
   * Get underflow date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getUnderflowDateWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getUnderflowDateOperationSpec);
  }

  /**
   * Put max date value 9999-12-31
   *
   * @param {Date | string} dateBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putMaxDateWithHttpOperationResponse(dateBody: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        dateBody,
        options
      },
      putMaxDateOperationSpec);
  }

  /**
   * Get max date value 9999-12-31
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMaxDateWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMaxDateOperationSpec);
  }

  /**
   * Put min date value 0000-01-01
   *
   * @param {Date | string} dateBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putMinDateWithHttpOperationResponse(dateBody: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        dateBody,
        options
      },
      putMinDateOperationSpec);
  }

  /**
   * Get min date value 0000-01-01
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMinDateWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Date>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMinDateOperationSpec);
  }

  /**
   * Get null date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNull(): Promise<Date>;
  getNull(options: msRest.RequestOptionsBase): Promise<Date>;
  getNull(callback: msRest.ServiceCallback<Date>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getNullWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get invalid date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getInvalidDate(): Promise<Date>;
  getInvalidDate(options: msRest.RequestOptionsBase): Promise<Date>;
  getInvalidDate(callback: msRest.ServiceCallback<Date>): void;
  getInvalidDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getInvalidDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getInvalidDateWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get overflow date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getOverflowDate(): Promise<Date>;
  getOverflowDate(options: msRest.RequestOptionsBase): Promise<Date>;
  getOverflowDate(callback: msRest.ServiceCallback<Date>): void;
  getOverflowDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getOverflowDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getOverflowDateWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get underflow date value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getUnderflowDate(): Promise<Date>;
  getUnderflowDate(options: msRest.RequestOptionsBase): Promise<Date>;
  getUnderflowDate(callback: msRest.ServiceCallback<Date>): void;
  getUnderflowDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getUnderflowDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getUnderflowDateWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put max date value 9999-12-31
   *
   * @param {Date | string} dateBody
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
  putMaxDate(dateBody: Date | string): Promise<void>;
  putMaxDate(dateBody: Date | string, options: msRest.RequestOptionsBase): Promise<void>;
  putMaxDate(dateBody: Date | string, callback: msRest.ServiceCallback<void>): void;
  putMaxDate(dateBody: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putMaxDate(dateBody: Date | string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putMaxDateWithHttpOperationResponse.bind(this), dateBody, options, callback);
  }

  /**
   * Get max date value 9999-12-31
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMaxDate(): Promise<Date>;
  getMaxDate(options: msRest.RequestOptionsBase): Promise<Date>;
  getMaxDate(callback: msRest.ServiceCallback<Date>): void;
  getMaxDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getMaxDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getMaxDateWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put min date value 0000-01-01
   *
   * @param {Date | string} dateBody
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
  putMinDate(dateBody: Date | string): Promise<void>;
  putMinDate(dateBody: Date | string, options: msRest.RequestOptionsBase): Promise<void>;
  putMinDate(dateBody: Date | string, callback: msRest.ServiceCallback<void>): void;
  putMinDate(dateBody: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putMinDate(dateBody: Date | string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putMinDateWithHttpOperationResponse.bind(this), dateBody, options, callback);
  }

  /**
   * Get min date value 0000-01-01
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Date} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMinDate(): Promise<Date>;
  getMinDate(options: msRest.RequestOptionsBase): Promise<Date>;
  getMinDate(callback: msRest.ServiceCallback<Date>): void;
  getMinDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Date>): void;
  getMinDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Date>): any {
    return msRest.responseToBody(this.getMinDateWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/null",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getInvalidDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/invaliddate",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getOverflowDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/overflowdate",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getUnderflowDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/underflowdate",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putMaxDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "date/max",
  requestBody: {
    parameterPath: "dateBody",
    mapper: {
      required: true,
      serializedName: "dateBody",
      type: {
        name: "Date"
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
  serializer: new msRest.Serializer(Mappers)
};

const getMaxDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/max",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putMinDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "date/min",
  requestBody: {
    parameterPath: "dateBody",
    mapper: {
      required: true,
      serializedName: "dateBody",
      type: {
        name: "Date"
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
  serializer: new msRest.Serializer(Mappers)
};

const getMinDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "date/min",
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Date"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
