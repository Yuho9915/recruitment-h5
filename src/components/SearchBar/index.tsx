interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="px-4 py-3">
      <input
        type="text"
        placeholder="输入公司名称或岗位名称"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
        style={{ height: '36px' }}
      />
    </div>
  );
};
