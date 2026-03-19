import { RelatedJob } from '../../types';
import { RelatedJobCard } from '../RelatedJobCard';

interface RelatedRecruitSectionProps {
  jobs: RelatedJob[];
}

export const RelatedRecruitSection = ({ jobs }: RelatedRecruitSectionProps) => {
  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        {/* Title */}
        <h3 className="text-base font-semibold text-text-primary mb-4">
          相关招聘会
        </h3>

        {/* Jobs List */}
        <div className="space-y-3">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <RelatedJobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-8 text-text-tertiary">
              <p>暂无相关招聘会</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
