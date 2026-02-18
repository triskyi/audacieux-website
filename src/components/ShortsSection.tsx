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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shorts Videos</h2>
        <ul className="flex flex-wrap gap-6">
          {shorts.map((s) => (
            <li key={s.id} className="w-56 bg-white rounded-lg shadow p-3">
              <div className="mb-2 font-semibold">{s.title}</div>
              <video width="200" controls src={s.video} style={{ display: s.video && s.video.endsWith('.mp4') ? 'block' : 'none' }} />
              {s.video && s.video.includes('youtube') && (
                <iframe width="200" height="120" src={s.video} title={s.title} allowFullScreen />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="/shorts" className="text-[#0d4f3a] underline font-medium">See all shorts</a>
        </div>
      </div>
    </section>
  );
}
