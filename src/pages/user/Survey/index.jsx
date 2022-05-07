import React, { useRef, useState, useEffect } from "react";
import { Button } from "antd";

import * as S from "./styles";

const Survey = () => {
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const [isExpend, setIsExpend] = useState(false);

  const reviewRef = useRef();

  useEffect(() => {
    const reviewHeight = reviewRef.current.offsetHeight;
    if (reviewHeight > 44) {
      setIsShowReadMore(true);
    }
  }, [reviewRef]);

  const handleReadMore = () => {
    setIsExpend(!isExpend);
  };

  return (
    <div>
      <S.ReviewWrapper show={isExpend}>
        <p style={{ margin: 0 }} ref={reviewRef}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          perspiciatis iusto, distinctio quod, consequuntur dolorum minima enim
          dolorem accusantium eum dolores, autem incidunt aliquid. Qui culpa eos
          corrupti hic tempore?
        </p>
      </S.ReviewWrapper>
      {isShowReadMore && (
        <Button type="link" onClick={() => handleReadMore()}>
          {isExpend ? "Read less" : "Read more"}
        </Button>
      )}
    </div>
  );
};

export default Survey;
