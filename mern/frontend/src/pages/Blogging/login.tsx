import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            if (email.trim() === '' || password.trim() === '') {
                setError('Please enter both email and password');
                return;
            }

            const res = await axios.post('http://localhost:5001/api/login', { email, password });
            console.log({ res, message: 'Login successful' });
            localStorage.setItem('token', res.data.token); 
            setSuccess(true);
            setError('');
            setTimeout(() => {
                navigate('/blog'); // Redirect to /blog after login
            }, 1000); // Optional delay for UX
        } catch (err: any) {
            console.error('Error in login:', err);
            setError(err.response?.data?.message || 'Failed to login. Please try again.');
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    onClick={handleLogin}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </div>
            {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
            {success && <p style={{ color: 'green', fontSize: '14px' }}>Login successful! Redirecting...</p>}
        </div>
    );
};

export default Login;
