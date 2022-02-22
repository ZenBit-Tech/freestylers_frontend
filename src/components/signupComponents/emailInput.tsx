import React from "react";
import { useForm } from "react-hook-form";

//const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface Props{
    email: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   
}

const EmailInput: React.FC<Props> = (props) => {
    const { register, formState: { errors } } = useForm();
    return (
        <>
            <label htmlFor="email">Email</label>
            <input value={props.email} {...register("email", {required: "This is required"})} type="email" placeholder="Type your e-mail" onChange={props.onChange} />
            <p>{errors.email?.message}</p>
            {errors.email?.type === 'required' && "Email is required"}
        </>
    )

}

export default EmailInput;