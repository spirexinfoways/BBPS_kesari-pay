import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../assets/header-logo.jpeg';
import bMnemonicLogo from '../../assets/b-mnemonic.png';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHomeActive = path === '/' || path.includes('/category/');
  const isTransactionsActive = path.includes('/transactions');
  const isTicketsActive = path.includes('/tickets');

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className=" max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <Link to="/" className="flex items-baseline">
            <img src={headerLogo} alt="Smile Money" className="h-12 object-contain" />
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-8 h-full items-center">
          <div className="flex flex-col items-center justify-center h-full pt-1 cursor-default">
            <img src={bMnemonicLogo} alt="Bill Payment Icon" className="h-7 w-7 mb-1 object-contain" />
            <span className="text-xs font-bold text-gray-900">Bill Payment</span>
          </div>
          
          <Link to="/" className={`font-semibold text-sm flex items-center h-full border-b-2 ${path === '/' ? 'border-orange-500 text-slate-900' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
            Home
          </Link>
          
          <div className="relative group h-full flex items-center">
            <div className={`font-semibold text-sm flex items-center h-full cursor-pointer border-b-2 ${isTransactionsActive ? 'border-orange-500 text-slate-900' : 'border-transparent text-gray-600 group-hover:text-gray-900'}`}>
              Transactions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-0 w-44 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link to="/transactions/search" className="block px-4 py-2 text-sm text-center font-medium text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                  Search Transaction
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative group h-full flex items-center">
            <div className={`font-semibold text-sm flex items-center h-full cursor-pointer border-b-2 transition-colors ${isTicketsActive ? 'border-orange-500 text-slate-900' : 'border-transparent text-gray-600 group-hover:text-orange-500'}`}>
              Tickets
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Tickets Dropdown */}
            <div className="absolute top-[100%] right-0 mt-0 w-44 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link to="/tickets/raise" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                  Raise Complaint
                </Link>
                <Link to="/tickets/track" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                  Track Complaint
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
