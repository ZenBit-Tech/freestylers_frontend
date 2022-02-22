import styled from "styled-components";
import { colors } from "constants/index";
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
  font-weight: 500;
  font-size: 54px;
  color: #fff;
`;

export const Slogan = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
`;
