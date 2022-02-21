import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  padding: 2px 24px;
  border-bottom: 1px solid rgba(76, 175, 80, 0.3);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  .navLink {
    position: relative;
    padding: 2px 0;
    margin: 0 8px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
  }
  .navLink.active {
    color: var(--brand-color);
  }
  .navLink:hover {
    color: var(--brand-color);
  }
  .navLink::after,
  .navLink.active::before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--brand-color);
  }
  .navLink::after {
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .navLink:hover::after,
  .navLink:focus::after {
    transform: scaleX(1);
  }
`;

export const Logo = styled.div`
  .logoLink {
    margin-right: 24px;
    font-weight: 700;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
    span {
      color: var(--brand-color);
    }
  }
`;
