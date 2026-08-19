import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../assets/header-logo.jpeg';
import bMnemonicLogo from '../../assets/b-mnemonic.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const isHomeActive = path === '/' || path.includes('/category/');
  const isTransactionsActive = path.includes('/transactions');
  const isTicketsActive = path.includes('/tickets');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex items-baseline">
              <img src={headerLogo} alt="Smile Money" className="h-10 sm:h-12 object-contain" />
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className="hidden md:flex space-x-8 h-full items-center">
            <a href="https://bbps.kesaripay.com" className="flex flex-col items-center justify-center h-full pt-1 cursor-pointer hover:opacity-80 transition-opacity">
              <img src={bMnemonicLogo} alt="Bill Payment Icon" className="h-7 w-7 mb-1 object-contain" />
              <span className="text-xs font-bold text-gray-900">Bill Payment</span>
            </a>
            
            <Link to="/" className={`font-semibold text-sm flex items-center h-full border-b-2 ${isHomeActive ? 'border-orange-500 text-slate-900' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
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
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none bg-gray-50 p-2 rounded-lg active:bg-gray-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
          <span className="text-lg font-bold text-slate-800">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-gray-400 hover:text-gray-600 focus:outline-none bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-8 bg-white">
          <div>
            <Link 
              to="/" 
              className={`flex items-center text-lg font-bold ${isHomeActive ? 'text-orange-500' : 'text-slate-700 hover:text-orange-500'} transition-colors`}
            >
              Home
            </Link>
          </div>
          
          <div className="space-y-4">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${isTransactionsActive ? 'text-orange-500' : 'text-slate-400'}`}>
              Transactions
            </h3>
            <div className="flex flex-col space-y-3 pl-2 border-l-2 border-gray-100">
              <Link 
                to="/transactions/search" 
                className="text-base font-medium text-slate-600 hover:text-orange-500 transition-colors"
              >
                Search Transaction
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${isTicketsActive ? 'text-orange-500' : 'text-slate-400'}`}>
              Tickets
            </h3>
            <div className="flex flex-col space-y-3 pl-2 border-l-2 border-gray-100">
              <Link 
                to="/tickets/raise" 
                className="text-base font-medium text-slate-600 hover:text-orange-500 transition-colors"
              >
                Raise Complaint
              </Link>
              <Link 
                to="/tickets/track" 
                className="text-base font-medium text-slate-600 hover:text-orange-500 transition-colors"
              >
                Track Complaint
              </Link>
            </div>
          </div>
        </div>

        <a href="https://bbps.kesaripay.com" className="block p-6 border-t border-gray-100 bg-gray-50 mt-auto hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
             <img src={bMnemonicLogo} alt="Bill Payment Icon" className="h-8 w-8 object-contain" />
             <div>
                <p className="text-sm font-bold text-slate-800">Bharat Connect</p>
                <p className="text-xs text-slate-500 font-medium">Bill Payment System</p>
             </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Header;
