import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex justify-center h-25 border-t border-gray-200">
      <div className="w-300 h-full flex flex-col justify-center gap-2">
        <div className="flex gap-2 text-sm">
          <Link href={"/"}>공지사항</Link>
          <Link href={"/"}>문의</Link>
          <Link href={"/"}>신고</Link>
        </div>
        <div className="text-sm">ⓒ 2026 NOVELPEDIA. All rights reserved.</div>
      </div>
    </footer>
  );
}
