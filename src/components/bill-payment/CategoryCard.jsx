import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ icon: Icon, title }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/category/${title.toLowerCase().replace(/\s+/g, '-')}`)}
      className="flex flex-col items-center justify-center p-3 sm:p-4 h-32 sm:h-40 w-full border border-gray-100 rounded-xl hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer bg-white group"
    >
      <div className="mb-2 sm:mb-3 text-slate-500 group-hover:text-orange-500 transition-colors">
        <Icon size={32} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-slate-700 text-center leading-tight">{title}</span>
    </div>
  );
};

export default CategoryCard;
