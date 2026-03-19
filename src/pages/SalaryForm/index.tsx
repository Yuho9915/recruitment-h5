import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

export const SalaryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: '',
    companyName: '',
    jobTitle: '',
    fixedSalary: '',
    variableSalary: '',
    benefits: '五险一金',
    otherBenefits: '带薪年假/体检',
    resume: null as File | null,
    minSalary: '',
    maxSalary: '',
    role: 'HR面试官',
    customRole: ''
  });

  const [resumeFileName, setResumeFileName] = useState('');
  const [salaryDrawerVisible, setSalaryDrawerVisible] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    if (field === 'role' && value !== '其他') {
      setFormData((prev) => ({ ...prev, [field]: value, customRole: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setResumeFileName(file.name);
    }
  };

  const handleCityClick = () => {
    navigate('/search-city');
  };

  const handleSubmit = () => {
    console.log('Submit salary form:', formData);
    navigate('/salary/session');
  };

  const roles = ['HR面试官', '业务面试官', '技术面试官', 'CEO/总经理', '其他'];

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Form Content */}
        <div className="px-4 py-4 space-y-4">
          {/* Job Info Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              岗位信息
            </h3>

            {/* City */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                所在城市
              </label>
              <button
                onClick={handleCityClick}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-left flex items-center justify-between active:opacity-70 transition-opacity"
              >
                <span className={formData.city ? 'text-text-primary' : 'text-text-tertiary'}>
                  {formData.city || '请选择城市'}
                </span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                公司名称
              </label>
              <input
                type="text"
                placeholder="请输入公司名称"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="text-xs text-text-tertiary mb-2 block">
                职位名称
              </label>
              <input
                type="text"
                placeholder="请输入职位名称"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Salary Benefit Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              薪酬福利
            </h3>

            {/* Fixed Salary */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                固定薪资
              </label>
              <input
                type="text"
                placeholder="月薪*12薪"
                value={formData.fixedSalary}
                onChange={(e) => handleInputChange('fixedSalary', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Variable Salary */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                浮动薪资
              </label>
              <input
                type="text"
                placeholder="绩效/奖金等"
                value={formData.variableSalary}
                onChange={(e) => handleInputChange('variableSalary', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                保障福利
              </label>
              <input
                type="text"
                placeholder="五险一金"
                value={formData.benefits}
                onChange={(e) => handleInputChange('benefits', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Other Benefits */}
            <div>
              <label className="text-xs text-text-tertiary mb-2 block">
                其他福利
              </label>
              <input
                type="text"
                placeholder="带薪年假天数/体检等"
                value={formData.otherBenefits}
                onChange={(e) => handleInputChange('otherBenefits', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Resume Upload Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              个人简历
            </h3>
            <label className="block">
              <input
                type="file"
                onChange={handleResumeUpload}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <div className="px-3 py-2 bg-gray-100 text-text-secondary text-sm rounded-lg cursor-pointer active:opacity-70 transition-opacity text-center">
                选择文件
              </div>
            </label>

            {resumeFileName && (
              <div className="mt-3 flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-text-primary truncate">
                  {resumeFileName}
                </span>
                <button className="text-xs text-primary font-medium active:opacity-70 transition-opacity">
                  预览
                </button>
              </div>
            )}
          </div>

          {/* Expected Salary Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              期望薪资
            </h3>
            <button
              onClick={() => setSalaryDrawerVisible(true)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-left flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <span className={formData.minSalary && formData.maxSalary ? 'text-text-primary' : 'text-text-tertiary'}>
                {formData.minSalary && formData.maxSalary 
                  ? `${formData.minSalary}k - ${formData.maxSalary}k`
                  : '请选择期望薪资范围'}
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Salary Role Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              选择谈薪角色
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleSelectChange('role', role)}
                  className={`h-10 flex items-center justify-center text-sm rounded-lg border transition-all ${
                    formData.role === role
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-text-secondary border-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Custom Role Input */}
            {formData.role === '其他' && (
              <input
                type="text"
                placeholder="请输入面试官角色"
                value={formData.customRole}
                onChange={(e) => handleInputChange('customRole', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-4">
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-3 bg-primary text-white text-base font-medium rounded-lg active:opacity-70 transition-opacity"
            style={{ height: '48px' }}
          >
            确定
          </button>
        </div>
      </div>

      {/* Salary Range Drawer */}
      <>
        {salaryDrawerVisible && (
          <div
            className="fixed inset-0 bg-black/50 z-[1000]"
            onClick={() => setSalaryDrawerVisible(false)}
          />
        )}

        <div
          className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform"
          style={{
            transform: salaryDrawerVisible ? 'translateY(0)' : 'translateY(100%)',
            maxHeight: '50vh'
          }}
        >
          <div className="px-4 py-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              期望薪资范围
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-text-tertiary mb-2 block">
                  最低薪资（k/月）
                </label>
                <input
                  type="number"
                  placeholder="请输入最低薪资"
                  value={formData.minSalary}
                  onChange={(e) => handleInputChange('minSalary', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs text-text-tertiary mb-2 block">
                  最高薪资（k/月）
                </label>
                <input
                  type="number"
                  placeholder="请输入最高薪资"
                  value={formData.maxSalary}
                  onChange={(e) => handleInputChange('maxSalary', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <button
              onClick={() => setSalaryDrawerVisible(false)}
              className="w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
              style={{ height: '40px' }}
            >
              确定
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
