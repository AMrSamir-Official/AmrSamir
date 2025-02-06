"use client";

import styled from "styled-components";
const SignInContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

interface SignInLayoutProps {
  children: React.ReactNode;
}

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return <SignInContainer>{children}</SignInContainer>;
};

export default SignInLayout;
