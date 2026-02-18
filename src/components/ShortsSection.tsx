'use client';
import React, { useEffect, useState } from 'react';

interface ShortVideo {
  id: string;
  title: string;
  video: string;
}



export default function HomeShortsSection() {
  const [shorts, setShorts] = useState<ShortVideo[]>([]);


  useEffect(() => {
    fetch("/api/shorts")
      .then((res) => res.json())
      .then((data) => {
        // Map videoUrl to video for compatibility if needed
        setShorts(data.map((s: any) => ({
          ...s,
          video: s.video || s.videoUrl || ""
        })));
      });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-black text-center tracking-tight">Shorts Videos</h2>
        <ul className="flex flex-wrap gap-8 justify-center">
          {shorts.map((s) => (
            <li key={s.id} className="w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-5 flex flex-col items-center border-t-4 border-[#0d4f3a]">
              <div className="mb-3 font-bold text-lg text-black text-center line-clamp-2 h-12 flex items-center justify-center">{s.title}</div>
              <div className="rounded-lg overflow-hidden w-full flex justify-center items-center bg-gray-200 mb-3" style={{height: '180px'}}>
                {s.video && s.video.endsWith('.mp4') ? (
                  <video width="220" height="160" controls src={s.video} className="rounded-md bg-black" style={{maxHeight: '160px'}} />
                ) : s.video && s.video.includes('youtube') ? (
                  <iframe width="220" height="160" src={s.video} title={s.title} allowFullScreen className="rounded-md bg-black" />
                ) : (
                  <div className="text-gray-400">No video</div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href="/shorts" className="text-[#0d4f3a] underline font-semibold text-lg hover:text-[#1a7a55] transition">See all shorts</a>
        </div>
      </div>
    </section>
  );
}
