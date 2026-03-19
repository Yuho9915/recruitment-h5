import { Product } from '../../types';
import { ProductCard } from '../ProductCard';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="p-4 space-y-3">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center py-8 text-text-tertiary">
          <p>暂无商品</p>
        </div>
      )}
    </div>
  );
};
