import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex">
      <div>
        <div>
          <Link href={"/"}>공지사항</Link>
          <Link href={"/"}>문의</Link>
          <Link href={"/"}>신고</Link>
        </div>
        <div>카피라이트</div>
      </div>
    </footer>
  );
}
