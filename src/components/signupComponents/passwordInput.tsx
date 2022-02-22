import React from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

interface Props{
    password: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder: string;
    label: string;
    
} 

//const Regex = RegExp(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$ ;

const PasswordInput: React.FC<Props> = (props) => {
    const { register, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <>
            <label htmlFor="firstPassword">{props.label}</label>
            <input type={passwordShown ? "text" : "password"} {...register("password", {required: true, minLength: {
                    value: 8,
                    message: "Min Length is 8"
                } })} value={props.password} placeholder={props.placeholder} onChange={props.onChange} 
            />
            <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            
            <p>{errors.password?.message}</p>
            
            
        </>
    )

}

export default PasswordInput;