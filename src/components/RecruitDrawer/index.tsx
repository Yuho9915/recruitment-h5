import { useState } from 'react';
import { RecruitEvent } from '../../types';
import { RecruitEventCard } from '../RecruitEventCard';

interface RecruitDrawerProps {
  events: RecruitEvent[];
}

export const RecruitDrawer = ({ events }: RecruitDrawerProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleOverlayClick = () => {
    setExpanded(false);
  };

  return (
    <>
      {/* Overlay */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000]"
          onClick={handleOverlayClick}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 right-0 bg-white z-[1001] max-w-sm mx-auto transition-all duration-300 shadow-2xl`}
        style={{
          bottom: '0',
          height: expanded ? '70vh' : '80px',
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden'
        }}
      >
        {/* Drag Indicator & Title */}
        <div
          onClick={handleToggle}
          className="sticky top-0 bg-white px-4 py-4 cursor-pointer active:opacity-70 transition-opacity border-b border-gray-100"
        >
          {/* Drag Indicator */}
          <div className="flex justify-center mb-3">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Title */}
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-text-primary">
              招聘会（{events.length}）
            </h3>
          </div>
        </div>

        {/* Content */}
        {expanded && (
          <div className="overflow-y-auto px-4 pb-4 space-y-3" style={{ height: 'calc(70vh - 80px)' }}>
            {events.map((event) => (
              <RecruitEventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
