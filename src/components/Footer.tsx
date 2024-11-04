import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Globe, Newspaper, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">链接</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/RUANHAOANDROID"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <Link to="/blog" className="hover:text-blue-400">
                <Newspaper className="h-6 w-6" />
              </Link>
              <Link to="/services" className="hover:text-blue-400">
                <Globe className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <p>&copy; 2024 ahaodev.com. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <Link to="/contact" className="hover:text-blue-400 flex items-center justify-end">
              <Phone className="h-5 w-5 mr-2" />
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;