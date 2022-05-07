import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  width: 250px;
  background-color: cadetblue;
  z-index: 99;
  transition: all 0.3s;
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  overflow: hidden;

  ${({ show }) =>
    show &&
    css`
      width: 100%;

      ${SidebarContainer} {
        left: 0;
      }
    `}
`;

export const SidebarOutside = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  height: 100vh;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  height: 40px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #48adb1;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #08979c;
      border-right: 5px solid #00474f;
    `}
`;
