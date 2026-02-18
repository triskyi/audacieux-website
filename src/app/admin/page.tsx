import React from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/properties">Manage Properties</a></li>
        <li><a href="/admin/shorts">Manage Shorts Videos</a></li>
      </ul>
    </div>
  );
}
