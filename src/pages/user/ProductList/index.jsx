import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";

import Item from "./components/Item";
import * as S from "./styles";

import { getProductListAction } from "../../../redux/actions";

function ProductList() {
  const dispatch = useDispatch();
  const { productList, productListLoading } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  const renderProductList = () => {
    return productList.map((item, index) => {
      return <Item key={index} item={item} />;
    });
  };

  return (
    <>
      <S.Title>Danh sách sản phẩm</S.Title>
      <Spin spinning={productListLoading}>
        <S.List>{renderProductList()}</S.List>
      </Spin>
    </>
  );
}

export default ProductList;
