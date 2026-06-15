type HomeTitleProps = {
  children: React.ReactNode;
};

export function HomeTitle({ children }: HomeTitleProps) {
  return <h1 className="text-xl font-bold">{children}</h1>;
}
