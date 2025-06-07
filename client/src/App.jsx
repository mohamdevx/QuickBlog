import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';

// Admin pages
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Login from './components/admin/Login';

const isAuthenticated = true; // Replace with real auth logic

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />

      {/* Admin Routes */}
      <Route path="/admin" element={isAuthenticated ? <Layout /> : <Login />}>
        <Route index element={<Dashboard />} /> {/* Default: /admin */}
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="listBlog" element={<ListBlog />} />
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;
