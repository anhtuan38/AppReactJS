import styled, { css } from "styled-components";

export const ReviewWrapper = styled.div`
  max-height: 44px;
  overflow: hidden;

  ${({ show }) =>
    show &&
    css`
      max-height: 100%;
      overflow: visible;
    `}
`;
