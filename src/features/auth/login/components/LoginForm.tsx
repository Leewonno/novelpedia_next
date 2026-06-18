import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import kakaoLoginButton from "@/assets/images/login/kakao_login_large_wide.png";
import { AuthButton, AuthInput } from "../../shared";
import { LoginTitle } from "./common/LoginTitle";

export function LoginForm() {
  return (
    <div className="w-80 flex flex-col gap-6">
      <LoginTitle />
      <form className="flex flex-col gap-6">
        {/* 입력창 컨테이너 */}
        <div className="flex flex-col gap-2">
          <AuthInput type="text" placeholder="아이디" />
          <AuthInput type="password" placeholder="비밀번호" />
          <AuthButton
            icon={<Mail className="text-foreground-2" />}
            type="submit"
          >
            로그인
          </AuthButton>
        </div>
        {/* 버튼 컨테이너 */}
        <div className="flex flex-col gap-2">
          <AuthButton type="kakao">
            <Image src={kakaoLoginButton} alt="카카오 로그인 버튼" />
          </AuthButton>
          <AuthButton type="google">구글 로그인</AuthButton>
        </div>
      </form>
      <div className="flex justify-center gap-4 text-sm">
        <Link href="/signup" aria-label="회원가입">
          회원가입
        </Link>
        <Link href="/find-password" aria-label="비밀번호 찾기">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
