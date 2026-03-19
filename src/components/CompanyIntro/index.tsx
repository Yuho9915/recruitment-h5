interface CompanyIntroProps {
  intro: string;
}

export const CompanyIntro = ({ intro }: CompanyIntroProps) => {
  const images = [
    'https://picsum.photos/343/200?random=801',
    'https://picsum.photos/343/200?random=802'
  ];

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-base font-semibold text-text-primary mb-3">
          公司简介
        </h3>
        
        {/* Intro Text */}
        <div className="text-sm text-text-primary whitespace-pre-line leading-relaxed mb-4">
          {intro}
        </div>

        {/* Images */}
        <div className="space-y-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`公司图片 ${index + 1}`}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
