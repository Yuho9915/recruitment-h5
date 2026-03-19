import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const referralData = {
  currentStage: 1,
  stages: [
    { status: '\u5df2\u5b8c\u6210', reward: '7\u5929VIP', required: 3 },
    { status: '\u8fdb\u884c\u4e2d', reward: '15\u5929VIP', required: 5 },
    { status: '\u672a\u5f00\u59cb', reward: '30\u5929VIP', required: 7 },
  ],
  invitedUsers: [
    { avatar: 'https://picsum.photos/40/40?random=11', status: '\u5df2\u9080\u8bf7' },
    { avatar: 'https://picsum.photos/40/40?random=12', status: '\u5df2\u9080\u8bf7' },
    { avatar: '', status: '\u672a\u9080\u8bf7' },
    { avatar: '', status: '\u672a\u9080\u8bf7' },
    { avatar: '', status: '\u672a\u9080\u8bf7' },
  ],
};

const rules = [
  '\u6bcf\u6210\u529f\u9080\u8bf7\u4e00\u4f4d\u65b0\u7528\u6237\u6ce8\u518c\uff0c\u8ba1\u5165\u9080\u8bf7\u4eba\u6570\u3002',
  '\u9080\u8bf7\u4eba\u6570\u8fbe\u52303\u4eba\uff0c\u53ef\u9886\u53967\u5929\u9650\u65f6VIP\u3002',
  '\u9080\u8bf7\u4eba\u6570\u8fbe\u52305\u4eba\uff0c\u53ef\u9886\u539615\u5929\u9650\u65f6VIP\u3002',
  '\u9080\u8bf7\u4eba\u6570\u8fbe\u52307\u4eba\uff0c\u53ef\u9886\u539630\u5929\u9650\u65f6VIP\u3002',
  '\u6bcf\u4e2a\u624b\u673a\u53f7\u4ec5\u53ef\u88ab\u9080\u8bf7\u4e00\u6b21\uff0c\u91cd\u590d\u9080\u8bf7\u65e0\u6548\u3002',
  '\u6d3b\u52a8\u89e3\u91ca\u6743\u5f52\u672c\u5e73\u53f0\u6240\u6709\uff0c\u5982\u6709\u75a2\u7591\u8bf7\u8054\u7cfb\u5ba2\u670d\u3002',
];

export const ReferralGrowth = () => {
  const navigate = useNavigate();
  const [showRules, setShowRules] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const currentStageIdx = referralData.currentStage;
  const currentStage = referralData.stages[currentStageIdx];
  const invitedCount = referralData.invitedUsers.filter(u => u.status === '\u5df2\u9080\u8bf7').length;

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center px-4" style={{ height: '44px' }}>
            <button onClick={() => navigate(-1)} className="active:opacity-70 mr-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex-1 text-center text-base font-semibold text-text-primary">邀请好友</span>
            <div className="w-6" />
          </div>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* User Info Card */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
            <img src="https://picsum.photos/48/48?random=99" alt="avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text-primary">用户昵称</p>
              <span className="text-xs px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full border border-yellow-200">购买会员</span>
            </div>
            <button
              onClick={() => setShowRules(true)}
              className="px-3 py-1.5 text-xs text-text-secondary border border-gray-200 rounded-lg active:opacity-70"
            >
              规则
            </button>
          </div>

          {/* Progress Section */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            {/* Progress Bar */}
            <div className="flex justify-center mb-6">
              <div className="flex items-start">
                {referralData.stages.map((stage, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        i < currentStageIdx ? 'bg-gray-300 text-white' :
                        i === currentStageIdx ? 'bg-primary text-white' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {i < currentStageIdx ? 'V' : i + 1}
                      </div>
                      <span className={`text-xs mt-1 whitespace-nowrap ${
                        i < currentStageIdx ? 'text-gray-400' :
                        i === currentStageIdx ? 'text-primary font-medium' :
                        'text-gray-300'
                      }`}>{stage.status}</span>
                    </div>
                    {i < referralData.stages.length - 1 && (
                      <div className={`w-16 h-1 mx-2 mt-3 rounded-full flex-shrink-0 ${
                        i < currentStageIdx ? 'bg-gray-300' : 'bg-gray-100'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Cards */}
            <div className="flex gap-2 mb-5">
              {referralData.stages.map((stage, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-xl p-3 text-center border-2 transition-all ${
                    i < currentStageIdx ? 'border-gray-200 bg-gray-50' :
                    i === currentStageIdx ? 'border-primary bg-blue-50 scale-105' :
                    'border-gray-100 bg-gray-50 opacity-60'
                  }`}
                >
                  <p className={`text-xs font-semibold mb-1 ${
                    i === currentStageIdx ? 'text-primary' : 'text-text-tertiary'
                  }`}>{stage.reward}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${
                    i === currentStageIdx ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>VIP</span>
                  <p className={`text-xs mt-1 ${
                    i < currentStageIdx ? 'text-gray-400' :
                    i === currentStageIdx ? 'text-primary' : 'text-gray-300'
                  }`}>{stage.status}</p>
                </div>
              ))}
            </div>

            {/* Invite Grid */}
            <p className="text-xs text-text-tertiary mb-3 text-center">当前阶段需邀请 {currentStage.required} 人</p>
            <div className="flex flex-wrap justify-center gap-4">
              {referralData.invitedUsers.map((user, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  {user.avatar ? (
                    <img src={user.avatar} alt="user" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4a4 4 0 100 8 4 4 0 000-8zM6 20v-1a6 6 0 1112 0v1" />
                      </svg>
                    </div>
                  )}
                  <span className={`text-xs ${
                    user.status === '\u5df2\u9080\u8bf7' ? 'text-primary' : 'text-gray-300'
                  }`}>{user.status}</span>
                </div>
              ))}
            </div>

            {/* Invite Action */}
            <div className="mt-5">
              <p className="text-center text-sm text-text-secondary mb-3">
                已邀请 <span className="text-primary font-bold">{invitedCount}</span>/{currentStage.required} 人
              </p>
              <button
                onClick={() => setShowInvite(true)}
                className="w-full py-3 rounded-2xl text-base font-semibold text-white active:opacity-80 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #4A90E2, #1677FF)' }}
              >
                立即邀请好友
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInvite && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowInvite(false)} />
          <div className="fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl z-50 max-w-sm mx-auto pb-10">
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
              <h3 className="text-base font-semibold text-text-primary">保存你的邀请码</h3>
              <button onClick={() => setShowInvite(false)} className="text-text-tertiary active:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center py-5">
              <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://example.com/invite/USER123"
                  alt="\u9080\u8bf7\u4e8c\u7ef4\u7801"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm text-text-secondary text-center leading-relaxed">
                将邀请码发送给朋友，扫码下载APP并注册，即视为邀请成功
              </p>
            </div>
          </div>
        </>
      )}

      {/* Rules Modal */}
      {showRules && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowRules(false)} />
          <div className="fixed left-4 right-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl z-50 max-w-sm mx-auto overflow-hidden" style={{ maxHeight: '70vh' }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-text-primary">活动规则</h3>
              <button onClick={() => setShowRules(false)} className="text-text-tertiary active:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-4 overflow-y-auto" style={{ maxHeight: 'calc(70vh - 60px)' }}>
              <ol className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed">{i + 1}. {rule}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
