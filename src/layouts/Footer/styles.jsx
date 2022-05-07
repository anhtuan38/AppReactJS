import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${({ theme }) => theme.footer};
  color: white;
`