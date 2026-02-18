"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ShortVideo {
  id: string;
  title: string;
  serviceType: string;
  type: string;
  location: string;
  price: number;
  size: string;
  video: string;
  featured: boolean;
  description: string;
  createdAt: string;
}


import { Dialog } from "@headlessui/react";

const initialForm = {
  serviceType: 'HOUSE_SELLING',
  title: '',
  type: '',
  location: '',
  price: '',
  size: '',
  featured: false,
  description: '',
};

const ShortsAdminPage: React.FC = () => {
  const router = useRouter();
  const [shorts, setShorts] = useState<ShortVideo[]>([]);
  const [form, setForm] = useState({ ...initialForm });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editShort, setEditShort] = useState<ShortVideo | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [skeleton, setSkeleton] = useState(true);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const filteredShorts = search.trim() === "" ? shorts : shorts.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.location.toLowerCase().includes(search.toLowerCase()) ||
    s.type.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSkeleton(true);
    fetch('/api/shorts')
      .then((res) => res.json())
      .then((data) => setShorts(data))
      .finally(() => setSkeleton(false));
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
    setForm({ ...initialForm });
    setVideoFile(null);
    setVideoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setLoading(false);
    setShowAddModal(false);
  };

  const openEditModal = (short: ShortVideo) => {
    setEditShort(short);
    setForm({
      serviceType: short.serviceType,
      title: short.title,
      type: short.type,
      location: short.location,
      price: String(short.price),
      size: short.size,
      featured: short.featured,
      description: short.description,
    });
    setVideoPreview(short.video);
    setShowEditModal(true);
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editShort) return;
    setLoading(true);
    let updated: Partial<ShortVideo> = { 
      ...form, 
      price: form.price === '' ? undefined : Number(form.price)
    };
    if (videoFile) {
      // If new video, upload it first
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, typeof value === "boolean" ? String(value) : value);
      });
      formData.append('video', videoFile);
      const res = await fetch(`/api/shorts/upload`, {
        method: 'POST',
        body: formData,
      });
      const newShort = await res.json();
      updated.video = newShort.video;
    }
    const res = await fetch(`/api/shorts/${editShort.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    const updatedShort = await res.json();
    setShorts((prev) => prev.map((s) => (s.id === editShort.id ? updatedShort : s)));
    setLoading(false);
    setShowEditModal(false);
    setEditShort(null);
    setForm({ ...initialForm });
    setVideoFile(null);
    setVideoPreview(null);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setLoading(true);
    await fetch(`/api/shorts/${deleteId}`, { method: 'DELETE' });
    setShorts((prev) => prev.filter((s) => s.id !== deleteId));
    setLoading(false);
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // Skeleton loader for cards
  const ShortsSkeleton = () => (
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse flex flex-col gap-2">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-40 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 text-black">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-black">Shorts Management</h2>
          <div className="flex gap-2 items-center w-full md:w-auto">
            <button
              className="rounded-lg px-5 py-2 bg-gradient-to-r from-gray-300 to-gray-200 text-[#0d4f3a] font-bold shadow hover:from-gray-400 hover:to-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 min-w-[160px]"
              onClick={() => router.push('/admin')}
              type="button"
            >
              ← Go Back to Admin
            </button>
            <input
              type="text"
              placeholder="Search by title, location, or type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input input-bordered text-black w-full md:w-64"
            />
            <button
              className="rounded-lg px-5 py-2 bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white font-bold shadow hover:from-[#1a7a55] hover:to-[#0d4f3a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a] min-w-[160px]"
              onClick={() => setShowAddModal(true)}
              type="button"
            >
              + Add Short
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-black">All Shorts</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skeleton ? <ShortsSkeleton /> : filteredShorts.map((s) => (
            <li key={s.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 text-black">
              <div className="font-semibold text-lg text-black mb-2">
                {s.title} {s.featured && <span className="text-yellow-500">★</span>}
              </div>
              {s.video && (
                <video width="240" controls src={s.video} className="rounded border" />
              )}
              <div className="text-sm text-black">
                {s.type && <>Type: {s.type} <br /></>}
                {s.serviceType && <>Service: {s.serviceType} <br /></>}
                {s.location && <>Location: {s.location} <br /></>}
                {s.price ? <>Price: {s.price} <br /></> : null}
                {s.size && <>Size: {s.size} <br /></>}
                {s.description && <>Description: {s.description}</>}
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  className="rounded-lg px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#0d4f3a] font-semibold shadow hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs"
                  onClick={() => openEditModal(s)}
                  type="button"
                >Edit</button>
                <button
                  className="rounded-lg px-4 py-1.5 bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold shadow hover:from-red-400 hover:to-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => { setDeleteId(s.id); setShowDeleteModal(true); }}
                  type="button"
                  disabled={loading}
                >
                  {loading && deleteId === s.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Modal */}
      <Dialog open={showAddModal} onClose={() => setShowAddModal(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
          <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-lg mx-auto z-10">
            <Dialog.Title className="text-xl font-bold mb-4">Add New Short</Dialog.Title>
            <form onSubmit={handleAdd} className="flex flex-col gap-4">
              <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input input-bordered text-black" required />
              <select name="serviceType" value={form.serviceType} onChange={handleChange} className="input input-bordered text-black">
                <option value="HOUSE_SELLING">House Selling</option>
                <option value="HOUSE_RENTING">House Renting</option>
                <option value="LAND_SELLING">Land Selling</option>
                <option value="LAND_RENTING">Land Renting</option>
              </select>
              <input name="type" value={form.type} onChange={handleChange} placeholder="Type" className="input input-bordered text-black" />
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="input input-bordered text-black" />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="input input-bordered text-black" type="number" />
              <input name="size" value={form.size} onChange={handleChange} placeholder="Size" className="input input-bordered text-black" />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input input-bordered text-black" />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="featured" checked={!!form.featured} onChange={handleChange} />
                Featured
              </label>
              <input type="file" accept="video/*" onChange={handleFileChange} ref={fileInputRef} className="input input-bordered text-black" required />
              {videoPreview && (
                <video src={videoPreview} controls className="rounded border w-full max-h-48" />
              )}
              <div className="flex gap-2 mt-2">
                <button
                  className="rounded-lg px-5 py-2 bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white font-bold shadow hover:from-[#1a7a55] hover:to-[#0d4f3a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Uploading...' : 'Add Short'}
                </button>
                <button
                  className="rounded-lg px-5 py-2 bg-gray-200 text-black font-bold shadow hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  disabled={loading}
                >Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={showEditModal} onClose={() => setShowEditModal(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
          <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-lg mx-auto z-10">
            <Dialog.Title className="text-xl font-bold mb-4">Edit Short</Dialog.Title>
            <form onSubmit={handleEdit} className="flex flex-col gap-4">
              <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input input-bordered text-black" required />
              <select name="serviceType" value={form.serviceType} onChange={handleChange} className="input input-bordered text-black">
                <option value="HOUSE_SELLING">House Selling</option>
                <option value="HOUSE_RENTING">House Renting</option>
                <option value="LAND_SELLING">Land Selling</option>
                <option value="LAND_RENTING">Land Renting</option>
              </select>
              <input name="type" value={form.type} onChange={handleChange} placeholder="Type" className="input input-bordered text-black" />
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="input input-bordered text-black" />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="input input-bordered text-black" type="number" />
              <input name="size" value={form.size} onChange={handleChange} placeholder="Size" className="input input-bordered text-black" />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input input-bordered text-black" />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="featured" checked={!!form.featured} onChange={handleChange} />
                Featured
              </label>
              <input type="file" accept="video/*" onChange={handleFileChange} ref={fileInputRef} className="input input-bordered text-black" />
              {videoPreview && (
                <video src={videoPreview} controls className="rounded border w-full max-h-48" />
              )}
              <div className="flex gap-2 mt-2">
                <button
                  className="rounded-lg px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#0d4f3a] font-bold shadow hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  className="rounded-lg px-5 py-2 bg-gray-200 text-black font-bold shadow hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  disabled={loading}
                >Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteModal} onClose={() => setShowDeleteModal(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
          <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-sm mx-auto z-10">
            <Dialog.Title className="text-xl font-bold mb-4">Delete Short</Dialog.Title>
            <p className="mb-6">Are you sure you want to delete this short video? This action cannot be undone.</p>
            <div className="flex gap-2">
              <button
                className="rounded-lg px-5 py-2 bg-gradient-to-r from-red-500 to-red-400 text-white font-bold shadow hover:from-red-400 hover:to-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
              <button
                className="rounded-lg px-5 py-2 bg-gray-200 text-black font-bold shadow hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => setShowDeleteModal(false)}
                disabled={loading}
              >Cancel</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ShortsAdminPage;
