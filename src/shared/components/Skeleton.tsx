// 공통 스켈레톤
type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={`animate-shimmer rounded-md bg-background-1 bg-size-[200%_100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] ${className}`}
    />
  );
}
