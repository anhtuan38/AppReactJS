import React, { useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";

import { ROUTERS } from "../../../../constants/routers";

import * as S from "../styles";

function Item({ item }) {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  return (
    <S.ItemWrapper>
      <S.ItemContainer
        selected={selected}
        onClick={() =>
          navigate(generatePath(ROUTERS.USER.PRODUCT_DETAIL, { id: item.id }))
        }
      >
        {item.isNew && <S.NewLabel>NEW</S.NewLabel>}
        <div>{item.category?.name}</div>
        <div>{item.name}</div>
        <div>{item.price.toLocaleString()}₫</div>
      </S.ItemContainer>
      <S.Button
        primary
        onClick={() => setSelected(!selected)}
        className="item-button"
      >
        Chọn
      </S.Button>
    </S.ItemWrapper>
  );
}

export default Item;
