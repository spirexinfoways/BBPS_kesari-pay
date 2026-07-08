import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const PayBill = () => {
  const navigate = useNavigate();
  const { id, providerId } = useParams();
  
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  const handlePay = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      navigate(`/category/${id}/provider/${providerId}/success`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          
          {/* Top Bar: Back Button and Bharat Connect */}
          <div className="flex justify-between items-center mb-8 relative">
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-xl shadow-sm border border-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Fetch Bill
            </button>
            
            <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain hidden md:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Amount Options & Payment Mode */}
            <div className="lg:col-span-7">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1f36] mb-2">Select Amount Options</h1>
              <p className="text-slate-500 mb-6 font-medium text-sm">
                Review the bill options. You can pay individual parts or select multiple components of the invoice.
              </p>

              <form onSubmit={handlePay}>
                <div className="space-y-4 mb-6">
                  
                  {/* Option 1 */}
                  <label className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer bg-white hover:border-orange-300 transition-colors shadow-sm">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1 cursor-pointer accent-orange-500" />
                    <div className="ml-3 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">Base Bill Amount</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">Standard usage cost</p>
                      </div>
                      <span className="font-bold text-slate-800">₹1000</span>
                    </div>
                  </label>

                  {/* Option 2 */}
                  <label className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1 cursor-pointer accent-orange-500" />
                    <div className="ml-3 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">Late Payment Fee</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">Surcharge for past due settlement</p>
                      </div>
                      <span className="font-bold text-slate-800">₹50</span>
                    </div>
                  </label>

                  {/* Option 3 */}
                  <label className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1 cursor-pointer accent-orange-500" />
                    <div className="ml-3 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">Additional Charges</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">Taxes and supplementary network fees</p>
                      </div>
                      <span className="font-bold text-slate-800">₹20</span>
                    </div>
                  </label>

                  {/* Option 4 */}
                  <label className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-orange-300 transition-colors shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1 cursor-pointer accent-orange-500" />
                    <div className="ml-3 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">Fixed Charges</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">Recurring fixed hardware maintenance cost</p>
                      </div>
                      <span className="font-bold text-slate-800">₹10</span>
                    </div>
                  </label>

                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Payment Mode
                  </label>
                  <select 
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 text-slate-700 font-medium appearance-none bg-white shadow-sm"
                  >
                    <option>UPI</option>
                    <option>Net Banking</option>
                    <option>Debit/Credit Card</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#f26e24] hover:bg-[#e05d15] text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
                >
                  Proceed to Pay Bill
                </button>
              </form>
            </div>

            {/* Right Column: Customer Details */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#1a1f36] mb-6">
                  Customer Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Biller ID</span>
                    <span className="text-slate-500 font-medium">OTME00005XX743</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Biller Name</span>
                    <span className="text-slate-500 font-medium">OTME</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Customer Name</span>
                    <span className="text-slate-500 font-medium">B-connect</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Customer Mobile</span>
                    <span className="text-slate-500 font-medium">9898990084</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Bill Date</span>
                    <span className="text-slate-500 font-medium">2015-06-14</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Bill Period</span>
                    <span className="text-slate-500 font-medium">june</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Bill Number</span>
                    <span className="text-slate-500 font-medium">12303</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-gray-100 pb-3">
                    <span className="text-slate-600 font-medium">Due Date</span>
                    <span className="text-slate-500 font-medium">2015-06-20</span>
                  </div>
                  <div className="flex justify-between text-sm items-center pt-2">
                    <span className="text-orange-500 font-medium">Customer Convenience Fee</span>
                    <span className="text-orange-500 font-medium">₹10.00</span>
                  </div>
                  <div className="flex justify-between text-base items-center pt-2 mt-2">
                    <span className="font-bold text-slate-800">Total Amount</span>
                    <span className="font-bold text-orange-500">₹1010.00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PayBill;
