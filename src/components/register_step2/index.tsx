import React, { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { RegisterStepTwoForm } from "./registerStepTwo.types";
import {
    Wrapper,
    Title,
    Text,
    Error,
    Form,
    Filds,
    Input,
    WrapperRole,
    WrapperButton,
    ButtonCreate,
    Fild,
    ButtonRole,
    DivStep
} from "./styles";

const RegisterStepTwoPage: React.FC = () => {
    const [country, setCountry] = useState('');
    const options = useMemo(() => countryList().getData(), [])
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        control } = useForm<RegisterStepTwoForm>({ mode: 'onBlur' });
    const onSubmit: SubmitHandler<RegisterStepTwoForm> = data => {
        console.log(data)
        reset();
    }
    const changeHandler = (value: string) => {
        setCountry(value)
    }
    return (
        <Wrapper>
            <Title>Complete your account setup</Title>
            <Text>email@gmail.com</Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Filds>
                    <Fild>
                        <label>First name<span>*</span></label>
                        <Input
                            id="firstName"
                            type="text"
                            {...register('firstName', {
                                required: true
                            })} />
                        {errors?.firstName && <Error>Please input your First name!</Error>}
                    </Fild>
                    <Fild>
                        <label>Last name<span>*</span></label>
                        <Input
                            type="text"
                            {...register('lastName', {
                                required: true
                            })} />
                        {errors?.firstName && <Error>Please input your Last name!</Error>}
                    </Fild>
                </Filds>
                <Select
                    options={options}
                />
                <WrapperRole>
                    <h4>I want to:</h4>
                    <WrapperButton>
                        <ButtonRole value="jobOwner">Hire for a project</ButtonRole>
                        <ButtonRole value="freelancer">Work as a freelancer</ButtonRole>
                    </WrapperButton>
                </WrapperRole>
                <DivStep>
                    <ButtonCreate type='submit'
                    // disabled={!isValid}
                    >Create my account
                    </ButtonCreate>
                    <div>
                        <span>Step 2 of 2</span>
                    </div>
                </DivStep>
            </Form>
        </Wrapper>
    )
}

export default RegisterStepTwoPage;