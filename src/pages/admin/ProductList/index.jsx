import React, { useState, useEffect } from "react";
import { Row, Table, Tag, Space, Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ModifyProductModal from "./components/ModifyProductModal";
import { ROUTERS } from "../../../constants/routers";

import { getProductListAction } from "../../../redux/actions";

import * as S from "./styles";

function ProductList() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList, productListLoading, productListMeta } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: 5,
      })
    );
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        page: page,
        limit: 5,
      })
    );
  };

  const handleEditProduct = (item) => {
    setSelectedProduct(item);
    setIsShowModal(true);
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
      render: (value) => `${value.toLocaleString()}₫`,
    },
    {
      title: "Mới",
      dataIndex: "isNew",
      key: "isNew",
      render: (value) => value && <Tag color="red">Mới</Tag>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => {
        return (
          <Space>
            <Button
              type="primary"
              ghost
              onClick={() => handleEditProduct(item)}
            >
              Sửa
            </Button>
            <Button danger>Xóa</Button>
          </Space>
        );
      },
    },
  ];

  const dataSource = productList.map((item) => ({
    key: item.id,
    ...item,
  }));

  return (
    <>
      <Row justify="space-between">
        <S.Title>Danh sách sản phẩm</S.Title>
        <Button
          type="primary"
          onClick={() => navigate(ROUTERS.ADMIN.CREATE_PRODUCT)}
        >
          Tạo sản phẩm mới
        </Button>
      </Row>
      <Table
        loading={productListLoading}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <Pagination
        current={productListMeta.page}
        pageSize={5}
        total={productListMeta.total}
        showSizeChanger={false}
        onChange={(page) => handleChangePage(page)}
        style={{ textAlign: "center", marginTop: 16 }}
      />
      <ModifyProductModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

export default ProductList;
