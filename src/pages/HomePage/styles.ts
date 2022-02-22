import styled from "styled-components";
import { fonts, colors } from "constants/index";
export const HomeContainer = styled.section`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 100px 24px;
  }
  flex-direction: column;
  height: 100vh;
  padding: 100px 12px;
  background-color: ${colors.homeBgr};
  background-image: url(./images/bg-image.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleContainer = styled.div`
  max-width: 1000px;
  min-width: 340px;
  @media screen and (min-width: 768px) {
    margin-top: 4vh;
  }
`;

export const HomeTitle = styled.h1`
  text-align: center;
  margin-bottom: 0;
  font-weight: ${fonts.titleFontWeight};
  font-size: ${fonts.titleFontSize};
  color: ${colors.titleColor};
`;

export const Slogan = styled.p`
  text-align: center;
  font-size: ${fonts.sloganFontSize};
  color: ${colors.sloganColor};
`;
