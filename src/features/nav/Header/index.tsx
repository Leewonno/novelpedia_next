export function Header() {
  const isLogin = false;
  return (
    <header>
      <div>로고</div>
      <div>
        {isLogin ? <div>로그아웃</div> : <div>로그인</div>}
        {isLogin ? <div>마이페이지</div> : <></>}
      </div>
    </header>
  );
}
