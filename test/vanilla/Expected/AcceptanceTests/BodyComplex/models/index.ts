/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";
import { RequestOptionsBase } from "ms-rest-js";


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
 * An interface representing Basic.
 */
export interface Basic {
  /**
   * @member {number} [id] Basic Id
   */
  id?: number;
  /**
   * @member {string} [name] Name property with a very long description that
   * does not fit on a single line and a line break.
   */
  name?: string;
  /**
   * @member {CMYKColors} [color] Possible values include: 'cyan', 'Magenta',
   * 'YELLOW', 'blacK'
   */
  color?: CMYKColors;
}

/**
 * @interface
 * An interface representing Pet.
 */
export interface Pet {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Dog.
 * @extends Pet
 */
export interface Dog extends Pet {
  /**
   * @member {string} [food]
   */
  food?: string;
}

/**
 * @interface
 * An interface representing Cat.
 * @extends Pet
 */
export interface Cat extends Pet {
  /**
   * @member {string} [color]
   */
  color?: string;
  /**
   * @member {Dog[]} [hates]
   */
  hates?: Dog[];
}

/**
 * @interface
 * An interface representing Siamese.
 * @extends Cat
 */
export interface Siamese extends Cat {
  /**
   * @member {string} [breed]
   */
  breed?: string;
}

/**
 * @interface
 * An interface representing Fish.
 */
export interface Fish {
  /**
   * @member {string} [species]
   */
  species?: string;
  /**
   * @member {number} length
   */
  length: number;
  /**
   * @member {Fish[]} [siblings]
   */
  siblings?: Fish[];
  /**
   * @member {string} fishtype Polymorphic Discriminator
   */
  fishtype: string;
}

/**
 * @interface
 * An interface representing Salmon.
 * @extends Fish
 */
export interface Salmon extends Fish {
  /**
   * @member {string} [location]
   */
  location?: string;
  /**
   * @member {boolean} [iswild]
   */
  iswild?: boolean;
}

/**
 * @interface
 * An interface representing SmartSalmon.
 * @extends Salmon
 */
export interface SmartSalmon extends Salmon {
  /**
   * @member {{ [propertyName: string]: any }} [additionalProperties] Unmatched
   * properties from the message are deserialized this collection
   */
  additionalProperties?: { [propertyName: string]: any };
  /**
   * @member {string} [collegeDegree]
   */
  collegeDegree?: string;
}

/**
 * @interface
 * An interface representing Shark.
 * @extends Fish
 */
export interface Shark extends Fish {
  /**
   * @member {number} [age]
   */
  age?: number;
  /**
   * @member {Date} birthday
   */
  birthday: Date;
}

/**
 * @interface
 * An interface representing Sawshark.
 * @extends Shark
 */
export interface Sawshark extends Shark {
  /**
   * @member {Buffer} [picture]
   */
  picture?: Buffer;
}

/**
 * @interface
 * An interface representing Goblinshark.
 * @extends Shark
 */
export interface Goblinshark extends Shark {
  /**
   * @member {number} [jawsize]
   */
  jawsize?: number;
}

/**
 * @interface
 * An interface representing Cookiecuttershark.
 * @extends Shark
 */
export interface Cookiecuttershark extends Shark {
}

/**
 * @interface
 * An interface representing IntWrapper.
 */
export interface IntWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing LongWrapper.
 */
export interface LongWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing FloatWrapper.
 */
export interface FloatWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number} [field2]
   */
  field2?: number;
}

/**
 * @interface
 * An interface representing DoubleWrapper.
 */
export interface DoubleWrapper {
  /**
   * @member {number} [field1]
   */
  field1?: number;
  /**
   * @member {number}
   * [field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose]
   */
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

/**
 * @interface
 * An interface representing BooleanWrapper.
 */
export interface BooleanWrapper {
  /**
   * @member {boolean} [fieldTrue]
   */
  fieldTrue?: boolean;
  /**
   * @member {boolean} [fieldFalse]
   */
  fieldFalse?: boolean;
}

/**
 * @interface
 * An interface representing StringWrapper.
 */
export interface StringWrapper {
  /**
   * @member {string} [field]
   */
  field?: string;
  /**
   * @member {string} [empty]
   */
  empty?: string;
  /**
   * @member {string} [nullProperty]
   */
  nullProperty?: string;
}

/**
 * @interface
 * An interface representing DateWrapper.
 */
export interface DateWrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [leap]
   */
  leap?: Date;
}

/**
 * @interface
 * An interface representing DatetimeWrapper.
 */
export interface DatetimeWrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [now]
   */
  now?: Date;
}

/**
 * @interface
 * An interface representing Datetimerfc1123Wrapper.
 */
export interface Datetimerfc1123Wrapper {
  /**
   * @member {Date} [field]
   */
  field?: Date;
  /**
   * @member {Date} [now]
   */
  now?: Date;
}

/**
 * @interface
 * An interface representing DurationWrapper.
 */
export interface DurationWrapper {
  /**
   * @member {moment.Duration} [field]
   */
  field?: moment.Duration;
}

/**
 * @interface
 * An interface representing ByteWrapper.
 */
export interface ByteWrapper {
  /**
   * @member {Buffer} [field]
   */
  field?: Buffer;
}

/**
 * @interface
 * An interface representing ArrayWrapper.
 */
export interface ArrayWrapper {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing DictionaryWrapper.
 */
export interface DictionaryWrapper {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ReadonlyObj.
 */
export interface ReadonlyObj {
  /**
   * @member {string} [id]
   */
  readonly id?: string;
  /**
   * @member {number} [size]
   */
  size?: number;
}

/**
 * @interface
 * An interface representing PrimitivePutDurationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PrimitivePutDurationOptionalParams extends RequestOptionsBase {
  /**
   * @member {moment.Duration} [field]
   */
  field?: moment.Duration;
}

/**
 * @interface
 * An interface representing PrimitivePutByteOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PrimitivePutByteOptionalParams extends RequestOptionsBase {
  /**
   * @member {Buffer} [field]
   */
  field?: Buffer;
}

/**
 * @interface
 * An interface representing ArrayModelPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ArrayModelPutValidOptionalParams extends RequestOptionsBase {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing ArrayModelPutEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ArrayModelPutEmptyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string[]} [arrayProperty]
   */
  arrayProperty?: string[];
}

/**
 * @interface
 * An interface representing DictionaryPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DictionaryPutValidOptionalParams extends RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing DictionaryPutEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DictionaryPutEmptyOptionalParams extends RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: string }} [defaultProgram]
   */
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ReadonlypropertyPutValidOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ReadonlypropertyPutValidOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [size]
   */
  size?: number;
}

/**
 * Defines values for CMYKColors.
 * Possible values include: 'cyan', 'Magenta', 'YELLOW', 'blacK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: CMYKColors = <CMYKColors>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum CMYKColors {
  /**
   * cyan.
   */
  Cyan = "cyan",
  /**
   * Magenta.
   */
  Magenta = "Magenta",
  /**
   * YELLOW.
   */
  YELLOW = "YELLOW",
  /**
   * blacK.
   */
  BlacK = "blacK"
}
