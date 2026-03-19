interface CompanyInfoCardDetailProps {
  name: string;
  tags: string[];
  website: string;
}

export const CompanyInfoCardDetail = ({
  name,
  tags,
  website
}: CompanyInfoCardDetailProps) => {
  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        {/* Company Name */}
        <h2 className="text-lg font-semibold text-text-primary mb-3">
          {name}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs bg-gray-100 text-text-secondary rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Website */}
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline"
        >
          {website}
        </a>
      </div>
    </div>
  );
};
