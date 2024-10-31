import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, ArrowLeft } from 'lucide-react'

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = React.useState<BlogPost | null>(null)

  React.useEffect(() => {
    // 在实际应用中，这里应该从API获取博客文章数据
    // 这里我们模拟从一个固定的数组中获取数据
    const posts: BlogPost[] = [
      {
        id: '1',
        title: '新技术趋势：2024年Web开发展望',
        date: '2024-03-01',
        content: `
# 新技术趋势：2024年Web开发展望

2024年，Web开发领域继续快速发展，带来了许多令人兴奋的新趋势和技术创新。本文将探讨其中一些最重要的发展方向。

## 1. WebAssembly的广泛应用

WebAssembly (Wasm) 在2024年得到了更广泛的应用。它允许开发者使用多种编程语言编写高性能的Web应用，使得复杂的桌面应用能够无缝地在Web上运行。

## 2. 边缘计算和分布式系统

随着5G技术的普及，边缘计算在Web开发中扮演着越来越重要的角色。开发者正在探索如何利用分布式系统来提高应用性能和用户体验。

## 3. AI驱动的开发工具

人工智能正在改变开发者的工作方式。AI驱动的代码补全、bug检测和自动化测试工具大大提高了开发效率。

## 4. 无头CMS和JAMstack架构

无头CMS（Headless CMS）和JAMstack架构继续受到欢迎，为开发者提供了更大的灵活性和更好的性能优化机会。

## 5. 增强现实（AR）和虚拟现实（VR）在Web中的应用

随着WebXR API的成熟，我们看到了更多将AR和VR体验集成到Web应用中的创新案例。

这些趋势正在塑造Web开发的未来，为开发者和用户alike带来了新的可能性和挑战。持续学习和适应这些新技术将是2024年Web开发者成功的关键。
        `
      },
      {
        id: '2',
        title: '移动应用开发：原生 vs 跨平台',
        date: '2024-02-15',
        content: `
# 移动应用开发：原生 vs 跨平台

在移动应用开发领域，开发者经常面临选择原生开发还是跨平台开发的决策。本文将深入比较这两种方法的优缺点，帮助您为项目做出最佳选择。

## 原生开发

原生开发指使用平台特定的编程语言和工具开发应用，如为iOS使用Swift，为Android使用Kotlin。

### 优点：
1. 最佳性能
2. 完整的平台特性访问
3. 流畅的用户体验

### 缺点：
1. 开发成本高
2. 需要维护多个代码库
3. 学习曲线陡峭

## 跨平台开发

跨平台开发使用单一代码库创建可在多个平台上运行的应用，常见工具包括React Native和Flutter。

### 优点：
1. 开发效率高
2. 代码复用
3. 维护成本低

### 缺点：
1. 性能可能略逊于原生应用
2. 平台特定功能的实现可能受限
3. 依赖第三方框架的更新

## 如何选择？

选择取决于多个因素：

1. 项目预算和时间线
2. 应用复杂度
3. 目标用户群
4. 团队技能集

对于需要高性能和深度平台集成的应用，原生开发可能是更好的选择。而对于预算有限、需要快速上市的项目，跨平台开发可能更有优势。

无论选择哪种方法，重要的是要根据项目的具体需求和约束做出明智的决定。
        `
      },
      {
        id: '3',
        title: '提高代码质量的10个最佳实践',
        date: '2024-01-30',
        content: `
# 提高代码质量的10个最佳实践

代码质量直接影响到软件的可维护性、可读性和整体性能。以下是10个可以立即提高代码质量的最佳实践：

1. **遵循一致的编码规范**
   - 使用统一的命名约定
   - 保持一致的缩进和格式化

2. **编写清晰的注释和文档**
   - 解释复杂的逻辑
   - 提供API文档

3. **进行代码审查**
   - 实施同行评审
   - 使用自动化工具进行静态代码分析

4. **编写单元测试**
   - 覆盖关键功能
   - 持续集成中包含自动化测试

5. **遵循SOLID原则**
   - 单一职责原则
   - 开闭原则
   - 里氏替换原则
   - 接口隔离原则
   - 依赖倒置原则

6. **避免代码重复**
   - 使用DRY（Don't Repeat Yourself）原则
   - 提取共用功能到可重用的函数或类中

7. **保持函数和类的简洁**
   - 遵循单一职责原则
   - 限制函数的参数数量

8. **使用有意义的变量和函数名**
   - 选择描述性的名称
   - 避免使用缩写（除非是广为人知的）

9. **错误处理和日志记录**
   - 实施全面的错误处理策略
   - 记录关键操作和错误信息

10. **持续重构**
    - 定期审查和改进现有代码
    - 消除技术债务

通过遵循这些最佳实践，开发团队可以显著提高代码质量，减少bug，并提高整体开发效率。记住，编写高质量的代码是一个持续的过程，需要团队的共同努力和承诺。
        `
      }
    ]
    const foundPost = posts.find(p => p.id === id)
    setPost(foundPost || null)
  }, [id])

  if (!post) {
    return <div>加载中...</div>
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回博客列表
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 mb-6">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{post.date}</span>
      </div>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogPost