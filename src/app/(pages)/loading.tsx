// 공통 로딩 UI
import { Skeleton } from "@/shared";

function CardRowSkeleton() {
  return (
    <div className="w-full flex flex-col">
      <Skeleton className="h-7 w-full" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* 배너 */}
      <Skeleton className="w-full h-60 rounded-lg" />
      {/* 카드 목록 */}
      <CardRowSkeleton />
      <CardRowSkeleton />
      <CardRowSkeleton />
    </div>
  );
}
