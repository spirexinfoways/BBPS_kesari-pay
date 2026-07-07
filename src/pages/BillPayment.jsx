import React from 'react';
import Header from '../components/layout/Header';
import SearchBar from '../components/bill-payment/SearchBar';
import CategoryGrid from '../components/bill-payment/CategoryGrid';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const BillPayment = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 relative">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Select Bill Category</h1>
              <p className="text-gray-500 text-sm">
                Choose a category to pay your utility, telecom, or government bills through Bharat Connect.
              </p>
            </div>
            
            <div className="absolute top-8 right-8 hidden md:block">
              <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain" />
            </div>
          </div>

          <SearchBar />
          
          <CategoryGrid />
          
        </div>
      </main>
    </div>
  );
};

export default BillPayment;
