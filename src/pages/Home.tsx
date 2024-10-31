import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const projects = [
    {
      title: '电子商务平台',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: '项目管理系统',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: '数据分析仪表板',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const testimonials = [
    {
      name: '张三',
      company: 'ABC科技',
      content: '他们的开发团队非常专业，交付的产品超出了我们的预期。',
    },
    {
      name: '李四',
      company: 'XYZ企业',
      content: '与他们合作是一次很棒的体验，他们真正理解我们的需求。',
    },
    {
      name: '王五',
      company: '123集团',
      content: '他们的解决方案帮助我们显著提高了生产效率。',
    },
  ];

  const values = [
    {
      title: '创新',
      description: '我们不断探索新技术，为客户提供最前沿的解决方案。',
    },
    {
      title: '质量',
      description: '我们坚持高标准，确保每个项目都达到卓越品质。',
    },
    {
      title: '合作',
      description: '我们与客户密切合作，确保最终产品完全符合他们的愿景。',
    },
    {
      title: '诚信',
      description: '我们以诚实和透明的方式开展业务，建立长期的信任关系。',
    },
  ];

  const clients = [
    {
      name: '华为',
      url: 'https://www.huawei.com',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA2FBMVEVHcEzjBBLoOiLqVDLymnXymXbtb0vlABHnJBzpRSfylnL0p4XjAxHmABLsZ0D2tZeSFxfsaEHlFhjXAA7oOyPsaEHWKiLuc0zlABHmDRbnGRnqTi3rYTvwhl7eIB7mBhTvd1DqVTPhABDjABHsZD/fABDqTy7oOCLYAA7jChPiBRLeABDnCROlAAHTAA2mAAC4AAXhABDcABDFAAnOAAygAADfABCpAAGmAALFAAqwAATGAAojGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBURDzCOAAAASHRSTlMAa8X96rxi4/////+v/7//B/s7K///EC//Hv////8W/f/m/6KoXnyF/5aCwddp1q7/UHb///+M/1dFhJI5JmIUTa6A/5njxvQkBY09AAAB/0lEQVR4AWyOhYKDMBAFXxXdk0BpUi9c6u7y//91mz2XwZmJ4BulcgVMtVbHv3h+UGFVD6Oo+p+PiYMHoBY9Pka1v/6JXPAMhC4In35IVQISDtJKI8tCXiIMm7yW+hystYEhaqXtTrPZDZluD6adfkwTa+0Bfeq7XdYHXWYADIM0htDLNVGBWKao1xsD5gUv7dSnngQ2z7XWKiGeIh2NOp1Go9NU7PtkJShJ0IfnivG43a5UhhBPJQmSiQv0VBEXs3GaBoGa+i32lECY51KYBf+azVotf2FE9+dglhZYSbEwEvDNpcwCKJWw3qwUCim2Ma+6I4q34gsoTxcc7A/zJ+WKPoisJYLMr7K51hwsj1xMTphyUbJ6uyW7Yz/FVJPWeQlPx7MrJtYNgKeUB63nmdWOPH8CLu+FZxLvZIzpnbzEeG86t8BXMSlwBXNFLJrZ4o3L7X6/n07TEwR+EUSLXy6XN27iGYRZPD3NdiVrP4rrkdls9ju8s5s4Dofr5xSuWGf4JJsfDof95duP2y3BD5L7rffaylQQQBDDsEiYoJVW8u/ofyDhypAEH9kkDH4Vojug+zxZWWjCFsRfRbgMH8MVTpZmxIUIUkdcgK9AMbdtTkwBG6Iz+yms/dCquYGWpRtgfF4FbvyxzvBGOe0HjgJDGihv0gIot5omEN2uaj8Mo1vuB+Tl9wAAAABJRU5ErkJggg==',
    },
    {
      name: 'UniStrong',
      url: 'https://www.unistrong.com',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAEP0lEQVR4AbVWA5AkSRR9P7tqzFsPz7Zt2wjH2bbN0AVOwbNt21zbNgaN6vr/pn5GRkZFzXr3RTvf13tZ1UmwOOdhbHC8fjsAAhCe/Ui0/9lYWxAgWDkQ/vJG9MZtlPS+39mIyytLsZJMBBKI5/VDI4Pf3woAQBhQdprp+JJN4vmAZ0u6M33aAgLRRda1WFC2n1w8EQIDErCNJ5sOJfEchdIIIq6GLcAMYUtDLINqzE5D6lhArptlxfif+XmIm0IEgtoQe7bVGPJTGGD4gvzifAwiJTIAJxEzLKL4kEFVTx47DPCY2x3t+cJkkAG5ZmN0NuKV41uQxqWfz/xwQgmhQQKjT1tA/CNWuQplfmPkAihKMQOiq/5VRKD4dsrSl4fPgyKJZXE0hisgqYeiWObh87q8wOns+kACbSUfMTyVHc1LFIMT4ZwfAuelD2Mdwjg7WSBefQ/hJBVDN7FJmaxESpb7hbCuQkH61fWRoolmc3s6s4tc5EoK+E3uBs1AfK/wEmkB35rvxoMFJFB427Kw0mszGYkUK21NYgh5OdgPmmYLOHYSCeBNZp8IstLBiZxIK+nDe0BK9hJZb8kuWxDBg71xmsVLRP1KBNKHl0h8p5B+PLAdeJNX6oHqoQ6TSUsEsgUkMwERWVdBgKMRBBkIM1ico9y/yZEw0ggNkcQiKpHVieOQkDW5zKq22AUvUeznlXhFIUIazdVBVUD5QhnGuJtuXFdpsh7ko1g9IKdA9mYHWdxTBFAVmJb6qjldyefqwOzR2oBC5Gml8i5D66CYtaJQW5GDYllvyXG0UqqAFYpkQVchlzOVgWlrqHhr1AIo7jliy9qaEH2180V05bfuaLrx4M2g2L+9ydLCIDdvRR7krnN2BcCuIOsEy3qHz+0CcOSWA5YXyvd/O7WrGG8/uO636w6546Qdzt27846Td/zqkn0rcwbAot7ozVHzbzqoA8DwuSsWL+8F6UZyvuqfftv2fpvq7f/QHdtePm83u+ue+2v2jGWFK/Zta6mvRBqj5nc/8eOMM3YcfPK2AwFc8Obwz/6djsrQGU+YPVYLtGyr4sBfRxHff9puF+zVDsX7Yxd+NXnJNgNrD92sqbEqADC3q/TbzOVL8uW+1Lu11FMfZ8z8y1/5AzkCuSREmDM+QAJOTSCAkbvf+3dwTXjSDkMBnLLdoEM3a/5u6tJPJiwulpmIAoPdWxr2aWuw9V77b87N7/wNMGAgLokidWzxW9oQmC996bd3dm6/6pAtD9l8gC2DDMbM73r6p8nv/DkVOUoe/l4t/lbhrj13sxTRVUJOvvhn6hcjZnQOrt92SP3A2srayrAiRyzoKkR9u3nCwu5J85YjKqMyAAHM/lADAZMzefBmEMFKocckluThABubI3cQWsnZcsE0f/Ba2QkRIkkWC3HnMPhZU815bdQRf/gd1I4NjXDhTD38buTj+/8A/eaDD9FgqwAAAABJRU5ErkJggg==',
    },
    {
      name: '物格',
      url: 'http://www.voooog.com/',
      logo: 'http://www.voooog.com/upload/img/20220930151931.png',
    },
    {
      name: '中国工商银行',
      url: 'https://www.icbc.com.cn',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAJFBMVEVHcEylASKpCCenBianBSWlASOmBSWmBCSmAiOlACKmAiOlACIkYvMHAAAAC3RSTlMA2Q0bK8ZBWbDtd9vw/mYAAAEDSURBVCiRfVJblsUgCAMRUNn/fidQb18zd/Kh9oRGiCG60JpIa/QHuo8ZwBzeX5QsjmAFUMFL7pyNiLGsi3RbebaLcw71s1rwySdrHOMhJHqyMmK0Ddq7fspXqFAU1jp2Eo5VM3A4gWRgea4gyYNzIi+FPG9VVNdd+IVGCQS7GZro1i1JXDbg2azGSlbRyZYlnwyh0BSfQMzWsABHK40ke03Tm3GSbK3Mx6zyP7lla7ySrTm3bJvze0PnKNY7JLDcRrlMkMwBlrsJX+2Tw3j+anwq6CtWcj5ZPra+H1vvUeBnTPQWoiNgngHzpTg/0lnRnMgm/44mVag5G+Xhb6qwM3bhBw06Cz/s5YyUAAAAAElFTkSuQmCC',
    },
    {
      name: '上海翊邀',
      url: 'http://shyy-iot.com/',
      logo: '',
    },
    {
      name: '优驰(武汉)科技',
      url: '',
      logo: '',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          让我们帮您的产品和团队取得成功
        </h1>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Team success"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300"
        >
          让我们谈谈 <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">案例展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">客户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Star className="text-yellow-400 h-5 w-5 mr-1" />
                <Star className="text-yellow-400 h-5 w-5 mr-1" />
                <Star className="text-yellow-400 h-5 w-5 mr-1" />
                <Star className="text-yellow-400 h-5 w-5 mr-1" />
                <Star className="text-yellow-400 h-5 w-5 mr-1" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">
                {testimonial.name}
              </p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的理念</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">服务的客户</h2> */}
        <Slider {...sliderSettings}>
          {clients.map((client, index) => (
            <div key={index} className="px-2">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 h-32"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="text-gray-800 font-semibold text-sm text-center">
                  {client.name}
                </span>
                <ExternalLink className="mt-1 h-4 w-4 text-gray-500" />
              </a>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
