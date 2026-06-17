/* Button.tsx 공통 버튼 컴포넌트 */

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
