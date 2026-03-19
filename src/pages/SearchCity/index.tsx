import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { cities } from '../../mock/data';

export const SearchCity = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [unlimitedCity, setUnlimitedCity] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectCity = (city: string) => {
    localStorage.setItem('selectedCity', city);
    navigate(-1);
  };

  const handleToggleUnlimited = () => {
    if (!unlimitedCity) {
      localStorage.setItem('selectedCity', '全国');
      navigate(-1);
    }
    setUnlimitedCity(!unlimitedCity);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Toggle Switch */}
        <div className="px-4 py-4 flex items-center justify-between bg-white">
          <span className="text-sm text-text-secondary">匹配全国岗位</span>
          <button
            onClick={handleToggleUnlimited}
            className={`w-12 h-6 rounded-full transition-colors ${
              unlimitedCity ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                unlimitedCity ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 py-4">
          <input
            type="text"
            placeholder="搜索城市"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
          />
        </div>

        {/* Cities List */}
        <div className="px-4 py-3 space-y-2">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <button
                key={index}
                onClick={() => handleSelectCity(city)}
                className="w-full text-left px-4 py-3 bg-white rounded-lg active:opacity-70 transition-opacity"
              >
                <p className="text-sm text-text-primary">{city}</p>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-text-tertiary">
              <p>未找到相关城市</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
