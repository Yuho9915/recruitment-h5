# 移动端H5招聘平台前端原型

一个现代化的移动端招聘平台首页，采用React 18 + Vite + TypeScript + TailwindCSS构建。

## 功能特性

- 🎨 响应式设计，完美适配375px移动设备
- 🔍 搜索框模块，支持跳转搜索页面
- 🎠 Banner轮播，自动切换 + 手势滑动
- 🏷️ 分类标签，快速筛选招聘信息
- 🔽 筛选弹窗，多维度筛选条件
- 📱 招聘卡片列表，展示企业和岗位信息
- ⚡ 高性能，图片懒加载
- 📦 组件化开发，易于扩展

## 技术栈

- React 18
- Vite
- TypeScript
- TailwindCSS
- React Router
- Mock数据

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:5173`

### 生产构建

```bash
npm run build
```

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 可复用组件
│   ├── SearchBar/
│   ├── BannerCarousel/
│   ├── CategoryTabs/
│   ├── FilterModal/
│   ├── RecruitmentCard/
│   └── RecruitmentList/
├── pages/           # 页面
│   └── Home/
├── mock/            # Mock数据
│   └── data.ts
├── types/           # TypeScript类型定义
│   └── index.ts
├── router/          # 路由配置
│   └── index.tsx
├── App.tsx
├── main.tsx
└── index.css        # 全局样式
```

## 页面设计规范

- 设计宽度：375px
- 最大宽度：375px（居中）
- 背景色：#F6F7F9
- 模块间距：16px
- 主色调：#1677FF

## 核心组件

### SearchBar
搜索框组件，点击跳转到搜索页面

### BannerCarousel
Banner轮播组件，支持自动轮播、手势滑动、指示点

### CategoryTabs
分类标签组件，支持标签切换和筛选弹窗打开

### FilterModal
筛选弹窗组件，支持多维度筛选条件

### RecruitmentCard
招聘卡片组件，展示企业logo、岗位信息、标签等

### RecruitmentList
招聘列表组件，展示多个招聘卡片

## 扩展建议

- 集成真实API接口
- 添加状态管理（Redux/Zustand）
- 实现无限滚动加载
- 添加详情页面
- 集成支付功能
- 添加用户认证

## 浏览器兼容性

- Chrome (最新版)
- Safari (最新版)
- Firefox (最新版)
- Edge (最新版)

## License

MIT
