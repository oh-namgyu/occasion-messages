import { useState } from 'react';
import type { Message } from '../constants/messages';
import { CATEGORIES } from '../constants/messages';

interface MessageCardProps {
  message: Message;
}

export const MessageCard = ({ message }: MessageCardProps) => {
  const [copied, setCopied] = useState(false);

  const categoryInfo = CATEGORIES.find(c => c.id === message.category);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = message.content;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="message-card">
      {/* 헤더 */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`category-badge ${categoryInfo?.color || 'default'}`}>
            {categoryInfo?.icon} {message.category}
          </span>
        </div>
      </div>

      {/* 제목 */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {message.title}
      </h3>

      {/* 본문 */}
      <div className="bg-orange-50 rounded-xl p-4 mb-4">
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-1 mb-4">
        {message.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 복사 버튼 */}
      <button
        onClick={handleCopy}
        className={`copy-btn w-full flex items-center justify-center gap-2 ${copied ? 'copied' : ''}`}
      >
        {copied ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            복사 완료!
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            복사하기
          </>
        )}
      </button>
    </div>
  );
};
