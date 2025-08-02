import React from "react";
import styled from "styled-components";


const Container = styled.div`
background-color: black;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
gap: 100px;
`;

const Title = styled.h1`
color: #B3935C;
font-size: 60px;
`;

const Title2 = styled.h1`
color: white;
font-size: 30px;
`;


const RefreshBtn = styled.button`
width: 200px;
height: 70px;
border: 1px solid #B3935C;
background-color: black;
border-radius: 15px;
color: #B3935C;
font-size: 25px;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
    background-color: #B3935C;
    color: white;
   
    }

`;


export default function LoginAfter() {
    return (
        <>
        <Container>
            <Title>
            You are now on your way to <br />
            becoming an admin!
            </Title>
            <Title2>
            Please check your email because we have sent a request to <br />
             verify your identity to your email.
            </Title2>
            <RefreshBtn>
                Refresh
            </RefreshBtn>

        </Container>
        
        </>
    )
}