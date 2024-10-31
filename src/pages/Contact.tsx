import React, { useState } from 'react';
import { Send, Phone, QrCode } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('提交的需求:', formData);
    alert('感谢您提交需求！我们会尽快与您联系。');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      description: '',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">直接联系我们</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-lg font-semibold">客服热线：19921969586</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              扫描二维码添加客服微信
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
              <QrCode className="h-32 w-32 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              扫描上方二维码，添加客服微信
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">联系我们</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                公司名称
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                项目类型
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">请选择项目类型</option>
                <option value="web">Web应用</option>
                <option value="mobile">移动应用</option>
                <option value="desktop">桌面应用</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                项目描述
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              >
                <Send className="mr-2 h-4 w-4" />
                提交需求
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
