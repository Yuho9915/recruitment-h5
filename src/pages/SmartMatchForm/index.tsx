import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { AIRobotSection } from '../../components/AIRobotSection';
import { MatchFormSection } from '../../components/MatchFormSection';
import { SubmitButton } from '../../components/SubmitButton';
import { SelectionDrawer } from '../../components/SelectionDrawer';
import { graduationYears, educationLevels } from '../../mock/data';

export const SmartMatchForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: '',
    graduationYear: '',
    major: '',
    education: '',
    city: ''
  });

  const [drawerType, setDrawerType] = useState<string | null>(null);

  const handleFieldClick = (field: string) => {
    if (field === 'school') {
      navigate('/search-school');
    } else if (field === 'major') {
      navigate('/search-major');
    } else if (field === 'city') {
      navigate('/search-city');
    } else if (field === 'graduationYear') {
      setDrawerType('graduationYear');
    } else if (field === 'education') {
      setDrawerType('education');
    }
  };

  const handleSelectOption = (option: string) => {
    if (drawerType === 'graduationYear') {
      setFormData({ ...formData, graduationYear: option });
    } else if (drawerType === 'education') {
      setFormData({ ...formData, education: option });
    }
  };

  const handleSubmit = () => {
    // 保存表单数据
    localStorage.setItem('smartMatchForm', JSON.stringify(formData));
    navigate('/job-match');
  };

  // 从localStorage读取已选择的值
  useEffect(() => {
    const school = localStorage.getItem('selectedSchool');
    const major = localStorage.getItem('selectedMajor');
    const city = localStorage.getItem('selectedCity');

    if (school) {
      setFormData((prev) => ({ ...prev, school }));
      localStorage.removeItem('selectedSchool');
    }
    if (major) {
      setFormData((prev) => ({ ...prev, major }));
      localStorage.removeItem('selectedMajor');
    }
    if (city) {
      setFormData((prev) => ({ ...prev, city }));
      localStorage.removeItem('selectedCity');
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* AI Robot Section */}
        <AIRobotSection />

        {/* Match Form Section */}
        <MatchFormSection formData={formData} onFieldClick={handleFieldClick} />

        {/* Submit Button */}
        <SubmitButton onClick={handleSubmit} />
      </div>

      {/* Selection Drawers */}
      <SelectionDrawer
        title="毕业届次"
        options={graduationYears}
        visible={drawerType === 'graduationYear'}
        onClose={() => setDrawerType(null)}
        onSelect={handleSelectOption}
      />

      <SelectionDrawer
        title="学历"
        options={educationLevels}
        visible={drawerType === 'education'}
        onClose={() => setDrawerType(null)}
        onSelect={handleSelectOption}
      />
    </div>
  );
};
