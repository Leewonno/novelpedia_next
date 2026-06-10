export default async function Novel({
  params,
  // searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ v?: string }>;
}) {
  const { id } = await params;
  // const { v } = await searchParams;

  return (
    <>
      <div>타이틀 {id}</div>
    </>
  );
}
