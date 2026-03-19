import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

interface Product {
  id: number;
  title: string;
  image: string;
  tags: string[];
  price: string;
}

interface TreeNode {
  title: string;
  children?: TreeNode[];
}

const allProducts: Record<string, Product[]> = {
  'exam-analysis': [
    { id: 1, title: '2025年考试分析报告', image: 'https://picsum.photos/200/200?random=1', tags: ['考试解析', '真题'], price: '¥199' },
    { id: 2, title: '2024年考试分析汇总', image: 'https://picsum.photos/200/200?random=2', tags: ['考点梳理'], price: '¥149' }
  ],
  'knowledge': [
    { id: 3, title: '核心知识点速记手册', image: 'https://picsum.photos/200/200?random=3', tags: ['知识点', '速记'], price: '¥79' },
    { id: 4, title: '高频考点解析', image: 'https://picsum.photos/200/200?random=4', tags: ['考点总结'], price: '¥59' }
  ],
  'courses': [
    { id: 5, title: '精品课程合集', image: 'https://picsum.photos/200/200?random=5', tags: ['系统课程', '精讲'], price: '¥299' },
    { id: 6, title: '专项突破课程', image: 'https://picsum.photos/200/200?random=6', tags: ['专项训练'], price: '¥199' }
  ]
};

const examBankTree: TreeNode[] = [
  {
    title: '行测题库',
    children: [
      { title: '言语理解', children: [{ title: '逻辑填空真题' }, { title: '阅读理解真题' }] },
      { title: '数量关系', children: [{ title: '数字推理练习' }, { title: '数学运算练习' }] },
      { title: '判断推理', children: [{ title: '图形推理' }, { title: '逻辑判断' }] }
    ]
  },
  {
    title: '申论题库',
    children: [
      { title: '归纳概括', children: [{ title: '要点提炼练习' }] },
      { title: '综合分析', children: [{ title: '分析类题目' }] },
      { title: '文章写作', children: [{ title: '大作文练习' }, { title: '小作文练习' }] }
    ]
  },
  {
    title: '专业知识题库',
    children: [
      { title: '经济类', children: [{ title: '宏观经济' }, { title: '微观经济' }] },
      { title: '管理类', children: [{ title: '管理学基础' }] }
    ]
  }
];

const tabs = [
  { id: 'exam-analysis', label: '考试分析' },
  { id: 'knowledge', label: '知识点' },
  { id: 'courses', label: '课程' },
  { id: 'exam-bank', label: '题库' }
];

const TreeItem = ({ node, depth = 0, onLeafClick }: { node: TreeNode; depth?: number; onLeafClick?: () => void }) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = depth * 16 + 12;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    } else if (onLeafClick) {
      onLeafClick();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between py-2.5 border-b border-gray-50 active:opacity-70 ${
          depth === 0 ? 'font-semibold' : depth === 1 ? 'font-medium' : ''
        }`}
        style={{ paddingLeft }}
      >
        <span className={`text-sm ${
          depth === 0 ? 'text-text-primary' :
          depth === 1 ? 'text-text-secondary' :
          'text-text-tertiary'
        }`}>
          {depth > 0 && <span className="mr-1 text-gray-300">─</span>}
          {node.title}
        </span>
        {hasChildren && (
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 mr-3 ${expanded ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      {expanded && hasChildren && (
        <div>
          {node.children!.map((child, i) => (
            <TreeItem key={i} node={child} depth={depth + 1} onLeafClick={onLeafClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export const StateOwnedLearning = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'exam-analysis');
  const [searchText, setSearchText] = useState('');

  const handleProductClick = (productId: number) => {
    if (activeTab === 'exam-analysis') {
      navigate('/exam/analysis');
    } else if (activeTab === 'knowledge') {
      navigate('/knowledge/manual');
    } else if (activeTab === 'courses') {
      navigate(`/product/${productId}`);
    }
  };

  const products = allProducts[activeTab] || [];
  const filteredProducts = searchText
    ? products.filter(p => p.title.includes(searchText))
    : products;

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* 搜索区域 */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />
            </svg>
            <input
              type="text"
              placeholder="请输入搜索关键词"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 py-2 text-sm focus:outline-none bg-transparent"
            />
            {searchText && (
              <button onClick={() => setSearchText('')} className="text-gray-400 active:opacity-70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* 标签栏 */}
        <div className="px-4 mb-3">
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="px-4 pb-6">
          {activeTab === 'exam-bank' ? (
            /* 题库：树形列表展示 */
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              {examBankTree.map((node, i) => (
                <TreeItem key={i} node={node} depth={0} onLeafClick={() => navigate('/exam/1')} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            /* 其他Tab：网格卡片展示 */
            <div className="grid grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-lg overflow-hidden border border-gray-100 active:opacity-70 transition-opacity text-left"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-text-primary mb-2 leading-snug line-clamp-2">{product.title}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            ['真题', '速记', '刷题'].includes(tag)
                              ? 'bg-orange-100 text-orange-500'
                              : 'bg-blue-50 text-primary'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-bold text-red-500">{product.price}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-text-tertiary">
              <p className="text-sm">暂无相关产品</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
