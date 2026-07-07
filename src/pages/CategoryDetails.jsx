import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const CategoryDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Convert URL parameter back to Title Case (e.g., 'cable-tv' -> 'Cable Tv')
  const formatTitle = (str) => {
    if (!str) return 'Category';
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryName = formatTitle(id);

  const providers = [
    {
      name: "OTME (Fetch and Pay)",
      id: "OTME00005XXZ43",
      supported: "Fetch & Pay"
    },
    {
      name: "OTNS (Quick Pay)",
      id: "OTNS00005XXZ43",
      supported: "Quick Pay"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 relative">
          
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mb-6 text-sm"
          >
            <span className="mr-2">←</span> Back to Categories
          </button>

          <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1f36] mb-2">{categoryName} Providers</h1>
              <p className="text-slate-500 text-sm font-medium">
                Choose from our list of registered providers.
              </p>
            </div>
            
            <div className="absolute top-6 right-6 hidden md:block">
              <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain" />
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            {providers.map((provider, idx) => {
              const providerId = provider.name.split(' ')[0].toLowerCase();
              return (
                <div 
                  key={idx} 
                  onClick={() => navigate(`/category/${id}/provider/${providerId}/fetch`)}
                  className="flex justify-between items-center p-5 border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-md transition-all cursor-pointer"
                >
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-800 mb-1.5">{provider.name}</h3>
                    <p className="text-[13px] text-slate-500 font-medium">
                      ID: {provider.id} &bull; Supported: {provider.supported}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#e8f5e9] text-[#2e7d32]">
                      UAT
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
};

export default CategoryDetails;
