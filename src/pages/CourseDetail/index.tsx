import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

// 课程数据（替换所有问号为实际中文）
const courseData = {
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  description: '本课程详细讲解了核心知识点的应用方法，包含多个实战案例和配套练习，帮助学员快速掌握相关技能，提升应试能力和实操水平。',
  images: ['https://picsum.photos/400/200?random=30'],
  catalog: [
    {
      title: '基础入门章节',
      children: [
        { title: '核心概念讲解', children: [{ title: '概念定义' }, { title: '应用场景' }] },
        { title: '基础操作演示', children: [{ title: '第一步' }, { title: '第二步' }] }
      ]
    },
    {
      title: '进阶提升章节',
      children: [
        { title: '高级技巧讲解', children: [{ title: '技巧解析' }] },
        { title: '实战案例分析', children: [{ title: '案例1' }, { title: '案例2' }] }
      ]
    }
  ],
  materials: [
    { name: '课程讲义.pdf', icon: '📄' },
    { name: '课后作业.docx', icon: '📝' },
    { name: '数据表格.xlsx', icon: '📊' },
    { name: '补充资料.pdf', icon: '📄' }
  ],
  exercises: [
    {
      title: '基础练习题',
      children: [
        { title: '概念巩固练习', children: [{ title: '习题1：选择题' }, { title: '习题2：填空题' }] },
        { title: '操作实操练习', children: [{ title: '习题1：实操题' }] }
      ]
    },
    {
      title: '进阶练习题',
      children: [
        { title: '综合应用题', children: [{ title: '习题1：案例题' }, { title: '习题2：分析题' }] }
      ]
    }
  ]
};

// 树形节点类型定义
interface TreeNode {
  title: string;
  children?: TreeNode[];
}

// 树形组件（修复层级符号，替换问号为└）
const TreeItem = ({ node, depth = 0, onLeafClick }: { node: TreeNode; depth?: number; onLeafClick?: () => void }) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = depth * 16 + 12;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    } else if (onLeafClick) {
      onLeafClick();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between py-2.5 border-b border-gray-50 active:opacity-70 ${
          depth === 0 ? 'font-semibold text-text-primary' :
          depth === 1 ? 'font-medium text-text-secondary' :
          'text-text-tertiary'
        }`}
        style={{ paddingLeft }}
      >
        <span className={`text-sm ${
          depth === 0 ? 'text-text-primary' :
          depth === 1 ? 'text-text-secondary' :
          'text-text-tertiary'
        }`}>
          {/* 修复层级符号：将问号替换为树形层级符 */}
          {depth > 0 && <span className="mr-1 text-gray-300">└</span>}
          {node.title}
        </span>
        {hasChildren && (
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 mr-3 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      {expanded && hasChildren && (
        <div>
          {node.children!.map((child, i) => (
            <TreeItem key={i} node={child} depth={depth + 1} onLeafClick={onLeafClick} />
          ))}
        </div>
      )}
    </div>
  );
};

// 标签栏数据（纯中文）
const tabs = [
  { id: 'intro', label: '课程介绍' },
  { id: 'catalog', label: '课程目录' },
  { id: 'materials', label: '资料下载' },
  { id: 'exercises', label: '配套练习' }
];

export const CourseDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('intro');

  const handleExerciseLeafClick = () => {
    navigate('/exam/1');
  };

  return (
    // 强制指定中文字体，兜底保障
    <div className="min-h-screen bg-bg" style={{
      fontFamily: '"PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif',
      fontSize: '14px'
    }}>
      <div className="max-w-sm mx-auto">
        <BackHeader />

        {/* 视频播放区域 */}
        <div className="w-full bg-black" style={{ height: '220px' }}>
          <video
            src={courseData.videoUrl}
            controls
            className="w-full h-full object-contain"
          />
        </div>

        {/* 标签栏 */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-xs font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary'
                    : 'text-text-secondary border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 标签内容区 */}
        <div className="px-4 py-4 pb-8">
          {activeTab === 'intro' && (
            <div className="space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">{courseData.description}</p>
              {courseData.images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <img src={img} alt="课程配图" className="w-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'catalog' && (
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              {courseData.catalog.map((node, i) => (
                <TreeItem key={i} node={node} depth={0} />
              ))}
            </div>
          )}

          {activeTab === 'materials' && (
            <div className="space-y-3">
              {courseData.materials.map((file, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 active:opacity-70 transition-opacity"
                >
                  <span className="text-2xl flex-shrink-0">{file.icon}</span>
                  <p className="text-sm text-text-primary flex-1 text-left">{file.name}</p>
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              {courseData.exercises.map((node, i) => (
                <TreeItem key={i} node={node} depth={0} onLeafClick={handleExerciseLeafClick} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};