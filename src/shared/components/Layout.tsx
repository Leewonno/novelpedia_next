type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full flex justify-center h-screen">
      <section className="w-300 flex flex-col items-center">{children}</section>
    </main>
  );
}
