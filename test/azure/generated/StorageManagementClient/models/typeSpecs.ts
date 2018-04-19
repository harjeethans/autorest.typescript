/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { booleanSpec, compositeSpec, CompositeTypeSpec, dateTimeSpec, dictionarySpec, enumSpec, numberSpec, sequenceSpec, stringSpec } from "ms-rest-js";

export const StorageAccountCheckNameAvailabilityParameters: CompositeTypeSpec = compositeSpec("StorageAccountCheckNameAvailabilityParameters", {
  name: {
    required: true,
    valueSpec: stringSpec
  },
  type: {
    valueSpec: stringSpec
  }
});

/**
 * The CheckNameAvailability operation response.
 */
export const CheckNameAvailabilityResult: CompositeTypeSpec = compositeSpec("CheckNameAvailabilityResult", {
  /**
   * Gets a boolean value that indicates whether the name is available for you to use. If true, the
   * name is available. If false, the name has already been taken or invalid and cannot be used.
   */
  nameAvailable: {
    valueSpec: booleanSpec
  },
  /**
   * Gets the reason that a storage account name could not be used. The Reason element is only
   * returned if NameAvailable is false. Possible values include: 'AccountNameInvalid',
   * 'AlreadyExists'
   */
  reason: {
    valueSpec: enumSpec("Reason", [ 'AccountNameInvalid', 'AlreadyExists' ])
  },
  /**
   * Gets an error message explaining the Reason value in more detail.
   */
  message: {
    valueSpec: stringSpec
  }
});

export const Resource: CompositeTypeSpec = compositeSpec("Resource", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  },
  /**
   * Resource name
   */
  name: {
    valueSpec: stringSpec
  },
  /**
   * Resource type
   */
  type: {
    valueSpec: stringSpec
  },
  /**
   * Resource location
   */
  location: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Resource tags
   */
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  }
});

/**
 * The parameters to provide for the account.
 */
export const StorageAccountCreateParameters: CompositeTypeSpec = compositeSpec("StorageAccountCreateParameters", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  },
  /**
   * Resource name
   */
  name: {
    valueSpec: stringSpec
  },
  /**
   * Resource type
   */
  type: {
    valueSpec: stringSpec
  },
  /**
   * Resource location
   */
  location: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Resource tags
   */
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  },
  /**
   * Gets or sets the account type. Possible values include: 'Standard_LRS', 'Standard_ZRS',
   * 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType: {
    serializedName: "properties.accountType",
    valueSpec: enumSpec("AccountType", [ 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS' ])
  }
});

/**
 * The URIs that are used to perform a retrieval of a public blob, queue or table object.
 */
export const Bar: CompositeTypeSpec = compositeSpec("Bar", {
  /**
   * Recursive Endpoints
   */
  recursivePoint: {
    serializedName: "RecursivePoint",
    valueSpec: "Endpoints"
  }
});

/**
 * The URIs that are used to perform a retrieval of a public blob, queue or table object.
 */
export const Foo: CompositeTypeSpec = compositeSpec("Foo", {
  /**
   * Bar point
   */
  barPoint: {
    serializedName: "Bar\\.Point",
    valueSpec: Bar
  }
});

/**
 * The URIs that are used to perform a retrieval of a public blob, queue or table object.
 */
export const Endpoints: CompositeTypeSpec = compositeSpec("Endpoints", {
  /**
   * Gets the blob endpoint.
   */
  blob: {
    valueSpec: stringSpec
  },
  /**
   * Gets the queue endpoint.
   */
  queue: {
    valueSpec: stringSpec
  },
  /**
   * Gets the table endpoint.
   */
  table: {
    valueSpec: stringSpec
  },
  /**
   * Dummy EndPoint
   */
  dummyEndPoint: {
    valueSpec: "Endpoints"
  },
  /**
   * Foo point
   */
  fooPoint: {
    serializedName: "FooPoint",
    valueSpec: Foo
  }
});

