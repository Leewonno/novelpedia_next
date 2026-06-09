export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    // 또는 API 호출로 동적 생성
  ];
}

export default async function Novel({
  params,
  // searchParams,
}: {
  params: Promise<{ id: string }>;
  // searchParams: Promise<{ v?: string }>;
}) {
  const { id } = await params;
  // const { v } = await searchParams;

  return <div>{id}</div>;
}
