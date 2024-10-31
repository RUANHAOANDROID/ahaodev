import React from 'react'
import { ExternalLink } from 'lucide-react'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: '电子商务平台',
      description: '为中小企业开发的全功能电子商务解决方案，包括库存管理、订单处理和客户关系管理。',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#'
    },
    {
      title: '项目管理系统',
      description: '为大型企业定制的项目管理工具，支持任务分配、进度跟踪和资源管理。',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#'
    },
    {
      title: '数据分析仪表板',
      description: '为金融行业开发的实时数据可视化工具，支持复杂的数据分析和报告生成。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#'
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">作品展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                查看详情 <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio