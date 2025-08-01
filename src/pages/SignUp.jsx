import styled from "styled-components";
import BG from "../images/BG.png"

const Wrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
   align-items: center;
`;

const FormBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 20px;
  height: 600px;
  width: 500px;
  text-align: center;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  margin-left: 120px;
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
  border-radius: 20px;
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
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  return (
    <Wrapper>
      <FormBox>
        <Title>Sign Up</Title>

        <Label>Enter Your Name</Label>
        <Input type="text" placeholder="Your Name" />

        <Label>Enter Your Email</Label>
        <Input type="email" placeholder="Your Email" />

        <Label>Enter your Password</Label>
        <Input type="password" placeholder="Your Password" />

        <Label>Select Role</Label>
        <Input type="text" placeholder="e.g., User or Admin" />

        <Button>Sign Up</Button>

        <BottomText>
          Already have an account?
          <SignLink href="#"> Log In</SignLink>
        </BottomText>
      </FormBox>
    </Wrapper>
  );
};

export default SignUp;