/**
 * The custom domain assigned to this storage account. This can be set via Update.
 */
export const CustomDomain: CompositeTypeSpec = compositeSpec("CustomDomain", {
  /**
   * Gets or sets the custom domain name. Name is the CNAME source.
   */
  name: {
    valueSpec: stringSpec
  },
  /**
   * Indicates whether indirect CName validation is enabled. Default value is false. This should
   * only be set on updates
   */
  useSubDomain: {
    valueSpec: booleanSpec
  }
});

/**
 * The storage account.
 */
export const StorageAccount: CompositeTypeSpec = compositeSpec("StorageAccount", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  },
  /**
   * Resource name
   */
  name: {
    valueSpec: stringSpec
  },
  /**
   * Resource type
   */
  type: {
    valueSpec: stringSpec
  },
  /**
   * Resource location
   */
  location: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Resource tags
   */
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  },
  /**
   * Gets the status of the storage account at the time the operation was called. Possible values
   * include: 'Creating', 'ResolvingDNS', 'Succeeded'
   */
  provisioningState: {
    serializedName: "properties.provisioningState",
    valueSpec: enumSpec("ProvisioningState", [ 'Creating', 'ResolvingDNS', 'Succeeded' ])
  },
  /**
   * Gets the type of the storage account. Possible values include: 'Standard_LRS', 'Standard_ZRS',
   * 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType: {
    serializedName: "properties.accountType",
    valueSpec: enumSpec("AccountType", [ 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS' ])
  },
  /**
   * Gets the URLs that are used to perform a retrieval of a public blob, queue or table
   * object.Note that StandardZRS and PremiumLRS accounts only return the blob endpoint.
   */
  primaryEndpoints: {
    serializedName: "properties.primaryEndpoints",
    valueSpec: Endpoints
  },
  /**
   * Gets the location of the primary for the storage account.
   */
  primaryLocation: {
    serializedName: "properties.primaryLocation",
    valueSpec: stringSpec
  },
  /**
   * Gets the status indicating whether the primary location of the storage account is available or
   * unavailable. Possible values include: 'Available', 'Unavailable'
   */
  statusOfPrimary: {
    serializedName: "properties.statusOfPrimary",
    valueSpec: enumSpec("AccountStatus", [ 'Available', 'Unavailable' ])
  },
  /**
   * Gets the timestamp of the most recent instance of a failover to the secondary location. Only
   * the most recent timestamp is retained. This element is not returned if there has never been a
   * failover instance. Only available if the accountType is StandardGRS or StandardRAGRS.
   */
  lastGeoFailoverTime: {
    serializedName: "properties.lastGeoFailoverTime",
    valueSpec: dateTimeSpec
  },
  /**
   * Gets the location of the geo replicated secondary for the storage account. Only available if
   * the accountType is StandardGRS or StandardRAGRS.
   */
  secondaryLocation: {
    serializedName: "properties.secondaryLocation",
    valueSpec: stringSpec
  },
  /**
   * Gets the status indicating whether the secondary location of the storage account is available
   * or unavailable. Only available if the accountType is StandardGRS or StandardRAGRS. Possible
   * values include: 'Available', 'Unavailable'
   */
  statusOfSecondary: {
    serializedName: "properties.statusOfSecondary",
    valueSpec: enumSpec("AccountStatus", [ 'Available', 'Unavailable' ])
  },
  /**
   * Gets the creation date and time of the storage account in UTC.
   */
  creationTime: {
    serializedName: "properties.creationTime",
    valueSpec: dateTimeSpec
  },
  /**
   * Gets the user assigned custom domain assigned to this storage account.
   */
  customDomain: {
    serializedName: "properties.customDomain",
    valueSpec: CustomDomain
  },
  /**
   * Gets the URLs that are used to perform a retrieval of a public blob, queue or table object
   * from the secondary location of the storage account. Only available if the accountType is
   * StandardRAGRS.
   */
  secondaryEndpoints: {
    serializedName: "properties.secondaryEndpoints",
    valueSpec: Endpoints
  }
});

