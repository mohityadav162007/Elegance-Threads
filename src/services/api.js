export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ─── Admin Auth ─────────────────────────────────────────────────────
export const adminLogin = async (password) => {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data;
};

export const verifyToken = async (token) => {
  const res = await fetch(`${API_URL}/admin/verify`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Token invalid');
  return await res.json();
};

// ─── Orders ─────────────────────────────────────────────────────────
export const fetchOrders = async (token) => {
  const res = await fetch(`${API_URL}/admin/orders`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch orders');
  return await res.json();
};

export const updateOrderStatus = async (orderId, status, token) => {
  const res = await fetch(`${API_URL}/admin/orders/${orderId}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });
  if (!res.ok) throw new Error('Failed to update order status');
  return await res.json();
};

// ─── Products ───────────────────────────────────────────────────────
export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return await res.json();
};

export const createProduct = async (productData, token) => {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(productData)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to create product');
  return data;
};

export const updateProduct = async (productId, productData, token) => {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(productData)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to update product');
  return data;
};

export const deleteProduct = async (productId, token) => {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to delete product');
  return data;
};
