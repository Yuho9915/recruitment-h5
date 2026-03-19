import { useParams } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { CompanyGallery } from '../../components/CompanyGallery';
import { CompanyInfoCardDetail } from '../../components/CompanyInfoCardDetail';
import { CompanyIntro } from '../../components/CompanyIntro';
import { RecruitDrawer } from '../../components/RecruitDrawer';
import { companies, recruitEvents } from '../../mock/data';

export const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const companyId = parseInt(id || '1');
  
  // Find company by id, fallback to first company
  const company = companies.find((c) => c.id === companyId) || companies[0];

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Company Gallery */}
        <CompanyGallery images={company.images} />

        {/* Company Info */}
        <CompanyInfoCardDetail
          name={company.name}
          tags={company.tags}
          website={company.website}
        />

        {/* Company Intro */}
        <CompanyIntro intro={company.intro} />
      </div>

      {/* Recruit Drawer */}
      <RecruitDrawer events={recruitEvents} />
    </div>
  );
};
