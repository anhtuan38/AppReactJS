import { createAction } from "@reduxjs/toolkit";

export const getUserListAction = createAction("GET_USER_LIST");
// export const getUserInfoAction = createAction("GET_USER_INFO");
export const loginAction = createAction("LOGIN");
export const registerAction = createAction("REGISTER");
export const logoutAction = createAction("LOGOUT");
