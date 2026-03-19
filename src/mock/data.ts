import { Banner, Recruitment } from '../types';

export const banners: Banner[] = [
  {
    id: 1,
    image: 'https://picsum.photos/375/210?random=1',
    link: '#'
  },
  {
    id: 2,
    image: 'https://picsum.photos/375/210?random=2',
    link: '#'
  },
  {
    id: 3,
    image: 'https://picsum.photos/375/210?random=3',
    link: '#'
  },
  {
    id: 4,
    image: 'https://picsum.photos/375/210?random=4',
    link: '#'
  }
];

export const recruitments: Recruitment[] = [
  {
    id: 1,
    title: '2025腾讯校园招聘专场',
    logo: 'https://picsum.photos/80/80?random=101',
    tags: ['互联网', '大厂', '校招'],
    updateTime: '2小时前',
    views: '2.3k'
  },
  {
    id: 2,
    title: '字节跳动2025技术招聘',
    logo: 'https://picsum.photos/80/80?random=102',
    tags: ['互联网', '技术'],
    updateTime: '5小时前',
    views: '1.2k'
  },
  {
    id: 3,
    title: '阿里巴巴春季校招',
    logo: 'https://picsum.photos/80/80?random=103',
    tags: ['互联网', '大厂', '校招'],
    updateTime: '1小时前',
    views: '3.1k'
  },
  {
    id: 4,
    title: '网易游戏招聘会',
    logo: 'https://picsum.photos/80/80?random=104',
    tags: ['游戏', '校招'],
    updateTime: '3小时前',
    views: '1.8k'
  },
  {
    id: 5,
    title: '美团外卖技术岗位',
    logo: 'https://picsum.photos/80/80?random=105',
    tags: ['互联网', '技术'],
    updateTime: '6小时前',
    views: '2.5k'
  },
  {
    id: 6,
    title: '快手直播招聘',
    logo: 'https://picsum.photos/80/80?random=106',
    tags: ['互联网', '校招'],
    updateTime: '4小时前',
    views: '1.5k'
  }
];

export const categories = [
  { id: 'latest', label: '最新' },
  { id: 'state', label: '国央企' },
  { id: 'internet', label: '互联网' },
  { id: 'game', label: '游戏' }
];

export const referrals = [
  {
    id: 101,
    title: '腾讯内推-后端开发',
    logo: 'https://picsum.photos/80/80?random=201',
    tags: ['互联网', '大厂', '校招'],
    updateTime: '1小时前',
    views: '5.2k',
    referralCode: 'TX2025001'
  },
  {
    id: 102,
    title: '字节跳动内推-前端工程师',
    logo: 'https://picsum.photos/80/80?random=202',
    tags: ['互联网', '技术'],
    updateTime: '2小时前',
    views: '4.1k',
    referralCode: 'BD2025002'
  },
  {
    id: 103,
    title: '阿里巴巴内推-算法工程师',
    logo: 'https://picsum.photos/80/80?random=203',
    tags: ['互联网', '大厂', '校招'],
    updateTime: '30分钟前',
    views: '6.3k',
    referralCode: 'ALI2025003'
  },
  {
    id: 104,
    title: '网易游戏内推-游戏开发',
    logo: 'https://picsum.photos/80/80?random=204',
    tags: ['游戏', '校招'],
    updateTime: '4小时前',
    views: '2.9k',
    referralCode: 'WY2025004'
  },
  {
    id: 105,
    title: '美团内推-数据分析',
    logo: 'https://picsum.photos/80/80?random=205',
    tags: ['互联网', '技术'],
    updateTime: '5小时前',
    views: '3.7k',
    referralCode: 'MT2025005'
  },
  {
    id: 106,
    title: '快手内推-产品经理',
    logo: 'https://picsum.photos/80/80?random=206',
    tags: ['互联网', '校招'],
    updateTime: '3小时前',
    views: '2.4k',
    referralCode: 'KS2025006'
  }
];

