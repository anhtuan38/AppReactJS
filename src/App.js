import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

import CreateProductForm from "./pages/admin/CreateProductForm";
import AdminProductList from "./pages/admin/ProductList";
import ToDoList from "./pages/admin/ToDoList";

import LoginAndRegisterForm from "./pages/LoginAndRegister";
import ProductList from "./pages/user/ProductList";
import ProductDetail from "./pages/user/ProductDetail";
import Survey from "./pages/user/Survey";

import PublishLayout from "./layouts/PublishLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import LoginLayout from "./layouts/LoginLayout";

import { ROUTERS } from "./constants/routers";

import { lightTheme, darkTheme } from "./constants/themes";

// import { getProductListAction, getUserListAction } from "./redux/actions";

export const ThemeContext = createContext();
export const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //    (getUserListAction());
  //   dispatch(getProductListAction());
  // }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <Routes>
          <Route element={<PublishLayout />}>
            <Route path={ROUTERS.USER.HOME} element={<div>Home</div>} />
            <Route path={ROUTERS.USER.PRODUCTS} element={<ProductList />} />
            <Route
              path={ROUTERS.USER.PRODUCT_DETAIL}
              element={<ProductDetail />}
            />
            <Route path={ROUTERS.USER.SURVEY} element={<Survey />} />
          </Route>

          <Route element={<LoginLayout />}>
            <Route path={ROUTERS.LOGIN} element={<LoginAndRegisterForm />} />
          </Route>

          <Route element={<PrivateLayout />}>
            <Route
              path={ROUTERS.ADMIN.PRODUCTS}
              element={<AdminProductList />}
            />
            <Route
              path={ROUTERS.ADMIN.CREATE_PRODUCT}
              element={<CreateProductForm />}
            />
            <Route path={ROUTERS.ADMIN.TODO_LIST} element={<ToDoList />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
