import { HomeBanner, HomeCardContainer } from "@/features";

export default function Home() {
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
