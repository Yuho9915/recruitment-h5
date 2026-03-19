import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex gap-3 p-3 bg-white active:opacity-70 transition-opacity cursor-pointer">
      {/* Cover */}
      <div className="flex-shrink-0">
        <img
          src={product.cover}
          alt={product.title}
          className="w-20 h-20 rounded object-cover bg-gray-200"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-sm font-semibold text-text-primary line-clamp-2 mb-1">
          {product.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-1">
          {product.tags.map((tag, index) => (
            <span key={index} className="text-xs text-text-tertiary">
              {tag}
              {index < product.tags.length - 1 && ' / '}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="text-sm font-semibold text-red-500 mb-1">
          ￥{product.price}
        </p>

        {/* Buyers */}
        <p className="text-xs text-text-tertiary">
          {product.buyers}人购买
        </p>
      </div>
    </div>
  );
};
