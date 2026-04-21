import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../services/api';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await adminLogin(password);
      localStorage.setItem('adminToken', data.token);
      navigate('/manage-style-lit-portal-xyz89/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-300">
      <div className="bg-white/60 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/50 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-stone-800">Style-lit Admin</h1>
          <p className="text-stone-500 mt-2">Secure access portal</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Access Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white/50 focus:ring-2 focus:ring-stone-500 outline-none transition-all"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center font-medium bg-red-50/50 p-2 rounded">{error}</p>}
          <button 
            type="submit"
            className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
