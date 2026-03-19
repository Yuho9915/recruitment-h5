import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

export const InterviewForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobName: '',
    jobDesc: '',
    experience: '',
    interviewerRole: '',
    customRole: '',
    resume: null as File | null,
    detailLevel: '中等详实',
    language: '中文'
  });

  const [resumeFileName, setResumeFileName] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    if (field === 'interviewerRole' && value !== '其他') {
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

  const handleStartInterview = () => {
    console.log('Start interview with data:', formData);
    navigate('/interview/session');
  };

  const experienceOptions = ['实习', '应届', '1-3年工作经验', '3年以上工作经验'];
  const interviewerRoles = ['HR面试官', '业务面试官', '技术面试官', 'CEO/总经理', '其他'];
  const detailLevels = ['简洁要点', '中等详实', '深度展开'];
  const languages = ['中文', '英文'];

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
              目标岗位信息
            </h3>

            {/* Job Name */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                目标岗位名称
              </label>
              <input
                type="text"
                placeholder="请填写岗位名称"
                value={formData.jobName}
                onChange={(e) => handleInputChange('jobName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Job Description */}
            <div className="mb-4">
              <label className="text-xs text-text-tertiary mb-2 block">
                岗位职责
              </label>
              <textarea
                placeholder="请填写岗位职责"
                value={formData.jobDesc}
                onChange={(e) => handleInputChange('jobDesc', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary resize-none"
                rows={3}
              />
            </div>

            {/* Image Recognition Button */}
            <button className="w-full px-3 py-2 bg-gray-100 text-text-secondary text-sm rounded-lg active:opacity-70 transition-opacity">
              上传图片识别
            </button>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              工作经验阶段
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {experienceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelectChange('experience', option)}
                  className={`h-10 flex items-center justify-center text-sm rounded-lg border transition-all ${
                    formData.experience === option
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-text-secondary border-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Interviewer Role Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              面试官角色
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {interviewerRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleSelectChange('interviewerRole', role)}
                  className={`h-10 flex items-center justify-center text-sm rounded-lg border transition-all ${
                    formData.interviewerRole === role
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-text-secondary border-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Custom Role Input */}
            {formData.interviewerRole === '其他' && (
              <input
                type="text"
                placeholder="请输入面试官角色"
                value={formData.customRole}
                onChange={(e) => handleInputChange('customRole', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            )}
          </div>

          {/* Resume Section */}
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

          {/* Detail Level Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              回答详细程度
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {detailLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleSelectChange('detailLevel', level)}
                  className={`h-10 flex items-center justify-center text-sm rounded-lg border transition-all ${
                    formData.detailLevel === level
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-text-secondary border-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Language Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">
              面试语言
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleSelectChange('language', lang)}
                  className={`h-10 flex items-center justify-center text-sm rounded-lg border transition-all ${
                    formData.language === lang
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-text-secondary border-gray-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-4">
          <button
            onClick={handleStartInterview}
            className="w-full px-4 py-3 bg-primary text-white text-base font-medium rounded-lg active:opacity-70 transition-opacity"
            style={{ height: '48px' }}
          >
            开始面试
          </button>
        </div>
      </div>
    </div>
  );
};
