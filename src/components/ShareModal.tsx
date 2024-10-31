import React from 'react';
import { X, Link as LinkIcon } from 'lucide-react';
import QRCode from 'qrcode.react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, url }) => {
  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        alert('链接已复制到剪贴板');
      },
      (err) => {
        console.error('无法复制链接: ', err);
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <QRCode value={url} size={200} level="H" />
          </div>
          
          <div className="w-full p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <div className="truncate flex-1 mr-2">
              <p className="text-sm text-gray-600 truncate">{url}</p>
            </div>
            <button
              onClick={handleCopyLink}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              复制
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;