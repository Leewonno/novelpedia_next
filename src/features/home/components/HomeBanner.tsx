export function HomeBanner() {
  return (
    <div className="w-full bg-gray-100 rounded-lg flex items-center justify-space-between p-8">
      {/* 텍스트 상자 */}
      <div className="w-1/2 flex flex-col gap-4">
        {/* 소개 문구 */}
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl font-bold">
              1,000만편의 이야기
              <span className="text-brand"> 독자가 직접 쓴</span> 백과사전
            </h1>
          </div>
          <div>
            <p>웹소설·웹툰·소설·만화의 모든 것</p>
            <p>3,210명의 독자가 함께 만드는 살아있는 문서</p>
          </div>
        </div>
        {/* 검색창 */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="검색..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
