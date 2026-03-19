import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

const user = {
  avatar: 'https://picsum.photos/100/100?random=88',
  nickname: '\u7528\u6237\u6635\u79f0',
  vipStatus: true,
  validUntil: '2024-12-31'
};

const vipProducts = [
  { id: 1, name: '\u6708\u5361\u4f1a\u5458', desc: '\u5f00\u901a\u540e\u5728\u4f1a\u5458\u65f6\u95f4\u5185\u6240\u6709\u529f\u80fd\u514d\u8d39\u4f7f\u7528', price: '\uffe599/\u6708', original: '\uffe5199', tag: 'HOT' },
  { id: 2, name: '\u5b63\u5361\u4f1a\u5458', desc: '\u5f00\u901a\u540e\u5728\u4f1a\u5458\u65f6\u95f4\u5185\u6240\u6709\u529f\u80fd\u514d\u8d39\u4f7f\u7528', price: '\uffe5249/\u5b63', original: '\uffe5499', tag: '\u4f18\u60e0' },
  { id: 3, name: '\u5e74\u5361\u4f1a\u5458', desc: '\u5f00\u901a\u540e\u5728\u4f1a\u5458\u65f6\u95f4\u5185\u6240\u6709\u529f\u80fd\u514d\u8d39\u4f7f\u7528', price: '\uffe5699/\u5e74', original: '\uffe51299', tag: '\u6700\u5212\u7b97' }
];

const privileges = [
  { icon: '\ud83d\udcca', text: '\u89e3\u9501\u5168\u884c\u4e1a\u8003\u60c5\u6df1\u5ea6\u89e3\u6790' },
  { icon: '\ud83d\udd25', text: '\u70ed\u95e8\u8d5b\u9053\u8d8b\u52bf\u4e00\u624b\u638c\u63e1' },
  { icon: '\ud83d\udd11', text: '\u5185\u63a8\u7801\u514d\u8d39\u89e3\u9501' },
  { icon: '\ud83c\udfaf', text: '\u7cbe\u51c6\u5c97\u4f4d\u5339\u914d' },
  { icon: '\ud83d\udcda', text: 'VIP\u4e13\u4eab\u8bfe\u7a0b' },
  { icon: '\ud83c\udfa4', text: '\u4e13\u5c5e\u9762\u8bd5\u8f85\u5bfc' },
  { icon: '\ud83d\udcc8', text: '\u5b9a\u5236\u804c\u4e1a\u89c4\u5212' },
  { icon: '\ud83e\udd1d', text: '\u884c\u4e1a\u5185\u63a8\u8d44\u6e90' },
  { icon: '\u2728', text: '\u72ec\u5bb6\u6c42\u804c\u673a\u4f1a' }
];

export const Membership = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedProduct, setSelectedProduct] = useState(0);
  const [showRedeem, setShowRedeem] = useState(false);
  const [redeemCode, setRedeemCode] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handlePurchase = () => {
    if (!agreed) return;
    navigate('/purchase');
  };

  return (
    <div className="min-h-screen bg-bg pb-32">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* Member Info */}
        <div className="mx-4 mt-3 rounded-xl p-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)' }}>
          <img src={user.avatar} alt="avatar" className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover flex-shrink-0"
            onError={e => { e.currentTarget.src = 'https://picsum.photos/100/100?random=88'; }} />
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">{user.nickname}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 bg-yellow-400 text-gray-900 rounded font-bold">VIP</span>
              <span className="text-xs text-yellow-300">有效期至 {user.validUntil}</span>
            </div>
          </div>
          <button onClick={() => setShowRedeem(true)} className="flex-shrink-0 px-3 py-1.5 border border-yellow-400 text-yellow-400 text-xs rounded-lg active:opacity-70">
            兑换
          </button>
        </div>

        {/* VIP Products */}
        <div className="mt-4 px-4">
          <h3 className="text-sm font-semibold text-text-primary mb-3">选择套餐</h3>
          <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {vipProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(index)}
                className={`flex-shrink-0 w-36 rounded-xl p-3 text-left border-2 transition-all ${
                  selectedProduct === index ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-text-tertiary">暂未开通</span>
                  {product.tag && <span className="text-xs px-1.5 py-0.5 bg-red-500 text-white rounded font-medium">{product.tag}</span>}
                </div>
                <p className="text-sm font-bold text-text-primary mb-1">{product.name}</p>
                <p className="text-xs text-text-tertiary leading-snug mb-2">{product.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-base font-bold ${selectedProduct === index ? 'text-primary' : 'text-text-primary'}`}>{product.price}</span>
                  <span className="text-xs text-text-tertiary line-through">{product.original}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Privileges */}
        <div className="mt-4 mx-4 bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="text-sm font-semibold text-text-primary mb-3">VIP专属特权</h3>
          <div className="grid grid-cols-3 gap-4">
            {privileges.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1">
                <span className="text-2xl">{p.icon}</span>
                <p className="text-xs text-text-secondary leading-tight">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="mt-4 mx-4 bg-white rounded-xl p-4 border border-gray-100 mb-4">
          <h3 className="text-sm font-semibold text-text-primary mb-2">会员规则说明</h3>
          <ul className="space-y-1.5">
            {[
              '会员权益仅限本账号使用，不可转让。',
              '会员有效期自购买之日起计算，到期后自动失效。',
              '连续包月会员将在到期前24小时自动续费。',
              '如需取消自动续费，请在到期前至少24小时操作。',
              '会员费用一经支付，概不退还。'
            ].map((rule, i) => (
              <li key={i} className="text-xs text-text-tertiary leading-relaxed">{i + 1}. {rule}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 pt-3 pb-5">
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => setAgreed(a => !a)}
              className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                agreed ? 'bg-primary border-primary' : 'border-gray-300'
              }`}
            >
              {agreed && (<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>)}
            </button>
            <p className="text-xs text-text-tertiary">
              已阅读并同意<span className="text-primary">《会员购买协议》</span><span className="text-primary">《连续包月购买协议》</span>
            </p>
          </div>
          <button
            onClick={handlePurchase}
            className={`w-full py-3 rounded-xl text-sm font-semibold text-white transition-all ${agreed ? 'active:opacity-70' : 'opacity-50'}`}
            style={{ backgroundColor: '#1677FF' }}
          >
            立即开通 {vipProducts[selectedProduct]?.price}
          </button>
        </div>
      </div>

      {/* Redeem Modal */}
      {showRedeem && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowRedeem(false)} />
          <div className="fixed left-4 right-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 z-50 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-text-primary">兑换限时会员</h3>
              <button onClick={() => setShowRedeem(false)} className="text-text-tertiary active:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="请输入兑换码"
              value={redeemCode}
              onChange={e => setRedeemCode(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary mb-4"
            />
            <button
              onClick={() => { alert('\u5151\u6362\u6210\u529f'); setShowRedeem(false); }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white active:opacity-70"
              style={{ backgroundColor: '#1677FF' }}
            >
              立即兑换
            </button>
          </div>
        </>
      )}
    </div>
  );
};
