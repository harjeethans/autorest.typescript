/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing AutoRestReportServiceForAzureGetReportOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestReportServiceForAzureGetReportOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [qualifier] If specified, qualifies the generated report
   * further (e.g. '2.7' vs '3.5' in for Python). The only effect is, that
   * generators that run all tests several times, can distinguish the generated
   * reports.
   */
  qualifier?: string;
}

