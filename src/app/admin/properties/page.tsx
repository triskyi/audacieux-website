
"use client";
import React, { useState, useEffect } from 'react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  size: string;
  featured: boolean;
  serviceType: string;
}

export default function ManageProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    type: '',
    size: '',
    featured: false,
    serviceType: 'HOUSE_SELLING',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, typeof value === 'boolean' ? String(value) : value);
    });
    if (imageFile) {
      formData.append('image', imageFile);
    }
    const res = await fetch('/api/properties/upload', {
      method: 'POST',
      body: formData,
    });
    const newProperty = await res.json();
    setProperties([newProperty, ...properties]);
    setForm({ title: '', location: '', price: '', type: '', size: '', featured: false, serviceType: 'HOUSE_SELLING' });
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef] py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Property</h2>
        <form onSubmit={handleAdd} className="flex flex-col gap-4">
          <label className="block">
            <span className="block mb-1">Service Type</span>
            <select name="serviceType" value={form.serviceType} onChange={handleChange} className="input input-bordered bg-gray-50 text-gray-900">
              <option value="HOUSE_SELLING">House Selling</option>
              <option value="SMALL_HOUSE_RENTING">Small House Renting (Ghetto)</option>
              <option value="HOUSE_RENTAL_LEASING">House Rental & Leasing</option>
              <option value="PLOT_SELLING">Plot Selling</option>
              <option value="WORKPLACE_LEASING">Workplace (Office) Leasing</option>
              <option value="APARTMENT_LEASING">Apartment Leasing</option>
            </select>
          </label>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required type="number" min="0" className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <label className="block">
            <span className="block mb-1">Image File (jpg, png, jpeg, max 5MB)</span>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="file-input file-input-bordered w-full" required />
          </label>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="rounded-lg border w-full h-32 object-cover mb-2" />
          )}
          <input name="type" placeholder="Type (e.g. House, Land)" value={form.type} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <input name="size" placeholder="Size (e.g. 200 sqm)" value={form.size} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} /> Featured
          </label>
          <button type="submit" disabled={loading} className="btn bg-[#0d4f3a] text-white hover:bg-[#1a7a55] w-full">{loading ? 'Adding...' : 'Add Property'}</button>
        </form>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-bold mb-4 text-gray-800">All Properties</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((p) => (
            <li key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200">
              <div className="font-semibold text-lg text-gray-900">{p.title} {p.featured && <span className="text-yellow-500">★</span>}</div>
              {p.image && (
                <div className="relative w-full h-32 mb-2">
                  <img src={p.image} alt={p.title} className="rounded border w-full h-32 object-cover bg-gray-100" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-2 rounded-b flex flex-col">
                    <span className="text-white font-semibold text-base drop-shadow">{p.title} {p.featured && <span className="text-yellow-400">★</span>}</span>
                  </div>
                </div>
              )}
              <div className="text-sm text-gray-800">
                <span className="font-medium">Location:</span> {p.location} <br />
                <span className="font-medium">Price:</span> {p.price} <br />
                <span className="font-medium">Type:</span> {p.type} <br />
                <span className="font-medium">Service:</span> {p.serviceType}
                <span className="font-medium">Size:</span> {p.size}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
