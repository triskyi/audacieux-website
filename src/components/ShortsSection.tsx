'use client';
import React, { useEffect, useState } from 'react';

interface ShortVideo {
  id: string;
  title: string;
  video: string;
}



export default function HomeShortsSection() {
  const [shorts, setShorts] = useState<ShortVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/shorts")
      .then((res) => res.json())
      .then((data) => {
        // Map videoUrl to video for compatibility if needed
        setShorts(data.map((s: any) => ({
          ...s,
          video: s.video || s.videoUrl || ""
        })));
      })
      .finally(() => setLoading(false));
  }, []);

  // Skeleton loader for short videos
  const ShortsSkeleton = () => (
    <>
      {[...Array(4)].map((_, i) => (
        <li key={i} className="w-72 bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center border-t-4 border-gray-300 animate-pulse">
          <div className="mb-4 h-8 w-2/3 bg-gray-200 rounded" />
          <div className="rounded-xl overflow-hidden w-full flex justify-center items-center bg-gray-200 mb-4" style={{height: '200px'}}>
            <div className="h-40 w-40 bg-gray-300 rounded-lg" />
          </div>
        </li>
      ))}
    </>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-black text-center tracking-tight drop-shadow">Shorts Videos</h2>
        <ul className="flex flex-wrap gap-10 justify-center">
          {loading ? <ShortsSkeleton /> : shorts.map((s) => (
            <li key={s.id} className="w-72 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 flex flex-col items-center border-t-4 border-[#0d4f3a] group">
              <div className="mb-4 font-bold text-xl text-black text-center line-clamp-2 h-14 flex items-center justify-center group-hover:text-[#0d4f3a] transition">{s.title}</div>
              <div className="rounded-xl overflow-hidden w-full flex justify-center items-center bg-gray-200 mb-4" style={{height: '200px'}}>
                {s.video && s.video.endsWith('.mp4') ? (
                  <video width="240" height="180" controls src={s.video} className="rounded-lg bg-black" style={{maxHeight: '180px'}} />
                ) : s.video && s.video.includes('youtube') ? (
                  <iframe width="240" height="180" src={s.video} title={s.title} allowFullScreen className="rounded-lg bg-black" />
                ) : (
                  <div className="text-gray-400">No video</div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <a href="/shorts" className="text-[#0d4f3a] underline font-semibold text-xl hover:text-[#1a7a55] transition">See all shorts</a>
        </div>
      </div>
    </section>
  );
}
