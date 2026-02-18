"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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

const emptyForm = {
  title: '',
  location: '',
  price: '',
  type: '',
  size: '',
  featured: false,
  serviceType: 'HOUSE_SELLING',
};

export default function ManageProperties() {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState({ ...emptyForm });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [showDeleteId, setShowDeleteId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [skeleton, setSkeleton] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSkeleton(true);
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .finally(() => setSkeleton(false));
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

  // Add property
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
    setForm({ ...emptyForm });
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setLoading(false);
    setShowAddModal(false);
  };

  // Open edit modal
  const openEditModal = (property: Property) => {
    setForm({
      title: property.title,
      location: property.location,
      price: property.price,
      type: property.type,
      size: property.size,
      featured: property.featured,
      serviceType: property.serviceType,
    });
    setImagePreview(property.image || null);
    setEditId(property.id);
    setShowEditModal(true);
  };

  // Update property
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, typeof value === 'boolean' ? String(value) : value);
    });
    if (imageFile) {
      formData.append('image', imageFile);
    }
    const res = await fetch(`/api/properties/${editId}`, {
      method: 'PUT',
      body: formData,
    });
    const updatedProperty = await res.json();
    setProperties((prev) => prev.map((p) => (p.id === editId ? updatedProperty : p)));
    setForm({ ...emptyForm });
    setImageFile(null);
    setImagePreview(null);
    setEditId(null);
    setLoading(false);
    setShowEditModal(false);
  };

  // Delete property
  const handleDelete = async () => {
    if (!showDeleteId) return;
    setLoading(true);
    await fetch(`/api/properties/${showDeleteId}`, { method: 'DELETE' });
    setProperties((prev) => prev.filter((p) => p.id !== showDeleteId));
    setShowDeleteId(null);
    setLoading(false);
  };

  // Modal form for add/update
  const renderFormModal = (isEdit: boolean) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => { isEdit ? setShowEditModal(false) : setShowAddModal(false); }}>&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{isEdit ? 'Update Property' : 'Add New Property'}</h2>
        <form onSubmit={isEdit ? handleUpdate : handleAdd} className="flex flex-col gap-4">
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
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="file-input file-input-bordered w-full" />
          </label>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="rounded-lg border w-full h-32 object-cover mb-2" />
          )}
          <input name="type" placeholder="Type (e.g. House, Land)" value={form.type} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <input name="size" placeholder="Size (e.g. 200 sqm)" value={form.size} onChange={handleChange} required className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500" />
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} /> Featured
          </label>
          <button type="submit" disabled={loading} className="btn bg-[#0d4f3a] text-white hover:bg-[#1a7a55] w-full">{loading ? (isEdit ? 'Updating...' : 'Adding...') : (isEdit ? 'Update Property' : 'Add Property')}</button>
        </form>
      </div>
    </div>
  );

  // Modal for delete confirmation
  const renderDeleteModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm relative">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Delete Property</h2>
        <p className="mb-6 text-center text-gray-600">Are you sure you want to delete this property? This action cannot be undone.</p>
        <div className="flex gap-4 justify-center">
          <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => setShowDeleteId(null)}>Cancel</button>
          <button className="btn bg-red-500 text-white hover:bg-red-400" onClick={handleDelete} disabled={loading}>{loading ? 'Deleting...' : 'Delete'}</button>
        </div>
      </div>
    </div>
  );

  // Filtered properties based on search input
  const filteredProperties = search.trim() === ""
    ? properties
    : properties.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.type.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef] py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Properties</h3>
          <div className="flex gap-2 items-center">
            <button
              className="rounded-lg px-4 py-2 bg-gradient-to-r from-gray-300 to-gray-200 text-[#0d4f3a] font-bold shadow hover:from-gray-400 hover:to-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
              className="input input-bordered text-black w-64 mr-4"
            />
            <button className="rounded-lg px-5 py-2 bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white font-bold shadow hover:from-[#1a7a55] hover:to-[#0d4f3a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
              onClick={() => setShowAddModal(true)}
            >
              + Add New Property
            </button>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skeleton ? <PropertiesSkeleton /> : filteredProperties.map((p) => (
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
              <div className="flex gap-2 mt-2">
                <button
                  className="rounded-lg px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#0d4f3a] font-semibold shadow hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => openEditModal(p)}
                  type="button"
                >
                  Update
                </button>
                <button
                  className="rounded-lg px-4 py-1.5 bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold shadow hover:from-red-400 hover:to-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => setShowDeleteId(p.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showAddModal && renderFormModal(false)}
      {showEditModal && renderFormModal(true)}
      {showDeleteId && renderDeleteModal()}
    </div>
  );
}

// Skeleton loader for cards
const PropertiesSkeleton = () => (
  <>
    {[...Array(4)].map((_, i) => (
      <li key={i} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-32 bg-gray-200 rounded mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-1" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </li>
    ))}
  </>
);

// (filteredProperties is now defined inside the ManageProperties component)
