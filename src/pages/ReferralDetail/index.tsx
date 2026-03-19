import { useParams } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { ReferralTitleCard } from '../../components/ReferralTitleCard';
import { QRCodeSection } from '../../components/QRCodeSection';
import { RelatedRecruitSection } from '../../components/RelatedRecruitSection';
import { referralDetails, relatedJobs } from '../../mock/data';

export const ReferralDetail = () => {
  const { id } = useParams<{ id: string }>();
  const referralId = parseInt(id || '1');
  
  // Find referral detail by id, fallback to first referral
  const referral = referralDetails.find((r) => r.id === referralId) || referralDetails[0];

  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Referral Title with Favorite */}
        <ReferralTitleCard title={referral.title} />

        {/* QR Code Section */}
        <QRCodeSection qr={referral.qr} code={referral.code} />

        {/* Related Recruit Section */}
        <RelatedRecruitSection jobs={relatedJobs} />
      </div>
    </div>
  );
};