export const filterOptions = {
  session: ['2024届', '2025届'],
  education: ['大专', '本科', '研究生'],
  nature: ['民企', '国企'],
  position: ['兼职', '实习', '正式', '外包'],
  industry: ['互联网', '游戏', '电子商务', '制造业', '金融行业']
};

export const courses = [
  {
    id: 1,
    title: '2025国考考情深度分析',
    cover: 'https://picsum.photos/80/80?random=301',
    price: 199,
    buyers: 2000
  },
  {
    id: 2,
    title: '银行笔试高频题解析',
    cover: 'https://picsum.photos/80/80?random=302',
    price: 99,
    buyers: 1200
  },
  {
    id: 3,
    title: '互联网大厂面试技巧',
    cover: 'https://picsum.photos/80/80?random=303',
    price: 299,
    buyers: 3500
  },
  {
    id: 4,
    title: '证券从业资格考试冲刺',
    cover: 'https://picsum.photos/80/80?random=304',
    price: 149,
    buyers: 1800
  },
  {
    id: 5,
    title: '行测申论全套课程',
    cover: 'https://picsum.photos/80/80?random=305',
    price: 399,
    buyers: 5000
  },
  {
    id: 6,
    title: '算法面试突击班',
    cover: 'https://picsum.photos/80/80?random=306',
    price: 259,
    buyers: 2200
  }
];

export const courseCategories = [
  { id: 'analysis', label: '考情分析' },
  { id: 'handbook', label: '知识手册' },
  { id: 'recommend', label: '推荐课程' },
  { id: 'exam', label: '笔试题库' }
];

export const products = [
  {
    id: 1,
    title: '2025国考考情深度分析',
    cover: 'https://picsum.photos/80/80?random=501',
    tags: ['国考', '考情'],
    price: 199,
    buyers: 2000
  },
  {
    id: 2,
    title: '银行笔试知识手册',
    cover: 'https://picsum.photos/80/80?random=502',
    tags: ['银行', '笔试'],
    price: 99,
    buyers: 1500
  },
  {
    id: 3,
    title: '事业单位考试指南',
    cover: 'https://picsum.photos/80/80?random=503',
    tags: ['事业单位', '考情'],
    price: 149,
    buyers: 1800
  },
  {
    id: 4,
    title: '互联网大厂面试宝典',
    cover: 'https://picsum.photos/80/80?random=504',
    tags: ['互联网', '面试'],
    price: 299,
    buyers: 3200
  }
];

export const companies = [
  {
    id: 1,
    name: '建国科技有限公司',
    tags: ['互联网', 'AI', '上市公司'],
    website: 'www.jianguo.com',
    images: [
      'https://picsum.photos/375/240?random=601',
      'https://picsum.photos/375/240?random=602',
      'https://picsum.photos/375/240?random=603'
    ],
    intro: `建国科技有限公司成立于2010年，是一家专注于人工智能和大数据领域的高新技术企业。

公司拥有强大的技术团队和丰富的行业经验，致力于为客户提供优质的技术解决方案。

我们的核心业务包括：
- AI算法研发
- 大数据分析
- 云计算服务
- 企业数字化转型

公司文化：创新、协作、追求卓越
员工福利：五险一金、年终奖、带薪年假、团建活动`
  }
];

export const recruitEvents = [
  {
    id: 1,
    title: '2026校园招聘',
    logo: 'https://picsum.photos/80/80?random=701',
    tags: ['校招', '技术岗'],
    updates: 200,
    views: '1.2万'
  },
  {
    id: 2,
    title: 'AI工程师专场招聘',
    logo: 'https://picsum.photos/80/80?random=702',
    tags: ['AI', '算法'],
    updates: 150,
    views: '8000'
  },
  {
    id: 3,
    title: '后端开发招聘',
    logo: 'https://picsum.photos/80/80?random=703',
    tags: ['后端', '技术'],
    updates: 180,
    views: '9500'
  },
  {
    id: 4,
    title: '产品经理招聘',
    logo: 'https://picsum.photos/80/80?random=704',
    tags: ['产品', '管理'],
    updates: 120,
    views: '6800'
  },
  {
    id: 5,
    title: '数据分析师招聘',
    logo: 'https://picsum.photos/80/80?random=705',
    tags: ['数据', '分析'],
    updates: 90,
    views: '5200'
  }
];

