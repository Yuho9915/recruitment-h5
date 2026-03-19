import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

const product = {
  image: 'https://picsum.photos/400/300?random=20',
  name: '高效编程课程',
  tags: ['推荐课程'],
  price: '￥199',
  originalPrice: '￥399',
  description: '本课程将帮助你掌握高效的编程技巧，提升工作效率，适合各个阶段的开发者。',
  detailsImage: 'https://picsum.photos/400/300?random=21',
  objectives: [
    '掌握核心编程思想与方法论',
    '学习实战项目开发技巧',
    '提升代码质量与工程规范',
    '获得行业认可的技能证书'
  ],
  highlights: [
    { icon: '🎯', title: '精准定向', desc: '针对国央企招聘需求精心设计' },
    { icon: '👨‍🏫', title: '名师授课', desc: '业内资深专家亲授核心技能' },
    { icon: '📱', title: '随时学习', desc: '支持手机、平板多端同步学习' },
    { icon: '🏆', title: '保障通过', desc: '不通过可申请全额退款' }
  ]
};

export const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg pb-28">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* Product Main Image */}
        <div className="w-full bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
            style={{ maxHeight: '220px' }}
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="220"%3E%3Crect fill="%23EEF2FF" width="400" height="220"/%3E%3C/svg%3E';
            }}
          />
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Product Info Section */}
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-2">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-primary">
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="text-lg font-bold text-text-primary mb-3">{product.name}</h1>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-red-500">{product.price}</span>
              <span className="text-sm text-text-tertiary line-through">{product.originalPrice}</span>
            </div>
          </div>

          {/* Course Description Section */}
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <h3 className="text-sm font-semibold text-text-primary mb-3">课程简介</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{product.description}</p>

            {/* Details Image */}
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src={product.detailsImage}
                alt="课程详情"
                className="w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23F3F4F6" width="400" height="200"/%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Learning Objectives */}
            <h4 className="text-sm font-semibold text-text-primary mb-2">学习目标</h4>
            <ul className="space-y-2">
              {product.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-text-secondary">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Purchase Button */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-4">
          <button
            onClick={() => navigate('/course/1')}
            className="w-full text-white font-semibold active:opacity-70 transition-opacity"
            style={{ height: '48px', backgroundColor: '#1677FF', fontSize: '16px', borderRadius: '8px' }}
          >
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
};
