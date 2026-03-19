import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyHeaderCard } from '../../components/CompanyHeaderCard';
import { JobInfoSection } from '../../components/JobInfoSection';
import { JobDetailContent } from '../../components/JobDetailContent';
import { CompanyInfoCard } from '../../components/CompanyInfoCard';
import { BottomActionBar } from '../../components/BottomActionBar';
import { BottomDrawer } from '../../components/BottomDrawer';
import { ReferralCodeContent } from '../../components/ReferralCodeContent';
import { ProductList } from '../../components/ProductList';
import { jobDetails, products } from '../../mock/data';

export const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = parseInt(id || '1');
  
  // Find job detail by id, fallback to first job
  const job = jobDetails.find((j) => j.id === jobId) || jobDetails[0];

  const [drawerType, setDrawerType] = useState<string | null>(null);

  const handleActionClick = (type: string) => {
    setDrawerType(type);
  };

  const handleCloseDrawer = () => {
    setDrawerType(null);
  };

  const getDrawerTitle = () => {
    switch (drawerType) {
      case 'referral':
        return '公司内推码';
      case 'analysis':
        return '考情分析';
      case 'handbook':
        return '知识手册';
      default:
        return '';
    }
  };

  const getDrawerContent = () => {
    switch (drawerType) {
      case 'referral':
        return <ReferralCodeContent code="TX2025CAMPUS" />;
      case 'analysis':
      case 'handbook':
        return <ProductList products={products} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-sm mx-auto">
        {/* Company Header */}
        <CompanyHeaderCard
          logo={job.logo}
          title={job.title}
          tags={job.tags}
          views={job.views}
        />

        {/* Job Info */}
        <JobInfoSection
          session={job.session}
          education={job.education}
          time={job.time}
          applyUrl={job.applyUrl}
          positions={job.positions}
        />

        {/* Job Detail Content */}
        <JobDetailContent description={job.description} />

        {/* Company Info */}
        <CompanyInfoCard
          companyId={job.id}
          companyName={job.companyName}
          companyLogo={job.companyLogo}
          companyTags={job.companyTags}
        />
      </div>

      {/* Bottom Drawer */}
      <BottomDrawer
        title={getDrawerTitle()}
        visible={drawerType !== null}
        onClose={handleCloseDrawer}
      >
        {getDrawerContent()}
      </BottomDrawer>

      {/* Bottom Action Bar */}
      <BottomActionBar 
        onActionClick={handleActionClick}
        activeAction={drawerType}
      />
    </div>
  );
};
