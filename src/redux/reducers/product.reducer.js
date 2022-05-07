import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from "../constants";

const initialState = {
  productList: [],
  productDetail: {},
  productListLoading: false,
  productDetailLoading: false,
  productListMeta: {},
  createProductLoading: false,
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productListLoading: true,
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    console.log(meta);
    return {
      ...state,
      productList: data,
      productListLoading: false,
      productListMeta: meta,
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productListLoading: false,
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetailLoading: true,
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: action.payload,
      productDetailLoading: false,
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetailLoading: false,
    };
  },

  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductLoading: true,
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductLoading: false,
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductLoading: false,
    };
  },

  LOGOUT: (state, action) => {
    return {
      ...state,
      productList: [],
    };
  },
});

export default productReducer;
