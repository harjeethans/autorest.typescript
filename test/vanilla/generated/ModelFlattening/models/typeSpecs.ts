/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { compositeSpec, CompositeTypeSpec, dictionarySpec, numberSpec, sequenceSpec, stringSpec } from "ms-rest-js";

export const ErrorModel: CompositeTypeSpec = compositeSpec("ErrorModel", {
  status: {
    valueSpec: numberSpec
  },
  message: {
    valueSpec: stringSpec
  },
  parentError: {
    valueSpec: "ErrorModel"
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
   * Resource Type
   */
  type: {
    valueSpec: stringSpec
  },
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  },
  /**
   * Resource Location
   */
  location: {
    valueSpec: stringSpec
  },
  /**
   * Resource Name
   */
  name: {
    valueSpec: stringSpec
  }
});

/**
 * Flattened product.
 */
export const FlattenedProduct: CompositeTypeSpec = compositeSpec("FlattenedProduct", {
  /**
   * Resource Id
   */
  id: {
    valueSpec: stringSpec
  },
  /**
   * Resource Type
   */
  type: {
    valueSpec: stringSpec
  },
  tags: {
    valueSpec: dictionarySpec(stringSpec)
  },
  /**
   * Resource Location
   */
  location: {
    valueSpec: stringSpec
  },
  /**
   * Resource Name
   */
  name: {
    valueSpec: stringSpec
  },
  pname: {
    serializedName: "properties.p\\.name",
    valueSpec: stringSpec
  },
  flattenedProductType: {
    serializedName: "properties.type",
    valueSpec: stringSpec
  },
  /**
   * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating', 'Created',
   * 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  provisioningStateValues: {
    serializedName: "properties.provisioningStateValues",
    valueSpec: stringSpec
  },
  provisioningState: {
    serializedName: "properties.provisioningState",
    valueSpec: stringSpec
  }
});

export const ResourceCollection: CompositeTypeSpec = compositeSpec("ResourceCollection", {
  productresource: {
    valueSpec: FlattenedProduct
  },
  arrayofresources: {
    valueSpec: sequenceSpec(FlattenedProduct)
  },
  dictionaryofresources: {
    valueSpec: dictionarySpec(FlattenedProduct)
  }
});

/**
 * The product documentation.
 */
export const BaseProduct: CompositeTypeSpec = compositeSpec("BaseProduct", {
  /**
   * Unique identifier representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId: {
    required: true,
    serializedName: "base_product_id",
    valueSpec: stringSpec
  },
  /**
   * Description of product.
   */
  description: {
    serializedName: "base_product_description",
    valueSpec: stringSpec
  }
});

/**
 * The product documentation.
 */
export const SimpleProduct: CompositeTypeSpec = compositeSpec("SimpleProduct", {
  /**
   * Unique identifier representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId: {
    required: true,
    serializedName: "base_product_id",
    valueSpec: stringSpec
  },
  /**
   * Description of product.
   */
  description: {
    serializedName: "base_product_description",
    valueSpec: stringSpec
  },
  /**
   * Display name of product.
   */
  maxProductDisplayName: {
    required: true,
    serializedName: "details.max_product_display_name",
    valueSpec: stringSpec
  },
  /**
   * Capacity of product. For example, 4 people.
   */
  capacity: {
    required: true,
    serializedName: "details.max_product_capacity",
    valueSpec: stringSpec
  },
  /**
   * Generic URL value.
   */
  genericValue: {
    serializedName: "details.max_product_image.generic_value",
    valueSpec: stringSpec
  },
  /**
   * URL value.
   */
  odatavalue: {
    serializedName: "details.max_product_image.@odata\\.value",
    valueSpec: stringSpec
  }
});

/**
 * The Generic URL.
 */
export const GenericUrl: CompositeTypeSpec = compositeSpec("GenericUrl", {
  /**
   * Generic URL value.
   */
  genericValue: {
    serializedName: "generic_value",
    valueSpec: stringSpec
  }
});

/**
 * The wrapped produc.
 */
export const WrappedProduct: CompositeTypeSpec = compositeSpec("WrappedProduct", {
  /**
   * the product value
   */
  value: {
    valueSpec: stringSpec
  }
});

/**
 * The wrapped produc.
 */
export const ProductWrapper: CompositeTypeSpec = compositeSpec("ProductWrapper", {
  /**
   * the product value
   */
  value: {
    serializedName: "property.value",
    valueSpec: stringSpec
  }
});

/**
 * Additional parameters for putSimpleProductWithGrouping operation.
 */
export const FlattenParameterGroup: CompositeTypeSpec = compositeSpec("FlattenParameterGroup", {
  /**
   * Product name with value 'groupproduct'
   */
  name: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Unique identifier representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Description of product.
   */
  description: {
    valueSpec: stringSpec
  },
  /**
   * Display name of product.
   */
  maxProductDisplayName: {
    required: true,
    valueSpec: stringSpec
  },
  /**
   * Generic URL value.
   */
  genericValue: {
    valueSpec: stringSpec
  },
  /**
   * URL value.
   */
  odatavalue: {
    valueSpec: stringSpec
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePutArrayOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePutArrayOptionalParams", {
  /**
   * External Resource as an Array to put
   */
  resourceArray: {
    serializedName: "ResourceArray",
    valueSpec: sequenceSpec(Resource)
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePutWrappedArrayOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePutWrappedArrayOptionalParams", {
  /**
   * External Resource as an Array to put
   */
  resourceArray: {
    serializedName: "ResourceArray",
    valueSpec: sequenceSpec(WrappedProduct)
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams", {
  /**
   * External Resource as a Dictionary to put
   */
  resourceDictionary: {
    serializedName: "ResourceDictionary",
    valueSpec: dictionarySpec(FlattenedProduct)
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams", {
  /**
   * External Resource as a ResourceCollection to put
   */
  resourceComplexObject: {
    serializedName: "ResourceComplexObject",
    valueSpec: ResourceCollection
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePutSimpleProductOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePutSimpleProductOptionalParams", {
  /**
   * Simple body product to put
   */
  simpleBodyProduct: {
    serializedName: "SimpleBodyProduct",
    valueSpec: SimpleProduct
  }
});

/**
 * Optional Parameters.
 */
export const AutoRestResourceFlatteningTestServicePostFlattenedSimpleProductOptionalParams: CompositeTypeSpec = compositeSpec("AutoRestResourceFlatteningTestServicePostFlattenedSimpleProductOptionalParams", {
  /**
   * Description of product.
   */
  description: {
    serializedName: "base_product_description",
    valueSpec: stringSpec
  },
  /**
   * Generic URL value.
   */
  genericValue: {
    serializedName: "details.max_product_image.generic_value",
    valueSpec: stringSpec
  },
  /**
   * URL value.
   */
  odatavalue: {
    serializedName: "details.max_product_image.@odata\\.value",
    valueSpec: stringSpec
  }
});