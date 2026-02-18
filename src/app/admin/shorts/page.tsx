
"use client";
import React, { useState, useEffect } from 'react';


interface ShortVideo {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  size: string;
  video: string;
  featured: boolean;
  description: string;
  createdAt: string;
}

const ShortsAdminPage: React.FC = () => {
  const [shorts, setShorts] = useState<ShortVideo[]>([]);
  const [form, setForm] = useState({
    title: '',
    type: '',
    location: '',
    price: '',
    size: '',
    featured: false,
    description: '',
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/shorts')
      .then((res) => res.json())
      .then((data) => setShorts(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox' && 'checked' in e.target) {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoFile(file);
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    } else {
      setVideoPreview(null);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, typeof value === "boolean" ? String(value) : value);
    });
    if (videoFile) {
      formData.append('video', videoFile);
    }
    const res = await fetch('/api/shorts/upload', {
      method: 'POST',
      body: formData,
    });
    const newShort = await res.json();
    setShorts([newShort, ...shorts]);
    setForm({ title: '', type: '', location: '', price: '', size: '', featured: false, description: '' });
    setVideoFile(null);
    setVideoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Short</h2>
        <form onSubmit={handleAdd} className="flex flex-col gap-4">
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="input input-bordered" />
          <input name="type" placeholder="Type (optional)" value={form.type} onChange={handleChange} className="input input-bordered" />
          <input name="location" placeholder="Location (optional)" value={form.location} onChange={handleChange} className="input input-bordered" />
          <input name="price" placeholder="Price (optional)" value={form.price} onChange={handleChange} type="number" min="0" className="input input-bordered" />
          <input name="size" placeholder="Size in m² (optional)" value={form.size} onChange={handleChange} className="input input-bordered" />
          <textarea name="description" placeholder="Description (optional)" value={form.description} onChange={handleChange} className="textarea textarea-bordered" />
          <label className="block">
            <span className="block mb-1">Video File (mp4, max 100MB)</span>
            <input ref={fileInputRef} type="file" accept="video/mp4" onChange={handleFileChange} className="file-input file-input-bordered w-full" required />
          </label>
          {videoPreview && (
            <video src={videoPreview} controls width={320} className="rounded-lg border" />
          )}
          <label className="flex items-center gap-2">
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} /> Featured
          </label>
          <button type="submit" disabled={loading} className="btn btn-primary w-full">{loading ? 'Uploading...' : 'Add Short'}</button>
        </form>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-bold mb-4">All Shorts</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shorts.map((s) => (
            <li key={s.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <div className="font-semibold text-lg">{s.title} {s.featured && <span className="text-yellow-500">★</span>}</div>
              {s.video && (
                <video width="240" controls src={s.video} className="rounded border" />
              )}
              <div className="text-sm text-gray-600">
                {s.type && <>Type: {s.type} <br /></>}
                {s.location && <>Location: {s.location} <br /></>}
                {s.price ? <>Price: {s.price} <br /></> : null}
                {s.size && <>Size: {s.size} <br /></>}
                {s.description && <>Description: {s.description}</>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShortsAdminPage;
