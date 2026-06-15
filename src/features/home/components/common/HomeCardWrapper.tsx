import { HomeCard } from "./HomeCard";

// 카드 리스트
export function HomeCardWrapper() {
  return (
    <div className="flex w-full overflow-scroll">
      <HomeCard title="전지적 독자 시점" />
      <HomeCard title="밝은 밤" />
      <HomeCard title="너의 목소리가 들려" />
      <HomeCard title="천개의 파랑" />
      <HomeCard title="천개의 파랑" />
      <HomeCard title="천개의 파랑" />
      <HomeCard title="천개의 파랑" />
      <HomeCard title="천개의 파랑" />
    </div>
  );
}
