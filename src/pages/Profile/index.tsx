import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

const defaultUserInfo = {
  avatar: 'https://picsum.photos/100/100?random=99',
  nickname: '\u7528\u6237\u6635\u79f0',
  phone: '138****8888',
  gender: '\u7537',
  school: '\u5317\u4eac\u5927\u5b66',
  major: '\u8ba1\u7b97\u673a\u79d1\u5b66',
  graduation: '2025\u5c4a'
};

const genderOptions = ['\u7537', '\u5973', '\u4fdd\u5bc6'];
const graduationOptions = ['2026\u5c4a', '2025\u5c4a', '2024\u5c4a', '2023\u5c4a', '\u5f80\u5c4a\u751f'];

export const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [showGraduationPicker, setShowGraduationPicker] = useState(false);

  const handleAvatarClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserInfo(prev => ({ ...prev, avatar: url }));
    }
  };

  const startEdit = (field: string, value: string) => {
    setEditingField(field);
    setEditValue(value);
  };

  const saveEdit = () => {
    if (editingField) {
      setUserInfo(prev => ({ ...prev, [editingField]: editValue }));
      setEditingField(null);
    }
  };

  const InfoItem = ({
    label,
    value,
    field,
    onClick
  }: {
    label: string;
    value: string;
    field?: string;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 bg-white active:bg-gray-50 transition-colors"
      style={{ minHeight: '52px' }}
    >
      <span className="text-sm text-text-primary">{label}</span>
      <div className="flex items-center gap-2">
        {editingField === field ? (
          <input
            autoFocus
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={e => e.key === 'Enter' && saveEdit()}
            className="text-sm text-right text-text-secondary focus:outline-none border-b border-primary"
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <span className="text-sm text-text-secondary">{value}</span>
        )}
        <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* Avatar Section */}
        <div className="flex flex-col items-center py-6 bg-white mb-3">
          <div className="relative" onClick={handleAvatarClick}>
            <img
              src={userInfo.avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
              onError={e => { e.currentTarget.src = 'https://picsum.photos/100/100?random=99'; }}
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          <p className="mt-2 text-xs text-text-tertiary">点击头像更换</p>
        </div>

        {/* Info List */}
        <div className="bg-white divide-y divide-gray-50">
          <InfoItem label="昵称" value={userInfo.nickname} field="nickname" onClick={() => startEdit('nickname', userInfo.nickname)} />
          <InfoItem label="手机号码" value={userInfo.phone} field="phone" onClick={() => startEdit('phone', userInfo.phone)} />
          <InfoItem label="性别" value={userInfo.gender} onClick={() => setShowGenderPicker(true)} />
          <InfoItem label="毕业院校" value={userInfo.school} onClick={() => navigate('/search-school', { state: { returnTo: '/profile', field: 'school' } })} />
          <InfoItem label="专业" value={userInfo.major} onClick={() => navigate('/search-major', { state: { returnTo: '/profile', field: 'major' } })} />
          <InfoItem label="毕业时间" value={userInfo.graduation} onClick={() => setShowGraduationPicker(true)} />
        </div>
      </div>

      {/* Gender Picker */}
      {showGenderPicker && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowGenderPicker(false)} />
          <div className="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl z-50 max-w-sm mx-auto">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-text-primary">选择性别</span>
              <button onClick={() => setShowGenderPicker(false)} className="text-text-tertiary active:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {genderOptions.map(g => (
              <button
                key={g}
                onClick={() => { setUserInfo(prev => ({ ...prev, gender: g })); setShowGenderPicker(false); }}
                className={`w-full px-4 py-4 text-sm text-left border-b border-gray-50 active:bg-gray-50 ${
                  userInfo.gender === g ? 'text-primary font-medium' : 'text-text-primary'
                }`}
              >
                {g}
              </button>
            ))}
            <div className="h-6" />
          </div>
        </>
      )}

      {/* Graduation Picker */}
      {showGraduationPicker && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowGraduationPicker(false)} />
          <div className="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl z-50 max-w-sm mx-auto">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-text-primary">选择毕业时间</span>
              <button onClick={() => setShowGraduationPicker(false)} className="text-text-tertiary active:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {graduationOptions.map(g => (
              <button
                key={g}
                onClick={() => { setUserInfo(prev => ({ ...prev, graduation: g })); setShowGraduationPicker(false); }}
                className={`w-full px-4 py-4 text-sm text-left border-b border-gray-50 active:bg-gray-50 ${
                  userInfo.graduation === g ? 'text-primary font-medium' : 'text-text-primary'
                }`}
              >
                {g}
              </button>
            ))}
            <div className="h-6" />
          </div>
        </>
      )}
    </div>
  );
};
