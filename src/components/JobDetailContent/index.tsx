interface JobDetailContentProps {
  description: string;
}

export const JobDetailContent = ({ description }: JobDetailContentProps) => {
  const images = [
    'https://picsum.photos/343/200?random=401',
    'https://picsum.photos/343/200?random=402',
    'https://picsum.photos/343/200?random=403'
  ];

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          岗位详情
        </h3>
        
        {/* Description Text */}
        <div className="text-sm text-text-primary whitespace-pre-line leading-relaxed mb-4">
          {description}
        </div>

        {/* Images */}
        <div className="space-y-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`岗位详情图 ${index + 1}`}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
