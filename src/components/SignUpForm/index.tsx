import React, { useState, useMemo } from 'react';
import { Form, Input } from 'antd';
import {FormValues} from './props';
import {
  Wrapper,
  DontAccount,
  WithGoogle,
  GoogleLink,
  StyledForm,
  ForgotPass,
  ButtonSignIn,
  StyledNavLink
} from './styles';

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const memoDisabled = useMemo<boolean>(() => !email || !password, [email, password]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
    onReset();
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Wrapper>
        <StyledForm
          form={form}
          onFinish={values => onFinish(values as FormValues)}
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Check if the email you entered is correct our input your email!',
              },
            ]}
          >
            <Input
              name="email"
              placeholder="input your email"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              name="password"
              minLength={8}
              maxLength={20}
              placeholder="input your password"
              autoComplete=""
              onChange={onChange}
            />
          </Form.Item>
          
          <ForgotPass>
            <StyledNavLink to="/test">
              Forgot your password?
            </StyledNavLink>
          </ForgotPass>
          <Form.Item>
            <ButtonSignIn
              type="primary"
              htmlType="submit"
              disabled={memoDisabled}
            >
              Sign in
            </ButtonSignIn>
          </Form.Item>
        </StyledForm>
        <DontAccount>
          Don't have an account yet?
          <StyledNavLink to="/test" className="styled">
              Register now
            </StyledNavLink>
        </DontAccount>
        <WithGoogle>
          <p>Sign in with</p>
          <GoogleLink href="https:/................./auth/google">
            Google
          </GoogleLink>
        </WithGoogle>
      </Wrapper>
    </div>
  );
}; 

export default SignUpForm;
