import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

interface Version {
  version: string;
  date: string;
  notes: string;
  downloadUrl: string;
}

interface Product {
  id: string;
  name: string;
  versions: Version[];
}

const products: Product[] = [
  {
    id: '1',
    name: '项目管理系统',
    versions: [
      {
        version: 'v2.1.0',
        date: '2023-03-15',
        notes: '新增甘特图功能，优化任务分配流程',
        downloadUrl: 'https://example.com/download/1/v2.1.0',
      },
      {
        version: 'v2.0.1',
        date: '2023-02-20',
        notes: '修复了一些bug，提高了系统稳定性',
        downloadUrl: 'https://example.com/download/1/v2.0.1',
      },
      {
        version: 'v2.0.0',
        date: '2023-01-10',
        notes: '全新的用户界面，提升用户体验',
        downloadUrl: 'https://example.com/download/1/v2.0.0',
      },
    ],
  },
  // ... 其他产品数据 ...
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>产品不存在</div>;
  }

  const handleShare = (version: Version) => {
    const shareText = `查看 ${product.name} ${version.version} 的下载链接: ${version.downloadUrl}`;
    if (navigator.share) {
      navigator
        .share({
          title: `分享 ${product.name} ${version.version} 下载链接`,
          text: shareText,
          url: version.downloadUrl,
        })
        .catch((error) => console.log('分享失败', error));
    } else {
      navigator.clipboard.writeText(shareText).then(
        () => {
          alert('下载链接已复制到剪贴板');
        },
        (err) => {
          console.error('无法复制文本: ', err);
        }
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/product-delivery"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回产品列表
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {product.name} - 版本历史
      </h1>
      <div className="space-y-8">
        {product.versions.map((version, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {version.version}
              </h2>
              <span className="text-sm text-gray-500">{version.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{version.notes}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={version.downloadUrl}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                下载
              </a>

              <button
                onClick={() => handleShare(version)}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
