import { KeyRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import googleFavicon from "@/assets/images/login/google_favicon.svg";
import kakaoLoginIcon from "@/assets/images/login/kakao_login_logo.png";
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
            icon={<KeyRound className="text-foreground-2" />}
            type="submit"
            action={true}
          >
            로그인
          </AuthButton>
        </div>
        {/* 버튼 컨테이너 */}
        <div className="flex flex-col gap-2">
          <AuthButton
            type="kakao"
            className="border-none! text-base! bg-[#FEE500]"
            icon={<Image src={kakaoLoginIcon} alt="카카오 로그인 버튼" />}
          >
            카카오 로그인
          </AuthButton>
          <AuthButton
            action={true}
            type="google"
            className="border-[#767676]!"
            icon={
              <Image src={googleFavicon} alt="구글 로고" className="w-5 h-5" />
            }
          >
            Sign in with Google
          </AuthButton>
        </div>
      </form>
      <div className="flex justify-center gap-4 text-sm">
        <Link href="/signup" aria-label="회원가입" className="hover:underline">
          회원가입
        </Link>
        <Link
          href="/find-password"
          aria-label="비밀번호 찾기"
          className="hover:underline"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
