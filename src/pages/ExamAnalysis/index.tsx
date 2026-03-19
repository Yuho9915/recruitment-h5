import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

const knowledgeContent = `
国央企考情分析 2025

一、考试概况
2025年国央企招聘规模持续扩大，预计招聘人数较去年增长15%。
重点行业包括：能源、金融、通信、交通运输等领域。

二、考试科目
1. 行测（行政职业能力测试）
   - 言语理解与表达
   - 数量关系
   - 判断推理
   - 资料分析
   - 常识判断

2. 申论
   - 归纳概括
   - 综合分析
   - 提出对策
   - 文章写作

三、重点企业分析
中央企业：国家电网、中石油、中石化、中国移动...
地方国企：各省市重点国有企业...

四、备考建议
1. 提前3-6个月开始系统备考
2. 重点突破行测数量关系和资料分析
3. 申论注重积累热点素材
4. 关注目标企业的招聘动态

（以下内容需开通VIP查看）
`;

const vipBenefits = [
  { icon: '📊', text: '行业深度解析' },
  { icon: '🔑', text: '内推码免费解锁' },
  { icon: '🎯', text: '精准岗位匹配' }
];

export const ExamAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* Knowledge Section */}
        <div className="relative px-4 py-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-base font-semibold text-text-primary mb-3">考情分析内容</h3>
            <div className="relative">
              {/* Content - show 10% */}
              <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line" style={{ maxHeight: '180px', overflow: 'hidden' }}>
                {knowledgeContent}
              </div>

              {/* Blur Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: '120px',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))'
                }}
              />
            </div>
          </div>

          {/* VIP Modal */}
          <div className="mt-4 bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
            {/* Title */}
            <div className="text-center mb-4">
              <p className="text-base font-semibold text-text-primary">开通VIP即可查看全部内容</p>
              <p className="text-xs text-text-tertiary mt-1">解锁完整考情分析，助力备考</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-5">
              {vipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 px-3 py-2 bg-blue-50 rounded-lg">
                  <span className="text-2xl">{benefit.icon}</span>
                  <p className="text-sm font-medium text-text-primary">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/purchase')}
                className="flex-1 py-3 border border-primary text-primary text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
              >
                直接购买
              </button>
              <button
                onClick={() => navigate('/vip')}
                className="flex-1 py-3 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
              >
                开通会员
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
