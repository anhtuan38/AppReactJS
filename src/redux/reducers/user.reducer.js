import { createReducer } from "@reduxjs/toolkit";
import { userListData } from "../../db/user";

const initialState = {
  userList: userListData,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
};

const userReducer = createReducer(initialState, {
  // GET_USER_LIST: (state, action) => {
  //   return {
  //     ...state,
  //     userList: action.payload,
  //   };
  // },
  // GET_USER_INFO: (state, action) => {
  //   return {
  //     ...state,
  //     userInfo: action.payload,
  //   };
  // },
  LOGIN: (state, action) => {
    return {
      ...state,
      userInfo: action.payload,
    };
  },
  REGISTER: (state, action) => {
    return {
      ...state,
      userList: [...state.userList, action.payload],
    };
  },
  LOGOUT: (state, action) => {
    return {
      ...state,
      userInfo: {},
    };
  },
});

export default userReducer;
