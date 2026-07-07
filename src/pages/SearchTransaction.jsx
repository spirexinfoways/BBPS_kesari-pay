import React, { useState } from 'react';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const SearchTransaction = () => {
  const [searchType, setSearchType] = useState('txnId');
  
  // Form fields
  const [txnId, setTxnId] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [otp, setOtp] = useState('');
  
  // UI states
  const [hasSearchedTxn, setHasSearchedTxn] = useState(false);
  const [otpRequired, setOtpRequired] = useState(false);
  const [hasSearchedMobile, setHasSearchedMobile] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchType === 'txnId') {
      if (txnId) {
        setHasSearchedTxn(true);
      }
    } else {
      if (!otpRequired) {
        setOtpRequired(true);
      } else {
        setHasSearchedMobile(true);
      }
    }
  };

  const handleTypeChange = (type) => {
    setSearchType(type);
    setHasSearchedTxn(false);
    setOtpRequired(false);
    setHasSearchedMobile(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto relative">
          
          <div className="absolute top-8 right-8 hidden md:block">
            <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain" />
          </div>

          <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Search Transaction Status</h1>
          <p className="text-slate-500 mb-8 font-medium text-sm">
            Look up historical transaction entries using transaction references or customer registration parameters.
          </p>

          {/* Radio Buttons */}
          <div className="flex items-center space-x-6 mb-8">
            <label className="flex items-center cursor-pointer">
              <input 
                type="radio" 
                name="searchType" 
                value="txnId"
                checked={searchType === 'txnId'}
                onChange={() => handleTypeChange('txnId')}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 accent-orange-600 cursor-pointer"
              />
              <span className="ml-2 text-sm font-bold text-slate-800">B-Connect TXN ID</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input 
                type="radio" 
                name="searchType" 
                value="mobile"
                checked={searchType === 'mobile'}
                onChange={() => handleTypeChange('mobile')}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 accent-orange-600 cursor-pointer"
              />
              <span className="ml-2 text-sm font-bold text-slate-800">Mobile Number & Date Range</span>
            </label>
          </div>

          <form onSubmit={handleSearch} className="w-full">
            
            {searchType === 'txnId' ? (
              // B-Connect TXN ID Field
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  B-Connect TXN ID (Received in Pay Response)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. CC015169BAAF00005009"
                  value={txnId}
                  onChange={(e) => {
                    setTxnId(e.target.value);
                    setHasSearchedTxn(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-700 font-medium bg-[#f8fafc] ${hasSearchedTxn ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                />
                {hasSearchedTxn && (
                  <p className="text-red-500 text-xs font-medium mt-2">
                    Transaction not found.
                  </p>
                )}
              </div>
            ) : (
              // Mobile Number & Date Range Fields
              <div className="space-y-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Mobile Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 9898990084"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Date From
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc] appearance-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Date To
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc] appearance-none"
                      />
                    </div>
                  </div>
                </div>

                {otpRequired && (
                  <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl p-6 mt-6">
                    <label className="block text-sm font-bold text-orange-600 mb-2">
                      Enter OTP Verification Code (sent: 123456)
                    </label>
                    <input 
                      type="text" 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-slate-700 font-medium bg-white mb-3"
                    />
                    <div className="flex items-center text-xs font-medium text-orange-700">
                      <span className="mr-1">💡</span> Simulated OTP verification is required for security.
                    </div>
                  </div>
                )}
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-orange-500/20 transition-all text-center mb-8"
            >
              Search Transaction
            </button>
          </form>

          {/* Search Results Area for Mobile Search */}
          {searchType === 'mobile' && hasSearchedMobile && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-[#0f172a]">Search Results</h2>
                <span className="text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  0 results found
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-slate-400 font-medium text-sm">
                  No transactions found for the given criteria.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default SearchTransaction;
