/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { AzureCompositeModelContext } from "./azureCompositeModelContext";
import * as operations from "./operations";


class AzureCompositeModel extends AzureCompositeModelContext {
  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;
  flattencomplex: operations.Flattencomplex;

  /**
   * @class
   * Initializes a new instance of the AzureCompositeModel class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
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
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
    this.flattencomplex = new operations.Flattencomplex(this);
  }
  // methods on the client.

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at a given location.
   * The response includes the display name and other details about each product, and lists the
   * products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec);
  }
  // methods on the client.

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogDictionary>> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      createOperationSpec);
  }
  // methods on the client.

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      updateOperationSpec);
  }

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at a given location.
   * The response includes the display name and other details about each product, and lists the
   * products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), resourceGroupName, options, callback);
  }

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogDictionary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogDictionary} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  create(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): any {
    return msRest.responseToBody(this.createWithHttpOperationResponse.bind(this), subscriptionId, resourceGroupName, options, callback);
  }

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), subscriptionId, resourceGroupName, options, callback);
  }
}

// Operation Specifications
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "subscriptionId",
        defaultValue: '123456',
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "resourceGroupName",
      mapper: {
        required: true,
        serializedName: "resourceGroupName",
        type: {
          name: "String"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2014-04-01-preview',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "resourceGroupName",
      mapper: {
        required: true,
        serializedName: "resourceGroupName",
        type: {
          name: "String"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2014-04-01-preview',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: {
      productDictionaryOfArray: [
        "options",
        "productDictionaryOfArray"
      ]
    },
    mapper: {
      ...Mappers.CatalogDictionaryOfArray,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogDictionary
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "resourceGroupName",
      mapper: {
        required: true,
        serializedName: "resourceGroupName",
        type: {
          name: "String"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2014-04-01-preview',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: {
      productArrayOfDictionary: [
        "options",
        "productArrayOfDictionary"
      ]
    },
    mapper: {
      ...Mappers.CatalogArrayOfDictionary,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

export { AzureCompositeModel, Models as AzureCompositeModelModels, Mappers as AzureCompositeModelMappers };
