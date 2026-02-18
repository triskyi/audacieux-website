
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
}

export default function ManageProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
    type: '',
    size: '',
    featured: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
[name]: type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newProperty = await res.json();
    setProperties([newProperty, ...properties]);
    setForm({ title: '', location: '', price: '', image: '', type: '', size: '', featured: false });
    setLoading(false);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Manage Properties</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: 24 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <input name="type" placeholder="Type (e.g. House, Land)" value={form.type} onChange={handleChange} required />
        <input name="size" placeholder="Size (e.g. 200 sqm)" value={form.size} onChange={handleChange} required />
        <label style={{ marginLeft: 8 }}>
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} /> Featured
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Property'}</button>
      </form>
      <ul>
        {properties.map((p) => (
          <li key={p.id} style={{ marginBottom: 16 }}>
            <img src={p.image} alt={p.title} style={{ width: 100, height: 60, objectFit: 'cover' }} />
            <div>{p.title} - {p.location} - {p.price} - {p.type} - {p.size} {p.featured && <b>(Featured)</b>}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
