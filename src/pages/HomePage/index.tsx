import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import SignUpForm from "../../components/SignUpForm/index";
import { HomeContainer, HomeTitle, TitleContainer, Slogan } from "./styles";

const HomePage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <HomeContainer>
      <AppBar />
      <TitleContainer>
        <HomeTitle>THE BEST WAY TO FIND YOUR JOB!</HomeTitle>
        <Slogan>ТУТ МОЖЕТ БЫТЬ СЛОГАН</Slogan>
      </TitleContainer>
      {!isSignIn && <SignUpForm />}
    </HomeContainer>
  );
};

export default HomePage;
