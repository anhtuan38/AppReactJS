import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../constants";

const initialState = {
  categoryList: [],
  categoryListLoading: false,
};

const categoryReducer = createReducer(initialState, {
  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    return {
      ...state,
      categoryListLoading: true,
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryList: data,
      categoryListLoading: false,
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    return {
      ...state,
      categoryListLoading: false,
    };
  },
});

export default categoryReducer;
