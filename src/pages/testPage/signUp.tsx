import React from "react";
import { useForm } from "react-hook-form";
import EmailInput from "../../components/signupComponents/emailInput";
import PasswordInput from "../../components/signupComponents/passwordInput";
import { Wrapper } from "./styles";

const SignUp: React.FC = () => {
    const { handleSubmit, formState: { errors }  } = useForm();

    const [email, setEmail]  = React.useState("");
    const [password, setPassword]  = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const setEmailState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const setPasswordState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const setConfirmPasswordState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };
    

    const submitHandler = handleSubmit((data) => {
        console.log(data);
    });

     const isEmailExist = () =>  {
        return true;
    }

    const isPasswordMatch = () => {
        return password === confirmPassword;
    };

    return (
        <Wrapper>
            <form onSubmit={submitHandler}>
                <EmailInput email={email} onChange={setEmailState} />
                <p> An account with this email address already exists. Sign in</p>
                <PasswordInput password={password} onChange={setPasswordState} placeholder="Create your password" label="Password" />
                <PasswordInput password={confirmPassword} onChange={setConfirmPasswordState} placeholder="Re-enter your password" label="Confirm password" />
                {password !== "" && confirmPassword !== "" && !isPasswordMatch() && <p>Check passwords match</p>}
                {email == "" && password == "" && confirmPassword == "" &&<p>Please fill in the empty fields.</p>} 
                {/* {errors.password?.type === 'required' && <p>"Password is required"</p>} */}

                <input type="submit" value="Continue" />

                <p>Steps 1 of 2</p>

                <div>
                    <p>Sign in with</p>
                    <a>Google</a>
                </div>
                
                
            </form>
        </Wrapper>
    )
}

export default SignUp;