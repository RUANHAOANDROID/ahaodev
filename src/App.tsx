import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDelivery from './pages/ProductDelivery'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? element : <Navigate to="/login" replace />
}

const PublicRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? <Navigate to="/product-delivery" replace /> : element
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<PublicRoute element={<Home />} />} />
            <Route path="/login" element={<PublicRoute element={<Login />} />} />
            <Route
              path="/product-delivery"
              element={<PrivateRoute element={<ProductDelivery />} />}
            />
            <Route
              path="/product-delivery/:id"
              element={<PrivateRoute element={<ProductDetail />} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App