export const referralDetails = [
  {
    id: 1,
    title: '腾讯企业内推码',
    code: 'TENCENT2026',
    qr: 'https://picsum.photos/200/200?random=901'
  },
  {
    id: 2,
    title: '字节跳动企业内推码',
    code: 'BYTEDANCE2026',
    qr: 'https://picsum.photos/200/200?random=902'
  }
];

export const relatedJobs = [
  {
    id: 1,
    title: '腾讯2026校园招聘',
    logo: 'https://picsum.photos/80/80?random=1001',
    tags: ['互联网', '校招', '技术岗'],
    views: '1.5万',
    update: '2天前'
  },
  {
    id: 2,
    title: '腾讯AI算法工程师',
    logo: 'https://picsum.photos/80/80?random=1002',
    tags: ['互联网', '算法'],
    views: '1.2万',
    update: '3天前'
  },
  {
    id: 3,
    title: '腾讯后端开发',
    logo: 'https://picsum.photos/80/80?random=1003',
    tags: ['互联网', '后端'],
    views: '9800',
    update: '1天前'
  }
];

export const schools = [
  '清华大学',
  '北京大学',
  '复旦大学',
  '上海交通大学',
  '浙江大学',
  '南京大学',
  '武汉大学',
  '中山大学'
];

export const majors = [
  '计算机科学',
  '软件工程',
  '人工智能',
  '数据科学',
  '信息安全',
  '网络工程',
  '物联网工程',
  '电子信息工程'
];

export const cities = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '南京',
  '武汉',
  '成都'
];

export const graduationYears = [
  '2026届',
  '2025届',
  '2024届',
  '往届生',
  '不限'
];

export const educationLevels = [
  '博士',
  '研究生',
  '本科',
  '大专',
  '大专以下'
];

export const historyRecords = {
  interview: [
    { id: 1, jobName: '算法工程师' },
    { id: 2, jobName: '数据分析师' },
    { id: 3, jobName: '后端工程师' },
    { id: 4, jobName: '前端工程师' }
  ],
  review: [
    { id: 5, jobName: '产品经理' },
    { id: 6, jobName: '运营专员' },
    { id: 7, jobName: '市场营销' }
  ],
  exam: [
    { id: 8, jobName: '笔试题库1' },
    { id: 9, jobName: '笔试题库2' },
    { id: 10, jobName: '笔试题库3' }
  ],
  salary: [
    { id: 11, jobName: '薪资谈判1' },
    { id: 12, jobName: '薪资谈判2' }
  ]
};

