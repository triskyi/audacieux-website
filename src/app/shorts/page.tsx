
"use client";
import React, { useState, useEffect } from 'react';

interface ShortVideo {
  id: string;
  title: string;
  videoUrl: string;
}

// This is a placeholder. In a real app, fetch from backend or API.
const mockShorts: ShortVideo[] = [
  {
    id: '1',
    title: 'Sample Short 1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '2',
    title: 'Sample Short 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function ShortsPage() {
  const [shorts, setShorts] = useState<ShortVideo[]>([]);

  useEffect(() => {
    // Replace with real data fetching
    setShorts(mockShorts);
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Shorts Videos</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {shorts.map((s) => (
          <li key={s.id} style={{ width: 220, listStyle: 'none' }}>
            <div>{s.title}</div>
            <video width="200" controls src={s.videoUrl} style={{ display: s.videoUrl.endsWith('.mp4') ? 'block' : 'none' }} />
            {s.videoUrl.includes('youtube') && (
              <iframe width="200" height="120" src={s.videoUrl} title={s.title} allowFullScreen />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
