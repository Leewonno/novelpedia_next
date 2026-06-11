import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex justify-center h-25 border-t border-gray-200">
      <div className="w-300 h-full flex flex-col justify-center gap-4">
        <div className="flex gap-4">
          <Link href={"/"}>공지사항</Link>
          <Link href={"/"}>문의</Link>
          <Link href={"/"}>신고</Link>
        </div>
        <div>ⓒ 2026 NOVELPEDIA. All rights reserved.</div>
      </div>
    </footer>
  );
}