export const jobMatchData = [
  {
    company: '腾讯',
    tags: ['互联网', 'AI', '上市公司'],
    jobs: [
      {
        id: 1,
        title: 'AI算法工程师',
        degree: '本科',
        batch: '春招',
        graduate: '2025届',
        major: '计算机科学',
        city: '深圳',
        requirement: '1 熟悉 Java 或 Python\n2 了解算法与数据结构\n3 有项目经验优先',
        description: '负责公司 AI 产品研发\n参与系统架构设计\n优化算法模型性能'
      },
      {
        id: 2,
        title: '数据分析师',
        degree: '本科',
        batch: '春招补录',
        graduate: '2025届',
        major: '数据科学',
        city: '深圳',
        requirement: '1 熟悉 SQL 和数据分析\n2 了解统计学基础\n3 有 BI 工具使用经验',
        description: '负责数据分析和挖掘\n构建数据模型\n支持业务决策'
      }
    ]
  },
  {
    company: '字节跳动',
    tags: ['互联网', '技术', '上市公司'],
    jobs: [
      {
        id: 3,
        title: '后端开发工程师',
        degree: '本科',
        batch: '春招',
        graduate: '2025届',
        major: '软件工程',
        city: '北京',
        requirement: '1 熟悉 Go 或 Java\n2 了解分布式系统\n3 有大规模系统经验优先',
        description: '负责后端服务开发\n参与系统设计和优化\n处理高并发场景'
      },
      {
        id: 4,
        title: '前端开发工程师',
        degree: '本科',
        batch: '春招',
        graduate: '2025届',
        major: '计算机科学',
        city: '北京',
        requirement: '1 熟悉 React 或 Vue\n2 了解前端性能优化\n3 有大型项目经验',
        description: '负责前端页面开发\n优化用户体验\n参与产品迭代'
      }
    ]
  },
  {
    company: '阿里巴巴',
    tags: ['互联网', '电商', '上市公司'],
    jobs: [
      {
        id: 5,
        title: '产品经理',
        degree: '本科',
        batch: '春招',
        graduate: '2025届',
        major: '计算机科学',
        city: '杭州',
        requirement: '1 具有产品思维\n2 了解互联网产品\n3 有数据分析能力',
        description: '负责产品规划和设计\n推动产品上线\n收集用户反馈'
      },
      {
        id: 6,
        title: '运营专员',
        degree: '本科',
        batch: '春招补录',
        graduate: '2025届',
        major: '市场营销',
        city: '杭州',
        requirement: '1 具有运营意识\n2 了解用户增长\n3 有数据分析能力',
        description: '负责用户运营\n策划营销活动\n分析运营数据'
      }
    ]
  }
];

export const jobDetails = [
  {
    id: 1,
    title: '2025腾讯校园招聘专场',
    logo: 'https://picsum.photos/80/80?random=101',
    tags: ['互联网', '大厂', '校招'],
    views: '1.2万人查看',
    session: '24/25/26应届毕业生',
    education: '博士 / 硕士',
    time: '2025-08-08 至 2025-10-10',
    applyUrl: 'www.tencent.com',
    positions: [
      '算法工程师',
      '数据分析师',
      '后端开发',
      '产品经理',
      '测试工程师',
      '运维工程师'
    ],
    description: `【岗位介绍】
腾讯2025校园招聘火热进行中，诚邀优秀应届毕业生加入。

【岗位职责】
1. 负责公司核心业务系统的开发与维护
2. 参与技术方案设计与评审
3. 优化系统性能，提升用户体验

【岗位要求】
1. 计算机相关专业本科及以上学历
2. 扎实的编程基础，熟悉常用算法和数据结构
3. 良好的团队协作能力和学习能力

【招聘流程】
简历筛选 → 笔试 → 面试 → offer发放`,
    companyName: '腾讯科技有限公司',
    companyLogo: 'https://picsum.photos/80/80?random=101',
    companyTags: ['互联网', '大厂', '10000+人']
  },
  {
    id: 2,
    title: '字节跳动2025技术招聘',
    logo: 'https://picsum.photos/80/80?random=102',
    tags: ['互联网', '技术'],
    views: '8500人查看',
    session: '25/26应届毕业生',
    education: '本科 / 硕士',
    time: '2025-07-01 至 2025-09-30',
    applyUrl: 'www.bytedance.com',
    positions: [
      '前端工程师',
      '后端工程师',
      '算法工程师',
      'iOS开发',
      'Android开发'
    ],
    description: `【岗位介绍】
字节跳动2025技术岗位招聘，欢迎技术人才加入。

【岗位职责】
1. 参与产品功能开发
2. 代码review和技术分享
3. 持续优化产品性能

【岗位要求】
1. 本科及以上学历
2. 熟悉至少一门编程语言
3. 有良好的代码习惯

【招聘流程】
在线投递 → 技术面试 → HR面试 → offer`,
    companyName: '字节跳动科技有限公司',
    companyLogo: 'https://picsum.photos/80/80?random=102',
    companyTags: ['互联网', '大厂', '5000+人']
  }
];
