import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { majors } from '../../mock/data';

export const SearchMajor = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [unlimitedMajor, setUnlimitedMajor] = useState(false);

  const filteredMajors = majors.filter((major) =>
    major.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectMajor = (major: string) => {
    localStorage.setItem('selectedMajor', major);
    navigate(-1);
  };

  const handleToggleUnlimited = () => {
    if (!unlimitedMajor) {
      localStorage.setItem('selectedMajor', '不限专业');
      navigate(-1);
    }
    setUnlimitedMajor(!unlimitedMajor);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Toggle Switch */}
        <div className="px-4 py-4 flex items-center justify-between bg-white">
          <span className="text-sm text-text-secondary">匹配不限专业岗位</span>
          <button
            onClick={handleToggleUnlimited}
            className={`w-12 h-6 rounded-full transition-colors ${
              unlimitedMajor ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                unlimitedMajor ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 py-4">
          <input
            type="text"
            placeholder="搜索专业"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
          />
        </div>

        {/* Majors List */}
        <div className="px-4 py-3 space-y-2">
          {filteredMajors.length > 0 ? (
            filteredMajors.map((major, index) => (
              <button
                key={index}
                onClick={() => handleSelectMajor(major)}
                className="w-full text-left px-4 py-3 bg-white rounded-lg active:opacity-70 transition-opacity"
              >
                <p className="text-sm text-text-primary">{major}</p>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-text-tertiary">
              <p>未找到相关专业</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
