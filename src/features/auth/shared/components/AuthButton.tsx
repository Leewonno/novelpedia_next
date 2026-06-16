type AuthButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "kakao" | "google";
};

export function AuthButton({ onClick, children, type }: AuthButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className="w-full h-10 font-semibold rounded-lg cursor-pointer border border-background-2  hover:bg-background-2 text-black transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
