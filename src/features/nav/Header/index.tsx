import Link from "next/link";
import { Logo } from "@/shared/components/Logo";

export function Header() {
  const isLogin = true;
  return (
    <header className="w-full h-16 flex justify-center items-center px-4">
      <div className="w-300 flex justify-between">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex gap-4">
          {isLogin ? <div>로그아웃</div> : <div>로그인</div>}
          {isLogin ? <div>마이페이지</div> : <></>}
        </div>
      </div>
    </header>
  );
}
