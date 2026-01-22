import { useState } from 'react';
import {
  Header,
  Footer,
  AdSlot,
  MessageCard,
  SearchBar,
  CategoryFilter,
  SeoContent,
} from './components';
import { searchMessages, MESSAGES } from './constants/messages';
import type { Category } from './constants/messages';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const filteredMessages = searchMessages(searchQuery, selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* 히어로 섹션 */}
        <section className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            상황에 맞는 <span className="gradient-text">정중한 문구</span>를 찾아보세요
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            결혼, 조의, 개업, 승진 등 {MESSAGES.length}개의 경조사 문구를 무료로 사용하세요.
            <br />복사 버튼을 눌러 카톡이나 문자에 바로 붙여넣기!
          </p>
        </section>

        {/* 검색 + 필터 */}
        <section className="mb-8 space-y-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
        </section>

        {/* 상단 광고 */}
        <section className="mb-8">
          <AdSlot slot="top-content-ad" format="horizontal" className="w-full h-[90px]" />
        </section>

        {/* 문구 카드 그리드 */}
        <section className="mb-8">
          {filteredMessages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMessages.map((message, index) => (
                <div key={message.id}>
                  <MessageCard message={message} />
                  {/* 6번째 카드 후 중간 광고 삽입 */}
                  {index === 5 && filteredMessages.length > 6 && (
                    <div className="col-span-1 md:col-span-2 mt-6">
                      <AdSlot slot="mid-content-ad" format="horizontal" className="w-full h-[90px]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-500">
                다른 검색어나 카테고리를 선택해보세요
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('전체');
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-colors"
              >
                전체 보기
              </button>
            </div>
          )}
        </section>

        {/* 결과 개수 표시 */}
        <div className="text-center text-gray-500 text-sm mb-8">
          총 {filteredMessages.length}개의 문구
        </div>

        {/* 하단 광고 */}
        <section className="mb-8">
          <AdSlot slot="bottom-content-ad" format="horizontal" className="w-full h-[90px]" />
        </section>

        {/* SEO 콘텐츠 */}
        <SeoContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
