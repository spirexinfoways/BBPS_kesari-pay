import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ icon: Icon, title }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/category/${title.toLowerCase().replace(/\s+/g, '-')}`)}
      className="flex flex-col items-center justify-center p-4 h-40 w-70 border border-gray-100 rounded-xl hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer bg-white group"
    >
      <div className="mb-3 text-slate-500 group-hover:text-orange-500 transition-colors">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <span className="text-md font-semibold text-slate-700 text-center">{title}</span>
    </div>
  );
};

export default CategoryCard;
