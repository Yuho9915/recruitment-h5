import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Order {
  orderId: string;
  productImage: string;
  productName: string;
  productTag: string;
  price: string;
  paymentStatus: '\u5f85\u4ed8\u6b3e' | '\u5df2\u8d2d\u4e70' | '\u5df2\u53d6\u6d88';
}

const allOrders: Order[] = [
  { orderId: '#123456789', productImage: 'https://picsum.photos/80/80?random=401', productName: '\u6708\u5361\u4f1a\u5458', productTag: 'VIP', price: '\uffe599', paymentStatus: '\u5f85\u4ed8\u6b3e' },
  { orderId: '#987654321', productImage: 'https://picsum.photos/80/80?random=402', productName: 'VIP\u8bfe\u7a0b', productTag: '\u8bfe\u7a0b', price: '\uffe5199', paymentStatus: '\u5f85\u4ed8\u6b3e' },
  { orderId: '#112233445', productImage: 'https://picsum.photos/80/80?random=403', productName: '\u5e74\u5361\u4f1a\u5458', productTag: 'VIP', price: '\uffe5699', paymentStatus: '\u5df2\u8d2d\u4e70' },
  { orderId: '#556677889', productImage: 'https://picsum.photos/80/80?random=404', productName: '\u8003\u60c5\u5206\u6790\u5305', productTag: '\u8bfe\u7a0b', price: '\uffe599', paymentStatus: '\u5df2\u53d6\u6d88' },
];

const tabs = [
  { id: 'all', label: '\u5168\u90e8' },
  { id: 'pending', label: '\u5f85\u4ed8\u6b3e' },
  { id: 'purchased', label: '\u5df2\u8d2d\u4e70' },
];

const statusStyle: Record<string, string> = {
  '\u5f85\u4ed8\u6b3e': 'text-orange-500',
  '\u5df2\u8d2d\u4e70': 'text-green-600',
  '\u5df2\u53d6\u6d88': 'text-gray-400',
};

const OrderCard = ({ order, onCancel }: { order: Order; onCancel: (id: string) => void }) => {
  const navigate = useNavigate();
  const isPending = order.paymentStatus === '\u5f85\u4ed8\u6b3e';

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-50">
        <span className="text-xs text-text-tertiary">订单编号 {order.orderId}</span>
        <span className={`text-xs font-medium ${statusStyle[order.paymentStatus]}`}>{order.paymentStatus}</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3">
        <img
          src={order.productImage}
          alt={order.productName}
          className="w-16 h-16 rounded-lg object-cover bg-gray-100 flex-shrink-0"
          onError={e => { e.currentTarget.src = 'https://picsum.photos/80/80?random=1'; }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-primary mb-1">{order.productName}</p>
          <span className="text-xs px-2 py-0.5 bg-blue-50 text-primary rounded">{order.productTag}</span>
        </div>
        <p className="text-base font-bold text-red-500 flex-shrink-0">{order.price}</p>
      </div>
      {isPending && (
        <div className="flex items-center justify-end gap-2 px-4 py-2 border-t border-gray-50">
          <button
            onClick={() => onCancel(order.orderId)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary bg-gray-100 active:opacity-70"
          >
            取消支付
          </button>
          <button
            onClick={() => navigate('/purchase')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-white active:opacity-70"
            style={{ backgroundColor: '#1677FF' }}
          >
            立即支付
          </button>
        </div>
      )}
    </div>
  );
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
    <p className="text-sm text-text-tertiary">暂无订单记录</p>
  </div>
);

export const OrderRecord = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState<Order[]>(allOrders);
  const [cancelTarget, setCancelTarget] = useState<string | null>(null);

  const filteredOrders = orders.filter(o => {
    if (activeTab === 'pending') return o.paymentStatus === '\u5f85\u4ed8\u6b3e';
    if (activeTab === 'purchased') return o.paymentStatus === '\u5df2\u8d2d\u4e70';
    return true;
  });

  const confirmCancel = () => {
    setOrders(prev => prev.map(o =>
      o.orderId === cancelTarget ? { ...o, paymentStatus: '\u5df2\u53d6\u6d88' as const } : o
    ));
    setCancelTarget(null);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center px-4" style={{ height: '44px' }}>
            <button onClick={() => navigate(-1)} className="active:opacity-70 mr-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex-1 text-center text-base font-semibold text-text-primary">订单记录</span>
            <div className="w-6" />
          </div>
          <div className="flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id ? 'text-primary' : 'text-text-secondary'
                }`}
                style={{ height: '44px' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full" style={{ width: '32px', backgroundColor: '#1677FF' }} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-3">
          {filteredOrders.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {filteredOrders.map(order => (
                <OrderCard key={order.orderId} order={order} onCancel={setCancelTarget} />
              ))}
            </div>
          )}
        </div>
      </div>

      {cancelTarget && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setCancelTarget(null)} />
          <div className="fixed left-4 right-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 z-50 max-w-sm mx-auto">
            <h3 className="text-base font-semibold text-text-primary text-center mb-2">确认取消支付</h3>
            <p className="text-sm text-text-tertiary text-center mb-6">取消后订单将关闭，如需购买请重新下单</p>
            <div className="flex gap-3">
              <button onClick={() => setCancelTarget(null)} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-text-secondary bg-gray-100 active:opacity-70">返回</button>
              <button onClick={confirmCancel} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white active:opacity-70" style={{ backgroundColor: '#1677FF' }}>确认取消</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
