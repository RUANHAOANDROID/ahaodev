import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Info, Share2, FileText, Settings, QrCode } from 'lucide-react';

const products = [
  {
    id: '1',
    name: '项目管理系统',
    version: 'v2.1.0',
    date: '2023-03-15',
    notes: '新增甘特图功能，优化任务分配流程',
    downloadUrl: 'https://example.com/download/1',
  },
  {
    id: '2',
    name: '电子商务平台',
    version: 'v3.5.2',
    date: '2023-02-28',
    notes: '集成新支付网关，提升结账流程体验',
    downloadUrl: 'https://example.com/download/2',
  },
  {
    id: '3',
    name: '数据分析工具',
    version: 'v1.8.0',
    date: '2023-01-10',
    notes: '添加自定义报表功能，优化数据可视化',
    downloadUrl: 'https://example.com/download/3',
  },
];

const ShareModal: React.FC<{
  url: string;
  onClose: () => void;
}> = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">分享下载链接</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <QrCode className="w-48 h-48" />
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">下载链接：</p>
          <div className="flex">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 p-2 border rounded-l text-sm bg-gray-50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(url);
                alert('链接已复制到剪贴板');
              }}
              className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
            >
              复制
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDelivery: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [shareModalUrl, setShareModalUrl] = useState<string | null>(null);

  const handleShare = (product: (typeof products)[0]) => {
    setShareModalUrl(product.downloadUrl);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">产品交付</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                产品名称
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                最新版本
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                发布日期
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative group">
                  <span
                    className="cursor-help border-b border-dotted border-blue-500 text-blue-600"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {product.version}
                  </span>
                  {hoveredProduct === product.id && (
                    <div className="absolute z-10 w-64 p-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-lg left-0 bottom-full mb-2">
                      {product.notes}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    <Download className="h-5 w-5 inline-block mr-1" /> 软件包
                  </button>
                  <Link
                    to={`/product-delivery/${product.id}`}
                    className="text-purple-600 hover:text-purple-900 mr-4"
                  >
                    <Info className="h-5 w-5 inline-block mr-1" /> 版本历史
                  </Link>
                  <button
                    onClick={() => handleShare(product)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Share2 className="h-5 w-5 inline-block mr-1" /> 分享
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {shareModalUrl && (
        <ShareModal
          url={shareModalUrl}
          onClose={() => setShareModalUrl(null)}
        />
      )}
    </div>
  );
};

export default ProductDelivery;