/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ProductProperties = {
  serializedName: "Product_properties",
  type: {
    name: "Composite",
    className: "ProductProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ProductProperties"
        }
      }
    }
  }
};

export const OperationResult = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesOptions = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesOptions = {
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetOptions = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      offset: {
        required: true,
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CustomParameterGroup = {
  type: {
    name: "Composite",
    className: "CustomParameterGroup",
    modelProperties: {
      apiVersion: {
        required: true,
        type: {
          name: "String"
        }
      },
      tenant: {
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLROOptions = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLROOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetNextOptions = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetNextOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesOptionalParams = {
  serializedName: "GetMultiplePagesOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesOptionalParams = {
  serializedName: "GetOdataMultiplePagesOptions",
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetOdataMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetOdataMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetOptionalParams = {
  serializedName: "GetMultiplePagesWithOffsetOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLROOptionalParams = {
  serializedName: "GetMultiplePagesLROOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLROOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingBeginGetMultiplePagesLROOptionalParams = {
  serializedName: "BeginGetMultiplePagesLROOptions",
  type: {
    name: "Composite",
    className: "PagingBeginGetMultiplePagesLROOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesNextOptionalParams = {
  serializedName: "GetMultiplePagesNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesNextOptionalParams = {
  serializedName: "GetOdataMultiplePagesNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetOdataMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetOdataMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetNextOptionalParams = {
  serializedName: "GetMultiplePagesWithOffsetNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesWithOffsetNextOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesWithOffsetNextOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLRONextOptionalParams = {
  serializedName: "GetMultiplePagesLRONextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLRONextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingBeginGetMultiplePagesLRONextOptionalParams = {
  serializedName: "BeginGetMultiplePagesLRONextOptions",
  type: {
    name: "Composite",
    className: "PagingBeginGetMultiplePagesLRONextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const ProductResult = {
  serializedName: "ProductResult",
  type: {
    name: "Composite",
    className: "ProductResult",
    modelProperties: {
      values: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OdataProductResult = {
  serializedName: "OdataProductResult",
  type: {
    name: "Composite",
    className: "OdataProductResult",
    modelProperties: {
      values: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      },
      odatanextLink: {
        serializedName: "odata\\.nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
