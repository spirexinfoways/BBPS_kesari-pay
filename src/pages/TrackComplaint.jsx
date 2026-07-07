import React, { useState } from 'react';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const TrackComplaint = () => {
  const [complaintId, setComplaintId] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (complaintId) {
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto relative">
          
          <div className="absolute top-8 right-8 hidden md:block">
            <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">Track Complaint Status</h1>
          <p className="text-slate-500 mb-8 font-medium text-sm">
            Check the status of a registered complaint in real-time.
          </p>

          <form onSubmit={handleTrack} className="max-w-4xl">
            
            {/* Type of Complaint */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Type of Complaint
              </label>
              <div className="border border-gray-200 rounded-xl p-3.5 bg-[#f8fafc]">
                <label className="flex items-center cursor-pointer w-max">
                  <input 
                    type="radio" 
                    name="complaintType" 
                    value="Transaction"
                    defaultChecked
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 accent-orange-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-bold text-slate-800">Transaction</span>
                </label>
              </div>
            </div>

            {/* Complaint ID Field */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Complaint ID
              </label>
              <input 
                type="text" 
                placeholder="e.g. COM198374928374"
                value={complaintId}
                onChange={(e) => {
                  setComplaintId(e.target.value);
                  setHasSearched(false);
                }}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-700 font-medium bg-[#f8fafc] ${hasSearched ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                required
              />
              {hasSearched && (
                <p className="text-red-500 text-xs font-medium mt-2">
                  Complaint not found.
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-orange-500/20 transition-all text-center"
            >
              Track Status
            </button>
          </form>

        </div>
      </main>
    </div>
  );
};

export default TrackComplaint;
