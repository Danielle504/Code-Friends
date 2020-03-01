import React, { Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
  return (
    <Container>
      <ProblemColumnRow>
        <ProblemColumn>
          <Problem>Problem:</Problem>
          <YouAreGivenTwoNo>
            You are given two non-empty linked lists representing two
            non-negative integers. The digits are stored in reverse order and
            each of their nodes contain a single digit. Add the two numbers and
            return it as a linked list.{"\n"}
            {"\n"}You may assume the two numbers do not contain any leading
            zero, except the number 0 itself.
          </YouAreGivenTwoNo>
          <Example>Example:</Example>
          <Rectangle1>
            <Input243>
              Input: (2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4){"\n"}Output: 7
              -&gt; 0 -&gt; 8{"\n"}Explanation: 342 + 465 = 807
            </Input243>
          </Rectangle1>
          <Progress>Progress:</Progress>
          <YouNLinesOfCode>You: n lines of code written</YouNLinesOfCode>
          <Programmer1NLine>
            Programmer 1: n lines of code written
          </Programmer1NLine>
          <Programmer2NLine>
            Programmer 2: n lines of code written
          </Programmer2NLine>
          <Programmer3NLine>
            Programmer 3: n lines of code written
          </Programmer3NLine>
        </ProblemColumn>
        <CodeEditor></CodeEditor>
      </ProblemColumnRow>
      <HaveToLeaveColumnRow>
        <HaveToLeaveColumn>
          <HaveToLeave>Need to leave?</HaveToLeave>
          <SubmitAnswerButton1>
            <Rectangle3>
              <CancelXRow>
                <CancelX>
                  <RightArrow1Stack>
                    <svg
                      viewBox="-1.5 -1.5 13.051116494478265 20.10223298895653"
                      style={{
                        top: 0,
                        left: 0,
                        width: 14,
                        height: 20,
                        backgroundColor: "transparent",
                        position: "absolute",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={3}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.50 1.50 L8.55 8.55 L1.50 15.60 "
                      ></path>
                    </svg>
                    <svg
                      viewBox="-1.5 -1.5 13.051116494478265 20.10223298895653"
                      style={{
                        top: 0,
                        left: 8,
                        width: 14,
                        height: 20,
                        backgroundColor: "transparent",
                        position: "absolute",
                        transform: "rotate(undefined)",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={3}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.50 1.50 L8.55 8.55 L1.50 15.60 "
                      ></path>
                    </svg>
                  </RightArrow1Stack>
                </CancelX>
                <QuitChallenge>Quit challenge</QuitChallenge>
              </CancelXRow>
            </Rectangle3>
          </SubmitAnswerButton1>
        </HaveToLeaveColumn>
        <StyleStack>
          <Style>10:00</Style>
          <TimeRemainingToSu>Time remaining to submit:</TimeRemainingToSu>
        </StyleStack>
        <FinishedAlreadyColumn>
          <FinishedAlready>Finished already?</FinishedAlready>
          <SubmitAnswerButton>
            <Rectangle2>
              <SubmitAnswer2Stack>
                <SubmitAnswer2>Submit answer</SubmitAnswer2>
                <svg
                  viewBox="-1.5 -1.5 13.051116494478265 20.10223298895653"
                  style={{
                    top: 0,
                    left: 135,
                    width: 13,
                    height: 20,
                    backgroundColor: "transparent",
                    position: "absolute",
                    borderColor: "transparent"
                  }}
                >
                  <path
                    strokeWidth={3}
                    fill="transparent"
                    stroke="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M1.50 1.50 L8.55 8.55 L1.50 15.60 "
                  ></path>
                </svg>
              </SubmitAnswer2Stack>
            </Rectangle2>
          </SubmitAnswerButton>
        </FinishedAlreadyColumn>
      </HaveToLeaveColumnRow>
      <WriteYourAnswerIn>Write your answer in Java!</WriteYourAnswerIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 982px;
  height: 995px;
  flex-direction: column;
`;

const Problem = styled.span`
  font-family: Arial;
  width: 335px;
  height: 22px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 18px;
  letter-spacing: -0.29px;
`;

const YouAreGivenTwoNo = styled.span`
  font-family: Arial;
  width: 345px;
  height: 202px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.26px;
  margin-top: 7px;
`;

const Example = styled.span`
  font-family: Arial;
  width: 335px;
  height: 22px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 16px;
  letter-spacing: -0.26px;
  margin-top: 6px;
`;

const Rectangle1 = styled.div`
  width: 335px;
  height: 95px;
  background-color: rgba(255,239,229,1);
  flex-direction: column;
  display: flex;
  margin-top: 8px;
`;

const Input243 = styled.span`
  font-family: Courier;
  width: 307px;
  height: 77px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.22px;
  margin-top: 9px;
  margin-left: 14px;
`;

const Progress = styled.span`
  font-family: Arial;
  width: 335px;
  height: 22px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 18px;
  letter-spacing: -0.29px;
  margin-top: 64px;
`;

const YouNLinesOfCode = styled.span`
  font-family: Arial;
  width: 335px;
  height: 28px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
  margin-top: 8px;
`;

const Programmer1NLine = styled.span`
  font-family: System;
  width: 335px;
  height: 28px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  font-weight: regular;
  letter-spacing: -0.22px;
`;

const Programmer2NLine = styled.span`
  font-family: Arial;
  width: 335px;
  height: 28px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
`;

const Programmer3NLine = styled.span`
  font-family: Arial;
  width: 335px;
  height: 28px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
`;

const ProblemColumn = styled.div`
  width: 345px;
  flex-direction: column;
  display: flex;
  margin-top: 9px;
  margin-bottom: 274px;
`;

const CodeEditor = styled.div`
  width: 617px;
  height: 851px;
  background-color: rgba(216,216,216,1);
  opacity: 1;
  border-color: rgba(151,151,151,1);
  border-width: 1px;
  margin-left: 20px;
  border-style: solid;
`;

const ProblemColumnRow = styled.div`
  height: 851px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
`;

const HaveToLeave = styled.span`
  font-family: Arial;
  width: 181px;
  height: 17px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
`;

const SubmitAnswerButton1 = styled.div`
  width: 192px;
  height: 52px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 8px;
`;

const Rectangle3 = styled.div`
  width: 192px;
  height: 52px;
  background-color: rgba(30,41,51,1);
  border-radius: 6px;
  flex-direction: row;
  display: flex;
`;

const CancelX = styled.div`
  width: 16px;
  height: 15px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
`;

const RightArrow1Stack = styled.div`
  width: 22px;
  height: 20px;
  margin-top: -1px;
  margin-left: -2px;
  position: relative;
`;

const QuitChallenge = styled.span`
  font-family: System;
  width: 131px;
  height: 27px;
  background-color: transparent;
  color: rgba(255,255,255,1);
  opacity: 1;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.29px;
  margin-left: 15px;
`;

const CancelXRow = styled.div`
  height: 27px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 9px;
  margin-left: 21px;
  margin-top: 17px;
`;

const HaveToLeaveColumn = styled.div`
  width: 192px;
  flex-direction: column;
  display: flex;
  margin-bottom: 16px;
`;

const Style = styled.span`
  font-family: Arial;
  top: 12px;
  left: 0px;
  width: 200px;
  height: 78px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  position: absolute;
  opacity: 1;
  font-size: 64px;
  letter-spacing: -1.02px;
`;

const TimeRemainingToSu = styled.span`
  font-family: Arial;
  top: 0px;
  left: 0px;
  width: 165px;
  height: 17px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  position: absolute;
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
`;

const StyleStack = styled.div`
  width: 200px;
  height: 90px;
  margin-left: 173px;
  margin-top: 3px;
  position: relative;
`;

const FinishedAlready = styled.span`
  font-family: Arial;
  width: 114px;
  height: 17px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px;
  letter-spacing: -0.22px;
`;

const SubmitAnswerButton = styled.div`
  width: 176px;
  height: 52px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 6px;
`;

const Rectangle2 = styled.div`
  width: 176px;
  height: 52px;
  background-color: rgba(243,138,37,1);
  border-radius: 6px;
  flex-direction: column;
  display: flex;
`;

const SubmitAnswer2 = styled.span`
  font-family: System;
  top: 1px;
  left: 0px;
  width: 145px;
  height: 27px;
  background-color: transparent;
  color: rgba(255,255,255,1);
  position: absolute;
  opacity: 1;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.29px;
`;

const SubmitAnswer2Stack = styled.div`
  width: 148px;
  height: 28px;
  margin-top: 16px;
  margin-left: 15px;
  position: relative;
`;

const FinishedAlreadyColumn = styled.div`
  width: 176px;
  flex-direction: column;
  display: flex;
  margin-left: 241px;
  margin-top: 2px;
  margin-bottom: 16px;
`;

const HaveToLeaveColumnRow = styled.div`
  height: 93px;
  flex-direction: row;
  display: flex;
  margin-top: 9px;
`;

const WriteYourAnswerIn = styled.span`
  font-family: Arial;
  width: 225px;
  height: 42px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 18px;
  letter-spacing: -0.29px;
  margin-top: -995px;
  margin-left: 365px;
`;

export default Index;
