import type { Ref } from "react";
import { HomeCard } from "./HomeCard";

type HomeCardListProps = {
  ref?: Ref<HTMLDivElement>;
};

// 카드 리스트
export function HomeCardList({ ref }: HomeCardListProps) {
  return (
    <div
      ref={ref}
      className="flex w-full overflow-x-hidden gap-4 scroll-smooth"
    >
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
