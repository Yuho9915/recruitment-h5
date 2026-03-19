import { Recruitment } from '../../types';
import { RecruitmentCard } from '../RecruitmentCard';

interface RecruitmentListProps {
  recruitments: Recruitment[];
}

export const RecruitmentList = ({ recruitments }: RecruitmentListProps) => {
  return (
    <div className="px-4 py-3 space-y-3">
      {recruitments.length > 0 ? (
        recruitments.map((recruitment) => (
          <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
        ))
      ) : (
        <div className="text-center py-8 text-text-tertiary">
          <p>暂无招聘信息</p>
        </div>
      )}
    </div>
  );
};
