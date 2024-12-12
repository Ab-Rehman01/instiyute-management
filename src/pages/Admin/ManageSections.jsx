import React, { useState } from 'react';
import api from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/users/login', { email, password });
      if (response.status === 200) {
        console.log('Logged in:', response.data);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-white rounded shadow-md">
        <input
          type="email"
          className="mb-4 p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mb-4 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
