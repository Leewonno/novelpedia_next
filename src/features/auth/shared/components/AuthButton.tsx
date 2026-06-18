import type { ReactNode } from "react";

type AuthButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "kakao" | "google";
  icon?: ReactNode;
};

export function AuthButton({ onClick, children, type, icon }: AuthButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className="relative w-full h-11 font-semibold rounded-lg cursor-pointer border border-background-3 outline-brand-glow hover:bg-background-3 text-black transition-colors active:bg-background-0"
      onClick={onClick}
    >
      <div className="absolute left-3 flex items-center justify-center [&_svg]:size-5 [&_img]:size-5">
        {icon}
      </div>
      {children}
    </button>
  );
}
