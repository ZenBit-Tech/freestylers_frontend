import styled, { css } from "styled-components";

const baseTextStyle = css`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

export const Text = styled.p`
  ${baseTextStyle};
`;

export const Title = styled.h1`
  ${baseTextStyle};
`;

export const Form = styled.div``;

export const Error = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  color: red;
`;

export const Filds = styled.div`
  display: flex;
`;

export const Fild = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const Input = styled.input`
  width: 150px;
  padding: 10px 18px 10px 10px;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const WrapperRole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${baseTextStyle};
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ButtonCreate = styled.button`
  width: 300px;
  padding: 4px;
  border: none;
  background: #4caf50;
  border-radius: 15px;
  color: #fff;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 10px;
`;

export const ButtonRole = styled.button`
  width: 150px;
  padding: 7px;
`;

export const DivStep = styled.div`
  display: flex;
  flex-direction: column;
`;
