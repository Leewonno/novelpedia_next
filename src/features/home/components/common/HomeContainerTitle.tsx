type HomeContainerTitleProps = {
  children: React.ReactNode;
};

export function HomeContainerTitle({ children }: HomeContainerTitleProps) {
  return <h1>{children}</h1>;
}
