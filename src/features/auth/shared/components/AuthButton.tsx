import type { ReactNode } from "react";

type AuthButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "kakao" | "google";
  icon?: ReactNode;
  className?: string;
  action?: boolean;
};

export function AuthButton({
  onClick,
  children,
  type,
  icon,
  className,
  action,
}: AuthButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`relative w-full h-11 flex items-center justify-center font-semibold rounded-lg cursor-pointer border border-background-3 outline-brand-glow text-black transition-colors ${action ? "hover:bg-background-3 active:bg-background-0" : ""} overflow-hidden ${className || ""}`}
      onClick={onClick}
    >
      <div className="absolute left-3.5 flex items-center justify-center [&_svg]:size-5 [&_img]:size-5">
        {icon}
      </div>
      {children}
    </button>
  );
}
