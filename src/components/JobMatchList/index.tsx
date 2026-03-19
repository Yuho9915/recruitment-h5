import { useNavigate } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  degree: string;
  batch: string;
  graduate: string;
  major: string;
  city: string;
  requirement: string;
  description: string;
}

interface CompanyJobGroup {
  company: string;
  tags: string[];
  jobs: Job[];
}

interface JobMatchListProps {
  data: CompanyJobGroup[];
  onJobArrowClick?: (job: Job, company: string, companyTags: string[], companyId: number) => void;
}

export const JobMatchList = ({ data, onJobArrowClick }: JobMatchListProps) => {
  const navigate = useNavigate();

  const handleJobTitleClick = (jobId: number) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="px-4 py-3 space-y-4">
      {data.map((group, groupIndex) => (
        <div key={groupIndex} className="bg-white rounded-lg p-4">
          {/* Company Info */}
          <div className="mb-4">
            <h3 className="text-base font-semibold text-text-primary mb-2">
              {group.company}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs bg-gray-100 text-text-secondary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {group.jobs.map((job, jobIndex) => (
              <div key={job.id}>
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={() => handleJobTitleClick(job.id)}
                    className="flex-1 text-left active:opacity-70 transition-opacity"
                  >
                    <h4 className="text-sm font-semibold text-text-primary">
                      {job.title}
                    </h4>
                  </button>
                  <button
                    onClick={() => onJobArrowClick?.(job, group.company, group.tags, groupIndex)}
                    className="flex-shrink-0 ml-2 active:opacity-70 transition-opacity"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400"
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
                </div>

                {/* Job Tags */}
                <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
                  <span>{job.degree}</span>
                  <span>|</span>
                  <span>{job.graduate}</span>
                  <span>|</span>
                  <span>{job.batch}</span>
                </div>

                {/* Job Info */}
                <div className="text-xs text-text-tertiary space-y-2">
                  <p>专业：{job.major}</p>
                  <p>城市：{job.city}</p>
                </div>

                {/* Divider */}
                {jobIndex < group.jobs.length - 1 && (
                  <div className="border-b border-gray-100 mt-4" />
                )}
              </div>
            ))}
          </div>

          {/* AI Tip */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              以上内容由AI搜索推荐，结果仅供参考
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
