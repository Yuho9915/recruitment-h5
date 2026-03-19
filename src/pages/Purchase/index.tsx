import { BackHeader } from '../../components/BackHeader';

const product = {
  image: 'https://picsum.photos/300/300?random=10',
  name: 'VIP会员',
  tag: '年度VIP',
  price: '￥299',
  originalPrice: '￥599',
  description: '解锁全部行业深度分析、知识手册、内推码等全部权益'
};

export const Purchase = () => {
  const handlePay = () => {
    alert('支付功能即将上线');
  };

  return (
    <div className="min-h-screen bg-bg pb-28">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        <div className="px-4 py-4">
          {/* Product Info Section */}
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            {/* Product Image */}
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23EEF2FF" width="200" height="200"/%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Product Name & Tag */}
            <div className="text-center mb-3">
              <h2 className="text-xl font-bold text-text-primary mb-2">{product.name}</h2>
              <span className="inline-block text-xs px-3 py-1 bg-blue-50 text-primary rounded-full font-medium">
                {product.tag}
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-red-500">{product.price}</span>
              <span className="text-sm text-text-tertiary line-through ml-2">{product.originalPrice}</span>
            </div>

            {/* Description */}
            <p className="text-xs text-text-tertiary text-center">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Payment Section */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-text-secondary">实付金额</span>
            <span className="text-xl font-bold text-red-500">{product.price}</span>
          </div>
          <button
            onClick={handlePay}
            className="w-full text-white font-semibold active:opacity-70 transition-opacity"
            style={{ height: '48px', backgroundColor: '#1677FF', fontSize: '16px', borderRadius: '8px' }}
          >
            立即支付
          </button>
        </div>
      </div>
    </div>
  );
};
