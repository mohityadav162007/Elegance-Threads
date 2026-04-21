import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchOrders,
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateOrderStatus
} from '../services/api';

const EMPTY_PRODUCT = { name: '', price: '', category: '', description: '', imageUrl: '' };
const ORDER_STATUSES = ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // product _id or null
  const [formData, setFormData] = useState(EMPTY_PRODUCT);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const getToken = () => localStorage.getItem('adminToken');

  // ─── Data Loading ───────────────────────────────────────────────
  const loadData = useCallback(async () => {
    const token = getToken();
    if (!token) { navigate('/manage-style-lit-portal-xyz89'); return; }

    setLoading(true);
    setError('');
    try {
      if (activeTab === 'orders') {
        const data = await fetchOrders(token);
        setOrders(data);
      } else {
        const data = await fetchProducts();
        setProducts(data);
      }
    } catch (e) {
      console.error(e);
      if (e.message.includes('Token') || e.message.includes('token') || e.message.includes('authorization')) {
        localStorage.removeItem('adminToken');
        navigate('/manage-style-lit-portal-xyz89');
      } else {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  }, [activeTab, navigate]);

  useEffect(() => { loadData(); }, [loadData]);

  // ─── Flash messages ─────────────────────────────────────────────
  useEffect(() => {
    if (success) { const t = setTimeout(() => setSuccess(''), 3000); return () => clearTimeout(t); }
  }, [success]);

  // ─── Product CRUD ───────────────────────────────────────────────
  const openAddForm = () => {
    setEditingProduct(null);
    setFormData(EMPTY_PRODUCT);
    setShowAddForm(true);
    setError('');
  };

  const openEditForm = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name || '',
      price: product.price?.toString() || '',
      category: product.category || '',
      description: product.description || '',
      imageUrl: product.imageUrl || ''
    });
    setShowAddForm(true);
    setError('');
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingProduct(null);
    setFormData(EMPTY_PRODUCT);
    setError('');
  };

  const handleSaveProduct = async () => {
    if (!formData.name.trim() || !formData.price) {
      setError('Product name and price are required.');
      return;
    }

    const token = getToken();
    if (!token) return;

    setActionLoading(true);
    setError('');
    try {
      const payload = { ...formData, price: parseFloat(formData.price) };

      if (editingProduct) {
        await updateProduct(editingProduct, payload, token);
        setSuccess('Product updated successfully!');
      } else {
        await createProduct(payload, token);
        setSuccess('Product added successfully!');
      }

      cancelForm();
      await loadData();
    } catch (e) {
      setError(e.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    const token = getToken();
    if (!token) return;

    setActionLoading(true);
    setError('');
    try {
      await deleteProduct(productId, token);
      setSuccess('Product deleted.');
      await loadData();
    } catch (e) {
      setError(e.message);
    } finally {
      setActionLoading(false);
    }
  };

  // ─── Order Status ───────────────────────────────────────────────
  const handleOrderStatusChange = async (orderId, newStatus) => {
    const token = getToken();
    if (!token) return;

    setActionLoading(true);
    setError('');
    try {
      await updateOrderStatus(orderId, newStatus, token);
      setSuccess(`Order marked as ${newStatus}`);
      await loadData();
    } catch (e) {
      setError(e.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/manage-style-lit-portal-xyz89');
  };

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <nav className="w-full md:w-64 bg-stone-900 text-stone-100 flex md:flex-col md:min-h-screen p-6 shadow-xl z-20 shrink-0">
        <h2 className="text-2xl font-serif mb-0 md:mb-10 mr-auto md:mr-0">Admin Flow</h2>

        <div className="flex md:flex-col gap-4 overflow-x-auto items-center md:items-start w-full">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg text-left whitespace-nowrap transition-colors ${activeTab === 'products' ? 'bg-stone-700 font-medium' : 'text-stone-400 hover:text-white'}`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg text-left whitespace-nowrap transition-colors ${activeTab === 'orders' ? 'bg-stone-700 font-medium' : 'text-stone-400 hover:text-white'}`}
          >
            Orders
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="ml-auto md:ml-0 md:mt-auto text-sm text-stone-400 hover:text-white pt-4 md:border-t border-stone-800"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Flash Messages */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex justify-between items-center">
              <span>{error}</span>
              <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 text-lg font-bold ml-4">&times;</button>
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {loading && (
            <div className="text-center py-16 text-stone-400 text-lg">Loading...</div>
          )}

          {/* ═══════════ ORDERS TAB ═══════════ */}
          {!loading && activeTab === 'orders' && (
            <div>
              <h1 className="text-2xl md:text-3xl font-serif mb-6 text-stone-800">Recent Orders</h1>
              <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[700px]">
                    <thead className="bg-stone-50 text-stone-600 text-sm">
                      <tr>
                        <th className="p-4 border-b border-stone-100">ID / Date</th>
                        <th className="p-4 border-b border-stone-100">Customer</th>
                        <th className="p-4 border-b border-stone-100">Items</th>
                        <th className="p-4 border-b border-stone-100">Total</th>
                        <th className="p-4 border-b border-stone-100">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length === 0 ? (
                        <tr><td colSpan="5" className="p-6 text-center text-stone-500">No orders found.</td></tr>
                      ) : (
                        orders.map(order => (
                          <tr key={order._id} className="border-b border-stone-50 hover:bg-stone-50/50">
                            <td className="p-4 text-sm text-stone-600">
                              <span className="block font-mono text-xs">{order._id?.slice(-8) || 'N/A'}</span>
                              <span className="text-xs text-stone-400">{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}</span>
                            </td>
                            <td className="p-4">
                              <div className="font-medium text-stone-800">{order.customerName}</div>
                              <div className="text-sm text-stone-500">{order.customerEmail}</div>
                              <div className="text-xs text-stone-400 mt-1">{order.address}</div>
                            </td>
                            <td className="p-4 text-sm text-stone-600">
                              {order.items?.map((item, i) => (
                                <div key={i}>{item.name} × {item.quantity}</div>
                              ))}
                            </td>
                            <td className="p-4 font-medium text-stone-900">₹{order.totalAmount}</td>
                            <td className="p-4">
                              <select
                                value={order.status}
                                onChange={(e) => handleOrderStatusChange(order._id, e.target.value)}
                                disabled={actionLoading}
                                className="px-3 py-1.5 rounded-lg text-xs border border-stone-200 bg-white focus:ring-1 focus:ring-stone-400 outline-none cursor-pointer"
                              >
                                {ORDER_STATUSES.map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════ PRODUCTS TAB ═══════════ */}
          {!loading && activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl md:text-3xl font-serif text-stone-800">Inventory</h1>
                <button
                  onClick={showAddForm ? cancelForm : openAddForm}
                  className="bg-stone-900 text-white px-5 py-2 rounded-lg hover:bg-stone-800 shadow-md text-sm font-medium transition-all"
                >
                  {showAddForm ? 'Cancel' : '+ Add Product'}
                </button>
              </div>

              {/* Add / Edit Form */}
              {showAddForm && (
                <div className="bg-white p-6 rounded-xl shadow-md border border-stone-100 mb-8 mt-2">
                  <h3 className="text-lg font-medium mb-4 text-stone-800">
                    {editingProduct ? 'Edit Product' : 'New Item Details'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="border border-stone-200 rounded-md p-3 bg-stone-50 text-sm focus:ring-1 focus:ring-stone-400 outline-none"
                      placeholder="Product Name *"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      className="border border-stone-200 rounded-md p-3 bg-stone-50 text-sm focus:ring-1 focus:ring-stone-400 outline-none"
                      placeholder="Price *" type="number" min="0" step="0.01"
                      value={formData.price}
                      onChange={e => setFormData({ ...formData, price: e.target.value })}
                    />
                    <input
                      className="border border-stone-200 rounded-md p-3 bg-stone-50 text-sm focus:ring-1 focus:ring-stone-400 outline-none"
                      placeholder="Category (e.g. Dresses, Tops)"
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                    />
                    <input
                      className="border border-stone-200 rounded-md p-3 bg-stone-50 text-sm focus:ring-1 focus:ring-stone-400 outline-none"
                      placeholder="Image URL"
                      value={formData.imageUrl}
                      onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                    />
                    <textarea
                      className="border border-stone-200 rounded-md p-3 bg-stone-50 text-sm md:col-span-2 focus:ring-1 focus:ring-stone-400 outline-none"
                      placeholder="Detailed Description" rows="3"
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      disabled={actionLoading}
                      className="bg-stone-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow disabled:opacity-50"
                      onClick={handleSaveProduct}
                    >
                      {actionLoading ? 'Saving...' : (editingProduct ? 'Update Product' : 'Save Product')}
                    </button>
                    <button
                      onClick={cancelForm}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              )}

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <div key={product._id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden flex flex-col group">
                    <div className="h-48 overflow-hidden bg-stone-100 relative">
                      <img
                        src={product.imageUrl || 'https://images.unsplash.com/photo-1550614000-4b95eb1580bc?q=80&w=600&auto=format&fit=crop'}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">{product.category || 'General'}</div>
                      <h4 className="font-medium text-lg text-stone-800 mb-1">{product.name}</h4>
                      {product.description && <p className="text-xs text-stone-400 mb-3 line-clamp-2">{product.description}</p>}
                      <div className="mt-auto font-medium text-stone-900 border-t border-stone-100 pt-3 flex justify-between items-center">
                        <span>₹{product.price}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditForm(product)}
                            className="text-xs bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded text-stone-700 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                            disabled={actionLoading}
                            className="text-xs bg-red-50 hover:bg-red-100 px-3 py-1 rounded text-red-600 transition-colors disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <div className="text-stone-500 col-span-full py-10 text-center bg-white rounded-xl border border-stone-100">
                    No products available in database. Add some!
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
