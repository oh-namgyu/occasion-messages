export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💌</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                경조사 <span className="gradient-text">문구 모음</span>
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">상황에 맞는 정중한 문구를 찾아보세요</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
