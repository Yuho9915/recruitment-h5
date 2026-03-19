import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Referral } from '../pages/Referral';
import { AIDirectPage } from '../pages/AIDirectPage';
import { Study } from '../pages/Study';
import { My } from '../pages/My';
import { JobDetail } from '../pages/JobDetail';
import { CompanyDetail } from '../pages/CompanyDetail';
import { ReferralDetail } from '../pages/ReferralDetail';
import { SmartMatchForm } from '../pages/SmartMatchForm';
import { SearchSchool } from '../pages/SearchSchool';
import { SearchMajor } from '../pages/SearchMajor';
import { SearchCity } from '../pages/SearchCity';
import { JobMatch } from '../pages/JobMatch';
import { InterviewForm } from '../pages/InterviewForm';
import { InterviewSession } from '../pages/InterviewSession';
import { ReviewForm } from '../pages/ReviewForm';
import { ReviewSession } from '../pages/ReviewSession';
import { ExamForm } from '../pages/ExamForm';
import { ExamSession } from '../pages/ExamSession';
import { SalaryForm } from '../pages/SalaryForm';
import { SalarySession } from '../pages/SalarySession';
import { StateOwnedLearning } from '../pages/StateOwnedLearning';
import { ExamAnalysis } from '../pages/ExamAnalysis';
import { KnowledgeManual } from '../pages/KnowledgeManual';
import { Purchase } from '../pages/Purchase';
import { ProductDetail } from '../pages/ProductDetail';
import { CourseDetail } from '../pages/CourseDetail';
import { ExamPage } from '../pages/ExamPage';
import { ExamResult } from '../pages/ExamResult';
import { Profile } from '../pages/Profile';
import { Membership } from '../pages/Membership';
import { Favorite } from '../pages/Favorite';
import { MyStudy } from '../pages/MyStudy';
import { AIRecord } from '../pages/AIRecord';
import { OrderRecord } from '../pages/OrderRecord';
import { ReferralGrowth } from '../pages/ReferralGrowth';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-bg flex items-center justify-center max-w-sm mx-auto">
    <div className="text-center">
      <p className="text-lg text-text-secondary">{title}</p>
    </div>
  </div>
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/referral-detail/:id" element={<ReferralDetail />} />
        <Route path="/smart-match" element={<SmartMatchForm />} />
        <Route path="/job-match" element={<JobMatch />} />
        <Route path="/interview/form" element={<InterviewForm />} />
        <Route path="/interview/session" element={<InterviewSession />} />
        <Route path="/review/form" element={<ReviewForm />} />
        <Route path="/review/session" element={<ReviewSession />} />
        <Route path="/exam/form" element={<ExamForm />} />
        <Route path="/exam/session" element={<ExamSession />} />
        <Route path="/salary/form" element={<SalaryForm />} />
        <Route path="/salary/session" element={<SalarySession />} />
        <Route path="/learning/state-owned" element={<StateOwnedLearning />} />
        <Route path="/exam/analysis" element={<ExamAnalysis />} />
        <Route path="/knowledge/manual" element={<KnowledgeManual />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/exam/result/:id" element={<ExamResult />} />
        <Route path="/exam/:id" element={<ExamPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my-study" element={<MyStudy />} />
        <Route path="/ai-record" element={<AIRecord />} />
        <Route path="/order-record" element={<OrderRecord />} />
        <Route path="/referral-growth" element={<ReferralGrowth />} />
        <Route path="/search-school" element={<SearchSchool />} />
        <Route path="/search-major" element={<SearchMajor />} />
        <Route path="/search-city" element={<SearchCity />} />
        <Route path="/search" element={<PlaceholderPage title="????" />} />
        <Route path="/ai-match" element={<PlaceholderPage title="AI??????" />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/ai-direct" element={<AIDirectPage />} />
        <Route path="/ai-interview" element={<PlaceholderPage title="????" />} />
        <Route path="/ai-review" element={<PlaceholderPage title="????" />} />
        <Route path="/ai-exam" element={<PlaceholderPage title="????" />} />
        <Route path="/ai-salary" element={<PlaceholderPage title="????" />} />
        <Route path="/vip" element={<PlaceholderPage title="VIP??" />} />
        <Route path="/study" element={<Study />} />
        <Route path="/mine" element={<My />} />
        <Route path="/profile" element={<PlaceholderPage title="????" />} />
      </Routes>
    </BrowserRouter>
  );
};
