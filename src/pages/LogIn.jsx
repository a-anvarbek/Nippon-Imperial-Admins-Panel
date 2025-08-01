import styled from "styled-components";

import BG from "../images/BG.png"

const LogIn = () => {
  return (
    <Background>
      <LoginBox>
        <Title>Log In</Title>
        <Label>Enter Your Name</Label>
        <Input type="text" placeholder="Your Name" />
        <Label>Enter your Password</Label>
        <Input type="password" placeholder="Your Password" />
        <Button>Sign Up</Button>
        <BottomText>
          Don’t have an account?
          <SignLink href="#"> Sign Up</SignLink>
        </BottomText>
      </LoginBox>
    </Background>
  );
};

export default LogIn;

const Background = styled.div`
  background-image: url(${BG}); /* public/images ichida rasm */
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const LoginBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 30px;
  width: 500px;
  height: 453px;
  margin-left: 120px;
  text-align: center;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
  font-size: 43px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin: 10px 0 5px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 15px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #3579f6;
  color: white;
  border: none;
    margin-top: 28px;
  border-radius: 25px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background: #1e5be0;
  }
`;

const BottomText = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #ccc;
`;

const SignLink = styled.a`
  color: #3579f6;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
