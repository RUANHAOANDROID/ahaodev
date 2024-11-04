import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Code2,
  LogOut,
  Package,
  Globe,
  Briefcase,
  Newspaper,
  Mail,
  User,
  Menu,
  X,
} from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const username = localStorage.getItem('username');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <Code2 className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">ahaodev</span>
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/services" icon={<Globe className="h-5 w-5" />} text="服务" />
            <NavLink to="/portfolio" icon={<Briefcase className="h-5 w-5" />} text="案例" />
            <NavLink to="/blog" icon={<Newspaper className="h-5 w-5" />} text="博客" />
            <NavLink to="/contact" icon={<Mail className="h-5 w-5" />} text="联系" />
            {isAuthenticated && (
              <NavLink to="/product-delivery" icon={<Package className="h-5 w-5" />} text="交付" />
            )}
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span>退出登录</span>
                </button>
                <span className="text-gray-700">{username}</span>
              </>
            ) : (
              <NavLink to="/login" icon={<User className="h-5 w-5" />} text="登录" />
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/services" icon={<Globe className="h-5 w-5" />} text="服务" />
            <MobileNavLink to="/portfolio" icon={<Briefcase className="h-5 w-5" />} text="案例" />
            <MobileNavLink to="/blog" icon={<Newspaper className="h-5 w-5" />} text="博客" />
            <MobileNavLink to="/contact" icon={<Mail className="h-5 w-5" />} text="联系" />
            {isAuthenticated && (
              <MobileNavLink to="/product-delivery" icon={<Package className="h-5 w-5" />} text="交付" />
            )}
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span>退出登录</span>
                </button>
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">{username}</span>
              </>
            ) : (
              <MobileNavLink to="/login" icon={<User className="h-5 w-5" />} text="登录" />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{
  to: string;
  icon?: React.ReactNode;
  text: string;
}> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span>{text}</span>
  </Link>
);

const MobileNavLink: React.FC<{
  to: string;
  icon?: React.ReactNode;
  text: string;
}> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span>{text}</span>
  </Link>
);

export default Navbar;