interface MatchFormSectionProps {
  formData: {
    school: string;
    graduationYear: string;
    major: string;
    education: string;
    city: string;
  };
  onFieldClick: (field: string) => void;
}

export const MatchFormSection = ({
  formData,
  onFieldClick
}: MatchFormSectionProps) => {
  const fields = [
    { key: 'school', label: '毕业院校', value: formData.school },
    { key: 'graduationYear', label: '毕业届次', value: formData.graduationYear },
    { key: 'major', label: '专业', value: formData.major },
    { key: 'education', label: '学历', value: formData.education },
    { key: 'city', label: '意向城市', value: formData.city }
  ];

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4 space-y-3">
        {fields.map((field) => (
          <button
            key={field.key}
            onClick={() => onFieldClick(field.key)}
            className="w-full flex items-center justify-between py-3 border-b border-gray-100 last:border-0 active:opacity-70 transition-opacity text-left"
          >
            <div className="flex-1">
              <p className="text-xs text-text-tertiary mb-1">{field.label}</p>
              <p className="text-sm text-text-primary">
                {field.value || '请选择'}
              </p>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};
