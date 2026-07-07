import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const FetchBill = () => {
  const navigate = useNavigate();
  const { id, providerId } = useParams();
  
  const [billerNumber, setBillerNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleFetch = (e) => {
    e.preventDefault();
    navigate(`/category/${id}/provider/${providerId}/pay`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          {/* Top Bar: Back Button and Bharat Connect */}
          <div className="flex justify-between items-center mb-8 relative">
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-xl shadow-sm border border-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Billers
            </button>
            
            <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain hidden md:block" />
          </div>

          <h1 className="text-3xl font-bold text-[#1a1f36] mb-2">Fetch Bill</h1>
          <p className="text-slate-500 mb-8 font-medium">
            Enter customer registration details to fetch your current outstanding bill.
          </p>

          <form onSubmit={handleFetch} className="max-w-xl">
            
            <div className="mb-2">
              <label className="block text-sm font-bold text-slate-800 mb-2">
                Mobile Number
              </label>
              <input 
                type="text" 
                placeholder="9898990084"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-slate-700 font-medium"
                defaultValue="9898990084"
              />
            </div>
            <p className="text-[11px] text-slate-400 font-semibold mb-6">
              UAT Fetch & Pay: Use Mobile 9898990084
            </p>

            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 mb-8">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 pb-4 border-b border-gray-200">
                UAT Parameters Config
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Param: a</label>
                  <input type="text" defaultValue="10" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Param: a b</label>
                  <input type="text" defaultValue="20" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Param: a b c</label>
                  <input type="text" defaultValue="30" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Param: a b c d</label>
                  <input type="text" defaultValue="40" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Param: a b c d e</label>
                <input type="text" defaultValue="50" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700" />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all text-center"
            >
              Fetch Bill Details
            </button>
          </form>

        </div>
      </main>
    </div>
  );
};

export default FetchBill;
