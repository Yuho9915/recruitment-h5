import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="flex gap-3 p-3 bg-white rounded-lg active:opacity-70 transition-opacity cursor-pointer">
      {/* Cover */}
      <div className="flex-shrink-0">
        <img
          src={course.cover}
          alt={course.title}
          className="w-20 h-20 rounded object-cover bg-gray-200"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-sm font-semibold text-text-primary line-clamp-2">
          {course.title}
        </h3>

        {/* Price */}
        <p className="text-sm font-semibold text-red-500">
          ￥{course.price}
        </p>

        {/* Buyers */}
        <p className="text-xs text-text-tertiary">
          {course.buyers}人购买
        </p>
      </div>
    </div>
  );
};
