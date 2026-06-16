import Link from "next/link";
import { Logo } from "@/shared/components/Logo";

export function Header() {
  const isLogin = false;
  return (
    <header className="w-full h-14 flex justify-center items-center px-4 border-b border-gray-200 z-10">
      <div className="w-300 flex justify-between">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex gap-4 text-sm">
          {isLogin ? (
            <div>로그아웃</div>
          ) : (
            <Link className="font-semibold" href={"/login"}>
              로그인
            </Link>
          )}
          {isLogin ? <div>마이페이지</div> : <></>}
        </div>
      </div>
    </header>
  );
}
