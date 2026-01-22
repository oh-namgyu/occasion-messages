import { useEffect, useRef } from 'react';

const ADSENSE_ENABLED = true;
const ADSENSE_CLIENT_ID = 'ca-pub-2627121549841957';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdSlot = ({ slot, format = 'auto', className = '' }: AdSlotProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!ADSENSE_ENABLED || isInitialized.current) return;

    try {
      if (adRef.current && adRef.current.innerHTML === '') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isInitialized.current = true;
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  if (!ADSENSE_ENABLED) {
    return (
      <div className={`bg-orange-50 border border-orange-200 rounded-xl p-4 text-center ${className}`}>
        <p className="text-orange-400 text-sm">광고 영역</p>
      </div>
    );
  }

  const getAdStyle = () => {
    switch (format) {
      case 'horizontal':
        return { display: 'block', width: '100%', height: '90px' };
      case 'vertical':
        return { display: 'block', width: '160px', height: '600px' };
      case 'rectangle':
        return { display: 'block', width: '300px', height: '250px' };
      default:
        return { display: 'block' };
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </div>
  );
};
