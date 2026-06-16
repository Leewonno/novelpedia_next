import { HomeBanner, HomeCardContainer } from "@/features";

export default async function Home() {
  // TODO: 로딩 UI 확인용 임시 지연. 실제 데이터 연동 시 제거.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* 배너 */}
      <HomeBanner />
      {/* 인기 작품 */}
      <HomeCardContainer title="인기 작품" />
      {/* 최근 수정된 작품 */}
      <HomeCardContainer title="최근 수정된 작품" />
      {/* 최근 생성된 작품 */}
      <HomeCardContainer title="최근 생성된 작품" />
    </div>
  );
}