/**
 * The access keys for the storage account.
 */
export const StorageAccountKeys: CompositeTypeSpec = compositeSpec("StorageAccountKeys", {
  /**
   * Gets the value of key 1.
   */
  key1: {
    valueSpec: stringSpec
  },
  /**
   * Gets the value of key 2.
   */
  key2: {
    valueSpec: stringSpec
  }
});

/**
 * The parameters to update on the account.
 */
export const StorageAccountUpdateParameters: CompositeTypeSpec = compositeSpec("StorageAccountUpdateParameters", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  },
  /**
   * Resource name
   */
  name: {
    valueSpec: stringSpec
  },
  /**
   * Resource type
   */
  type: {
    valueSpec: stringSpec
  },
  /**
   * Resource location
   */
  location: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Resource tags
   */
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  },
  /**
   * Gets or sets the account type. Note that StandardZRS and PremiumLRS accounts cannot be changed
   * to other account types, and other account types cannot be changed to StandardZRS or
   * PremiumLRS. Possible values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
   * 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType: {
    serializedName: "properties.accountType",
    valueSpec: enumSpec("AccountType", [ 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS' ])
  },
  /**
   * User domain assigned to the storage account. Name is the CNAME source. Only one custom domain
   * is supported per storage account at this time. To clear the existing custom domain, use an
   * empty string for the custom domain name property.
   */
  customDomain: {
    serializedName: "properties.customDomain",
    valueSpec: CustomDomain
  }
});

export const StorageAccountRegenerateKeyParameters: CompositeTypeSpec = compositeSpec("StorageAccountRegenerateKeyParameters", {
  /**
   * Possible values include: 'key1', 'key2'
   */
  keyName: {
    valueSpec: enumSpec("KeyName", [ 'key1', 'key2' ])
  }
});

/**
 * The Usage Names.
 */
export const UsageName: CompositeTypeSpec = compositeSpec("UsageName", {
  /**
   * Gets a string describing the resource name.
   */
  value: {
    valueSpec: stringSpec
  },
  /**
   * Gets a localized string describing the resource name.
   */
  localizedValue: {
    valueSpec: stringSpec
  }
});

/**
 * Describes Storage Resource Usage.
 */
export const Usage: CompositeTypeSpec = compositeSpec("Usage", {
  /**
   * Gets the unit of measurement. Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
   * 'CountsPerSecond', 'BytesPerSecond'
   */
  unit: {
    valueSpec: enumSpec("UsageUnit", [ 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond', 'BytesPerSecond' ])
  },
  /**
   * Gets the current count of the allocated resources in the subscription.
   */
  currentValue: {
    valueSpec: numberSpec
  },
  /**
   * Gets the maximum count of the resources that can be allocated in the subscription.
   */
  limit: {
    valueSpec: numberSpec
  },
  /**
   * Gets the name of the type of usage.
   */
  name: {
    valueSpec: UsageName
  }
});

/**
 * The List Usages operation response.
 */
export const UsageListResult: CompositeTypeSpec = compositeSpec("UsageListResult", {
  /**
   * Gets or sets the list Storage Resource Usages.
   */
  value: {
    valueSpec: sequenceSpec(Usage)
  }
});

export const SubResource: CompositeTypeSpec = compositeSpec("SubResource", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  }
});

/**
 * Optional Parameters.
 */
export const StorageAccountsRegenerateKeyOptionalParams: CompositeTypeSpec = compositeSpec("StorageAccountsRegenerateKeyOptionalParams", {
  /**
   * Possible values include: 'key1', 'key2'
   */
  keyName: {
    valueSpec: enumSpec("KeyName", [ 'key1', 'key2' ])
  }
});
