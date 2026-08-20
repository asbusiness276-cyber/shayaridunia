"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Share2, Copy, Download } from 'lucide-react';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

interface ShayariCardProps {
  shayari: {
    id: number;
    text: string;
    author: string;
    image: string;
    language: string;
    alt_text: string;
  };
  isDetail?: boolean;
}

export default function ShayariCard({ shayari, isDetail = false }: ShayariCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 });
      const link = document.createElement('a');
      link.download = `shayari-${shayari.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download image', err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shayari.text + '\n\n- Shayari Dunia');
    alert('Shayari copied to clipboard!');
  };

  const handleShare = () => {
    const url = `${window.location.origin}/shayari/${shayari.id}`;
    if (navigator.share) {
      navigator.share({
        title: 'Shayari Dunia',
        text: shayari.text,
        url: url,
      }).catch(console.error);
    } else {
      // Fallback to WhatsApp share
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shayari.text + '\n\n' + url)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const ImageContent = (
    <div 
      ref={cardRef} 
      className="relative h-64 sm:h-80 w-full bg-gray-900 shrink-0" 
    >
      <Image
        src={shayari.image}
        alt={shayari.alt_text || "Beautiful background for Shayari"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover opacity-80"
        priority={shayari.id <= 6}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
        <p className="text-white text-lg sm:text-2xl font-medium whitespace-pre-wrap drop-shadow-lg leading-relaxed">
          {shayari.text}
        </p>
      </div>
      {/* Watermark */}
      <div className="absolute bottom-3 right-4 opacity-70">
        <p className="text-white text-sm font-bold tracking-wider drop-shadow-md">
          @ShayariDunia
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      
      {isDetail ? (
        ImageContent
      ) : (
        <Link href={`/shayari/${shayari.id}`} className="block">
          {ImageContent}
        </Link>
      )}

      <div className="p-4 flex items-center justify-between bg-white grow border-t border-gray-50">
        <div className="flex gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 capitalize">
            {shayari.language}
          </span>
        </div>
        <div className="flex gap-4">
          <button onClick={handleDownload} className="text-gray-400 hover:text-pink-600 transition-colors" title="Download Image">
            <Download className="w-5 h-5" />
          </button>
          <button onClick={handleCopy} className="text-gray-400 hover:text-blue-600 transition-colors" title="Copy Text">
            <Copy className="w-5 h-5" />
          </button>
          <button onClick={handleShare} className="text-gray-400 hover:text-green-600 transition-colors" title="Share">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
