import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

const knowledgeContent = `
国央企知识手册 2025

一、国央企基础知识
国有企业是指国家对其资本拥有所有权或者控制权的企业。
中央企业是指由国务院国资委监督管理的国有企业。

二、核心竞争力构建
1. 专业技能提升
   - 岗位所需核心技能
   - 行业相关证书考取
   - 实际项目经验积累

2. 综合素质培养
   - 沟通协作能力
   - 组织管理能力
   - 创新思维能力

三、面试技巧
1. 结构化面试准备
2. 无领导小组讨论
3. 案例分析方法

四、常见问题解答
Q：国央企和私企有何区别？
A：国央企稳定性更高，福利待遇完善...

（以下内容需开通VIP查看）
`;

const vipBenefits = [
  { icon: '📚', text: '行业深度解析' },
  { icon: '🔑', text: '内推码免费解锁' },
  { icon: '🎯', text: '精准岗位匹配' }
];

export const KnowledgeManual = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* Knowledge Section */}
        <div className="relative px-4 py-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-base font-semibold text-text-primary mb-3">知识手册内容</h3>
            <div className="relative">
              {/* Content - show 10% */}
              <div
                className="text-sm text-text-secondary leading-relaxed whitespace-pre-line"
                style={{ maxHeight: '180px', overflow: 'hidden' }}
              >
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
              <p className="text-xs text-text-tertiary mt-1">解锁完整知识手册，系统提升能力</p>
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
