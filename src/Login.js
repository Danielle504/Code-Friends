import React, { Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
  return (
    <Background>
      <CodeFriends>CODE &amp;&amp; FRIENDS</CodeFriends>
      <Rectangle>
        <WelcomeBack>Welcome back!</WelcomeBack>
        <UsernameField>
          <Username2Stack>
            <Username2>Username</Username2>
            <ForgotUsername>forgot username?</ForgotUsername>
          </Username2Stack>
          <Rectangle2></Rectangle2>
        </UsernameField>
        <PasswordField>
          <Password2Row>
            <Password2>Password</Password2>
            <ForgotPassword>forgot password?</ForgotPassword>
          </Password2Row>
          <Rectangle3></Rectangle3>
        </PasswordField>
        <LoginButton>
          <Rectangle1>
            <Text>Login</Text>
          </Rectangle1>
        </LoginButton>
        <DontHaveAnAccoun>Don’t have an account?</DontHaveAnAccoun>
        <RegisterNow>Register now</RegisterNow>
      </Rectangle>
    </Background>
  );
}

const Background = styled.div`
  background-color: rgba(30,41,51,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const CodeFriends = styled.span`
  font-family: Arial;
  width: 888px;
  height: 20px;
  background-color: transparent;
  color: rgba(255,255,255,1);
  opacity: 1;
  font-size: 36px;
  line-height: 20px;
  letter-spacing: 4.5px;
  text-align: center;
  margin-top: 105px;
  margin-left: 196px;
`;

const Rectangle = styled.div`
  width: 495px;
  height: 542px;
  background-color: rgba(253,253,253,1);
  flex-direction: column;
  display: flex;
  margin-top: 114px;
  margin-left: 393px;
  box-shadow: 0px 0px 24px  1px rgba(216,216,216,0.5) ;
`;

const WelcomeBack = styled.span`
  font-family: Arial;
  width: 265px;
  height: 62px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 24px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 42px;
  margin-left: 115px;
`;

const UsernameField = styled.div`
  width: 429px;
  height: 97px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 11px;
  margin-left: 33px;
`;

const Username2 = styled.span`
  font-family: Arial;
  top: 0px;
  left: 0px;
  width: 215px;
  height: 19px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  position: absolute;
  opacity: 1;
  font-size: 16px;
  letter-spacing: 2px;
`;

const ForgotUsername = styled.span`
  font-family: Arial;
  top: 0px;
  left: 214px;
  width: 215px;
  height: 19px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  position: absolute;
  opacity: 1;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: right;
  text-decoration: underline;
`;

const Username2Stack = styled.div`
  width: 429px;
  height: 19px;
  position: relative;
`;

const Rectangle2 = styled.div`
  width: 429px;
  height: 64px;
  background-color: rgba(255,255,255,1);
  opacity: 1;
  border-radius: 5px;
  margin-top: 14px;
  box-shadow: 0px 0px 13px  1px rgba(0,0,0,0.5) ;
`;

const PasswordField = styled.div`
  width: 430px;
  height: 97px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 32px;
  margin-left: 33px;
`;

const Password2 = styled.span`
  font-family: Arial;
  width: 215px;
  height: 19px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 16px;
  letter-spacing: 2px;
`;

const ForgotPassword = styled.span`
  font-family: Arial;
  width: 215px;
  height: 19px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: right;
  text-decoration: underline;
`;

const Password2Row = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
`;

const Rectangle3 = styled.div`
  width: 429px;
  height: 64px;
  background-color: rgba(255,255,255,1);
  opacity: 1;
  border-radius: 5px;
  margin-top: 14px;
  box-shadow: 0px 0px 13px  1px rgba(0,0,0,0.5) ;
`;

const LoginButton = styled.div`
  width: 429px;
  height: 52px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 32px;
  margin-left: 33px;
  box-shadow: 0px 0px 4px  1px rgba(0,0,0,0.5) ;
`;

const Rectangle1 = styled.div`
  width: 429px;
  height: 52px;
  background-color: rgba(243,138,37,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
`;

const Text = styled.span`
  font-family: System;
  width: 302px;
  height: 27px;
  background-color: transparent;
  color: rgba(255,255,255,1);
  opacity: 1;
  font-size: 18px;
  letter-spacing: -0.29px;
  text-align: center;
  margin-top: 16px;
  margin-left: 63px;
`;

const DontHaveAnAccoun = styled.span`
  font-family: Arial;
  width: 215px;
  height: 14px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-top: 12px;
  margin-left: 141px;
`;

const RegisterNow = styled.span`
  font-family: Arial;
  width: 215px;
  height: 14px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  text-decoration: underline;
  margin-top: 6px;
  margin-left: 141px;
`;

export default Index;
