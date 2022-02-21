import styled from "styled-components";
import { Form, Button } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 340px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export const StyledForm = styled(Form)`
.ant-form-item {
  display: flex;
    flex-direction: column;
    align-items: start;
    .ant-form-item-required {
      color: rgba(255, 255, 255, 1);
    }
    .ant-input {
      width: 300px;
    }
    .ant-input-password {
      width: 300px;
    }
    
    `;

export const ButtonSignIn = styled(Button)`
  width: 300px;
  padding: 4px;
  border: none;
  font-weight: 500;
  background: var(--brand-color) !important;
  color: #fff;
  &[disabled] {
    background: #ccc !important;
  }
`;

export const ForgotPass = styled(Form.Item)`
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: flex-end;
  }
  .ant-btn-link {
    padding: 4px 0;
    font-weight: 500;
    color: var(--brand-color);
  }
`;

export const DontAccount = styled.span`
  .ant-btn {
    padding: 4px;
    font-weight: 500;
    color: var(--brand-color);
  }
`;
export const WithGoogle = styled.div`
  padding-top: 20px;
  align-items: end;
  p {
    margin-bottom: 6px;
  }

  .ant-btn-default {
    width: 300px;
    font-weight: 500;
  }
`;
export const GoogleLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 32px;
  padding: 4px 15px;
  border: 1px solid #d9d9d9;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  ::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-image: url(./icons/google.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
