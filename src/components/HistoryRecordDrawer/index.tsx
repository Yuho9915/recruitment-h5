import { useNavigate } from 'react-router-dom';

interface HistoryRecord {
  id: number;
  jobName: string;
}

interface HistoryRecordDrawerProps {
  visible: boolean;
  type: 'interview' | 'review' | 'exam' | 'salary' | null;
  records: HistoryRecord[];
  onClose: () => void;
  onNewRecord: () => void;
}

const typeConfig = {
  interview: { title: '面试记录', buttonText: '新的面试' },
  review: { title: '复盘记录', buttonText: '新的复盘' },
  exam: { title: '笔试记录', buttonText: '新的笔试' },
  salary: { title: '谈薪记录', buttonText: '新的谈薪' }
};

export const HistoryRecordDrawer = ({
  visible,
  type,
  records,
  onClose,
  onNewRecord
}: HistoryRecordDrawerProps) => {
  const navigate = useNavigate();

  if (!type) return null;

  const config = typeConfig[type];

  const handleRecordClick = (_recordId: number) => {
    const paths: Record<string, string> = {
      interview: `/interview/session`,
      review: `/review/session`,
      exam: `/exam/session`,
      salary: `/salary/session`
    };
    if (type) {
      onClose();
      navigate(paths[type]);
    }
  };

  return (
    <>
      {/* Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000]"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          maxHeight: '50vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base font-semibold text-text-primary">
            {config.title}
          </h3>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
        </div>

        {/* History Records */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {records.length > 0 ? (
            records.map((record) => (
              <button
                key={record.id}
                onClick={() => handleRecordClick(record.id)}
                className="w-full flex items-center justify-between px-3 py-3 bg-gray-50 rounded-lg active:opacity-70 transition-opacity"
              >
                <h4 className="text-sm font-semibold text-text-primary">
                  {record.jobName}
                </h4>
                <svg
                  className="w-4 h-4 text-gray-400 flex-shrink-0"
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
            ))
          ) : (
            <div className="text-center py-8 text-text-tertiary">
              <p>暂无记录</p>
            </div>
          )}
        </div>

        {/* New Record Button */}
        <div className="px-4 py-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={onNewRecord}
            className="w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
            style={{ height: '40px' }}
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};
