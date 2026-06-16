export async function HomeBanner() {
  return (
    <div className="w-full bg-background-2 rounded-lg flex items-center justify-space-between p-12">
      {/* 텍스트 상자 */}
      <div className="w-1/2 flex flex-col gap-4">
        {/* 소개 문구 */}
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold leading-8 tracking-tight">
              1,000만편의 이야기
              <p>
                <span className="text-brand">독자가 직접 쓴</span> 백과사전
              </p>
            </h1>
          </div>
          <div>
            <p>웹소설·웹툰·소설·만화의 모든 것</p>
            <p>2,000만명의 독자가 함께 만드는 문서</p>
          </div>
        </div>
        {/* 검색창 */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="검색..."
            className="border border-foreground-2 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-4">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
