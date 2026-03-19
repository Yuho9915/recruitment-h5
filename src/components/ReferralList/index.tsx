import { Recruitment } from '../../types';
import { ReferralCard } from '../ReferralCard';

interface ReferralListProps {
  referrals: (Recruitment & { referralCode: string })[];
}

export const ReferralList = ({ referrals }: ReferralListProps) => {
  return (
    <div className="px-4 py-3 space-y-3">
      {referrals.length > 0 ? (
        referrals.map((referral) => (
          <ReferralCard key={referral.id} referral={referral} />
        ))
      ) : (
        <div className="text-center py-8 text-text-tertiary">
          <p>暂无内推信息</p>
        </div>
      )}
    </div>
  );
};
