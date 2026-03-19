import { useState } from 'react';

interface JobInfoSectionProps {
  session: string;
  education: string;
  time: string;
  applyUrl: string;
  positions: string[];
}

export const JobInfoSection = ({
  session,
  education,
  time,
  applyUrl,
  positions
}: JobInfoSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  const displayPositions = expanded ? positions : positions.slice(0, 5);
  const hasMore = positions.length > 5;

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        {/* 招聘要求 */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            招聘要求
          </h3>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-xs text-text-tertiary w-20 flex-shrink-0">
                招聘届次：
              </span>
              <span className="text-xs text-text-primary flex-1">
                {session}
              </span>
            </div>
            <div className="flex">
              <span className="text-xs text-text-tertiary w-20 flex-shrink-0">
                学历要求：
              </span>
              <span className="text-xs text-text-primary flex-1">
                {education}
              </span>
            </div>
            <div className="flex">
              <span className="text-xs text-text-tertiary w-20 flex-shrink-0">
                招聘时间：
              </span>
              <span className="text-xs text-text-primary flex-1">
                {time}
              </span>
            </div>
            <div className="flex">
              <span className="text-xs text-text-tertiary w-20 flex-shrink-0">
                投递地址：
              </span>
              <a
                href={`https://${applyUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary flex-1 underline"
              >
                {applyUrl}
              </a>
            </div>
          </div>
        </div>

        {/* 招聘岗位 */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            招聘岗位
          </h3>
          <div className="space-y-2">
            {displayPositions.map((position, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0"
              >
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
                <span className="text-sm text-text-primary flex-1">{position}</span>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full mt-3 py-2 text-sm text-primary active:opacity-70 transition-opacity"
            >
              {expanded ? '收起岗位' : '展开全部岗位'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
