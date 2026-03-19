import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Course, CategoryTab } from '../../types';
import { CourseCard } from '../CourseCard';

interface CourseSectionProps {
  categories: CategoryTab[];
  courses: Course[];
  defaultTab?: string;
}

interface TreeNode {
  title: string;
  children?: TreeNode[];
}

const examBankTree: TreeNode[] = [
  {
    title: '行测题库',
    children: [
      { title: '言语理解', children: [{ title: '逻辑填空真题' }, { title: '阅读理解真题' }] },
      { title: '数量关系', children: [{ title: '数字推理练习' }, { title: '数学运算练习' }] },
      { title: '判断推理', children: [{ title: '图形推理' }, { title: '逻辑判断' }] }
    ]
  },
  {
    title: '申论题库',
    children: [
      { title: '归纳概括', children: [{ title: '要点提炼练习' }] },
      { title: '综合分析', children: [{ title: '分析类题目' }] },
      { title: '文章写作', children: [{ title: '大作文练习' }, { title: '小作文练习' }] }
    ]
  },
  {
    title: '专业知识题库',
    children: [
      { title: '经济类', children: [{ title: '宏观经济' }, { title: '微观经济' }] },
      { title: '管理类', children: [{ title: '管理学基础' }] }
    ]
  }
];

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
          depth === 0 ? 'font-semibold' : depth === 1 ? 'font-medium' : ''
        }`}
        style={{ paddingLeft }}
      >
        <span className={`text-sm ${
          depth === 0 ? 'text-text-primary' :
          depth === 1 ? 'text-text-secondary' :
          'text-text-tertiary'
        }`}>
          {depth > 0 && <span className="mr-1 text-gray-300">─</span>}
          {node.title}
        </span>
        {hasChildren && (
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 mr-3 ${expanded ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
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

export const CourseSection = ({ categories, courses, defaultTab }: CourseSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(defaultTab || categories[0]?.id || '');
  const navigate = useNavigate();

  const handleCourseClick = (courseId: number) => {
    if (activeCategory === 'analysis') {
      navigate('/exam/analysis');
    } else if (activeCategory === 'handbook') {
      navigate('/knowledge/manual');
    } else if (activeCategory === 'recommend') {
      navigate(`/product/${courseId}`);
    }
  };

  const isExamBank = activeCategory === 'exam';

  return (
    <div>
      {/* Category Tabs */}
      <div className="px-4">
        <div className="w-full p-2 border-b border-gray-200 bg-white rounded-lg">
          <div className="flex justify-center gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors relative ${
                  activeCategory === category.id
                    ? 'text-primary'
                    : 'text-text-secondary'
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-sm" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        {isExamBank ? (
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            {examBankTree.map((node, i) => (
              <TreeItem key={i} node={node} depth={0} onLeafClick={() => navigate('/exam/1')} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div key={course.id} onClick={() => handleCourseClick(course.id)}>
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-text-tertiary">
                <p>暂无课程</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
