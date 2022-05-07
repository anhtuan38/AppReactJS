import styled from "styled-components";

export const Title = styled.h2`
  color: #08979c;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
  width: 100%;
  height: 150px;
  background-color: ${(props) =>
    props.selected ? "palevioletred" : "#b5f5ec"};
  color: ${(props) => (props.selected ? "white" : "black")};
  transition: all 0.3s;
`;

export const NewLabel = styled.div`
  position: absolute;
  top: 8px;
  left: -8px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  background-color: red;
  color: white;
`;

export const Button = styled.button`
  background: ${({ primary, theme }) => (primary ? theme.primary : "white")};
  color: ${({ primary, theme }) => (primary ? "white" : theme.primary)};

  margin-top: 4px;
  padding: 4px 8px;
  width: 100%;
  border: 2px solid palevioletred;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e694af;
  }
`;

export const ItemWrapper = styled.div`
  width: 20%;
  padding: 8px;

  ${Button} {
    margin-top: 12px;
  }
`;
