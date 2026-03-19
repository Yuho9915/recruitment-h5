import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { schools } from '../../mock/data';

export const SearchSchool = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const filteredSchools = schools.filter((school) =>
    school.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectSchool = (school: string) => {
    // 保存到localStorage或状态管理
    localStorage.setItem('selectedSchool', school);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Search Input */}
        <div className="px-4 py-4">
          <input
            type="text"
            placeholder="搜索院校"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
          />
        </div>

        {/* Schools List */}
        <div className="px-4 py-3 space-y-2">
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school, index) => (
              <button
                key={index}
                onClick={() => handleSelectSchool(school)}
                className="w-full text-left px-4 py-3 bg-white rounded-lg active:opacity-70 transition-opacity"
              >
                <p className="text-sm text-text-primary">{school}</p>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-text-tertiary">
              <p>未找到相关院校</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
