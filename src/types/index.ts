export interface Banner {
  id: number;
  image: string;
  link: string;
}

export interface RecruitmentTag {
  id: string;
  label: string;
}

export interface Recruitment {
  id: number;
  title: string;
  logo: string;
  tags: string[];
  updateTime: string;
  views: string;
}

export interface FilterOptions {
  session: string[];
  education: string[];
  nature: string[];
  position: string[];
  industry: string[];
}

export interface CategoryTab {
  id: string;
  label: string;
}

export interface Course {
  id: number;
  title: string;
  cover: string;
  price: number;
  buyers: number;
}

export interface Product {
  id: number;
  title: string;
  cover: string;
  tags: string[];
  price: number;
  buyers: number;
}

export interface Company {
  id: number;
  name: string;
  tags: string[];
  website: string;
  images: string[];
  intro: string;
}

export interface RecruitEvent {
  id: number;
  title: string;
  logo: string;
  tags: string[];
  updates: number;
  views: string;
}

export interface ReferralDetail {
  id: number;
  title: string;
  code: string;
  qr: string;
}

export interface RelatedJob {
  id: number;
  title: string;
  logo: string;
  tags: string[];
  views: string;
  update: string;
}

export interface JobDetail {
  id: number;
  title: string;
  logo: string;
  tags: string[];
  views: string;
  session: string;
  education: string;
  time: string;
  applyUrl: string;
  positions: string[];
  description: string;
  companyName: string;
  companyLogo: string;
  companyTags: string[];
}
