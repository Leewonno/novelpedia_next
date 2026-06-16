// 공통 로딩 스피너
// Suspense fallback 등에 사용. 부모 영역(w/h-full)을 채우며 가운데서 회전.

export function LoadingSpinner() {
  return (
    <div className={`flex h-full w-full items-center justify-center`}>
      <output
        aria-label="로딩 중"
        className="inline-block animate-spin rounded-full border-background-2 border-t-brand"
        style={{
          width: 32,
          height: 32,
          borderWidth: 3,
        }}
      />
    </div>
  );
}
