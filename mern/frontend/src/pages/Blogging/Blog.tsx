import React from 'react';

const Blog: React.FC = () => {
    return (
        <nav
            style={{
                backgroundColor: '#f8f9fa', // Light background color
                padding: '10px 20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a
                    href="#"
                    style={{
                        textDecoration: 'none',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#343a40', // Dark text color
                    }}
                >
                    Blog
                </a>

                {/* Links */}
                <ul
                    style={{
                        display: 'flex',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        gap: '15px',
                    }}
                >
                    <li>
                        <a
                            href="#"
                            style={{
                                textDecoration: 'none',
                                color: '#007bff',
                                fontSize: '16px',
                                fontWeight: '500',
                            }}
                        >
                            Mern
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{
                                textDecoration: 'none',
                                color: '#007bff',
                                fontSize: '16px',
                                fontWeight: '500',
                            }}
                        >
                            Create blog
                        </a>
                    </li>

                    {/* Dropdown */}
                    <li style={{ position: 'relative' }}>
                        <a
                            href="#"
                            style={{
                                textDecoration: 'none',
                                color: '#007bff',
                                fontSize: '16px',
                                fontWeight: '500',
                            }}
                        >
                            User
                        </a>
                    </li>

                    <li style={{ position: 'relative' }}>
                        <a
                            href="#"
                            style={{
                                textDecoration: 'none',
                                color: '#007bff',
                                fontSize: '16px',
                                fontWeight: '500',
                            }}
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Blog;
