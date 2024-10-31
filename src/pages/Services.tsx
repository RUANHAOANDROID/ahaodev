import React from 'react'
import { Globe, Smartphone, Monitor, Cpu, Server } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    { title: 'Web开发', icon: Globe, description: '我们提供全栈Web应用开发服务，包括前端和后端开发。' },
    { title: '移动开发', icon: Smartphone, description: '为iOS和Android平台开发高性能、用户友好的移动应用。' },
    { title: '桌面程序开发', icon: Monitor, description: '为Windows、macOS和Linux开发强大的桌面应用程序。' },
    { title: '嵌入式系统开发', icon: Cpu, description: '为各种嵌入式设备开发定制软件，包括物联网设备和工业控制系统。' },
    { title: '边缘设备网关', icon: Server, description: '设计和实现边缘计算解决方案，优化数据处理和传输效率。' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">我们的服务</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <service.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services