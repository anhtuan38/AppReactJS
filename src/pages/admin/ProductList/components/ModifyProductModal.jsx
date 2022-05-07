import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Checkbox } from "antd";

import * as S from "../styles";

function ModifyProductModal({ isShowModal, setIsShowModal, selectedProduct }) {
  const [modifyProductForm] = Form.useForm();

  useEffect(() => {
    modifyProductForm.resetFields();
  }, [selectedProduct]);

  return (
    <Modal
      title="Basic Modal"
      visible={isShowModal}
      onOk={() => modifyProductForm.submit()}
      onCancel={() => setIsShowModal(false)}
    >
      <Form
        form={modifyProductForm}
        name="modifyProductForm"
        layout="vertical"
        initialValues={{
          name: selectedProduct.name,
          price: selectedProduct.price,
          isNew: selectedProduct.isNew,
        }}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          validateFirst
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tên sản phẩm!",
            },
            {
              min: 4,
              message: "Tên sản phẩm phải có ít nhất 4 ký tự!",
            },
            {
              max: 50,
              message: "Tên sản phẩm không được vượt quá 50 ký tự!",
            },
          ]}
        >
          <Input placeholder="Tên sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập giá sản phẩm!",
            },
            {
              type: "number",
              min: 10000,
              message: "Giá sản phẩm phải lớn hơn 10.000₫!",
            },
          ]}
        >
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item name="isNew" valuePropName="checked">
          <Checkbox>Is New</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModifyProductModal;
