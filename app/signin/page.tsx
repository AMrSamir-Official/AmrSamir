"use client"; // تأكد من إضافة هذه السطر

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import "../../app/globals.css";

// دالة وهمية لمحاكاة تسجيل الدخول
const fakeLoginAPI = async (
  email: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email === "user@example.com" && password === "password123");
    }, 1000);
  });
};

// **تنسيق الصفحة باستخدام Styled Components**
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1c1c1c;
  flex-direction: row;
  color: #fff;
  padding: 10px;
  padding-top: 20px;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background: url("/Images/sign-page.png") center/cover no-repeat;
  height: 100vh;
  display: block;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  padding: 20px;
  padding-top: 10px;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const Instructions = styled.p`
  font-size: 14px;
  color: #ccc;
  margin-bottom: 24px;
  text-align: center;
`;

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const InputTitle = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  color: #bbb;
`;

const Input = styled.input<{ error?: string }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ error }) => (error === "true" ? "#ff4d4f" : "#444")};
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  max-width: 97%;
  background-color: #333;
  text-align: right;

  &:focus {
    outline: none;
    border-color: #40a9ff;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1890ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const ForgotContainer = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #ccc;
  text-align: center;

  a {
    color: #1890ff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ResetPasswordModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ResetForm = styled.div`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 28px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ArrowContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #1890ff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const ArrowIcon = styled.div`
  width: 10px;
  height: 10px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
`;

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<string | undefined>(
    undefined
  );
  const [isPasswordValid, setIsPasswordValid] = useState<string | undefined>(
    undefined
  );
  const [password, setPassword] = useState<string>("");
  const [isAuthorizing, setIsAuthorizing] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [showResetPassword, setShowResetPassword] = useState<boolean>(false);

  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handlePasswordBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsPasswordValid(validatePassword(e.target.value) ? "false" : "true");
  };

  const handleEmailBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsEmailValid(validateEmail(e.target.value) ? "false" : "true");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setIsEmailValid(undefined);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setIsPasswordValid(undefined);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsAuthorizing(true);
    setLoginError(false);

    const isLoggedIn = await fakeLoginAPI(email, password);
    setIsAuthorizing(false);

    if (isLoggedIn) {
      router.push("/");
    } else {
      setLoginError(true);
    }
  };

  const handleResetPassword = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`إعادة تعيين كلمة المرور إلى: ${email}`);
    setShowResetPassword(false);
  };

  return (
    <Container>
      <ArrowContainer onClick={() => router.push("/")}>
        <ArrowIcon />
      </ArrowContainer>
      <ImageContainer />
      <ContentContainer>
        <Form onSubmit={handleSubmit}>
          <Title>مرحبًا بك في منصتنا</Title>
          <Instructions>يرجى تسجيل الدخول للوصول إلى حسابك</Instructions>

          <InputContainer>
            <InputTitle>البريد الإلكتروني</InputTitle>
            <Input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={isEmailValid === "true" ? "true" : undefined}
            />
            {isEmailValid === "true" && (
              <ErrorMessage>يرجى إدخال بريد إلكتروني صالح</ErrorMessage>
            )}
          </InputContainer>

          <InputContainer>
            <InputTitle>كلمة المرور</InputTitle>
            <Input
              type="password"
              placeholder="******"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              error={isPasswordValid === "true" ? "true" : undefined}
            />
            {isPasswordValid === "true" && (
              <ErrorMessage>
                يجب أن تتكون كلمة المرور من 6 أحرف على الأقل
              </ErrorMessage>
            )}
          </InputContainer>

          <Button
            type="submit"
            disabled={
              isPasswordValid === "true" ||
              isEmailValid === "true" ||
              isAuthorizing
            }
          >
            {isAuthorizing ? "جارٍ التحقق..." : "تسجيل الدخول"}
          </Button>

          <ForgotContainer>
            هل نسيت كلمة المرور؟{" "}
            <a onClick={() => setShowResetPassword(true)}>اضغط هنا</a>
          </ForgotContainer>
        </Form>
      </ContentContainer>

      {showResetPassword && (
        <ResetPasswordModal>
          <ResetForm>
            <h3>إعادة تعيين كلمة المرور</h3>
            <form onSubmit={handleResetPassword}>
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={handleEmailChange}
                error={isEmailValid === "true" ? "true" : undefined}
              />
              <Button type="submit">إرسال رابط إعادة تعيين</Button>
            </form>
            <Button type="button" onClick={() => setShowResetPassword(false)}>
              إغلاق
            </Button>
          </ResetForm>
        </ResetPasswordModal>
      )}
    </Container>
  );
};

export default SignInPage;
