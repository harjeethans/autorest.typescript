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
import * as Mappers from "../models/availabilitySetsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterFlatteningContext } from "../autoRestParameterFlatteningContext";

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: AutoRestParameterFlatteningContext;

  /**
   * Create a AvailabilitySets.
   * @param {AutoRestParameterFlatteningContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterFlatteningContext) {
    this.client = client;
  }

  /**
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A description about the set of
   * tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateWithHttpOperationResponse(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        avset,
        tags,
        options
      },
      updateOperationSpec);
  }

  /**
   * Updates the tags for an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} avset The name of the storage availability set.
   *
   * @param {{ [propertyName: string]: string }} tags A set of tags. A description about the set of
   * tags.
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
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase): Promise<void>;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), resourceGroupName, avset, tags, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "parameterFlattening/{resourceGroupName}/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.avset
  ],
  requestBody: {
    parameterPath: {
      tags: "tags"
    },
    mapper: {
      ...Mappers.AvailabilitySetUpdateParameters,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {}
  },
  serializer
};
