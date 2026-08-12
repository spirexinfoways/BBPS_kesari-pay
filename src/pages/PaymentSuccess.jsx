import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import bAssuredLogo from '../assets/b-assured-standard.png';
import mogoSound from '../assets/bharat-connect-mogo.mp3';

const ReceiptRow = ({ label, value, boldValue = false, valueColor = "text-slate-500", labelColor = "text-slate-800" }) => (
  <div className="grid grid-cols-2 gap-4 py-3 border-b border-dashed border-gray-200 last:border-0">
    <span className={`${labelColor} font-bold text-sm`}>{label}</span>
    <span className={`${valueColor} ${boldValue ? 'font-bold' : 'font-medium'} text-sm`}>{value}</span>
  </div>
);

const PaymentSuccess = () => {
  const navigate = useNavigate();

  // Play the Bharat Connect sonic identity once the success screen appears.
  useEffect(() => {
    const audio = new Audio(mogoSound);
    // Browsers reject autoplay without a prior user gesture on the page; ignore it.
    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Banner */}
        <div className="bg-white border-2 border-[#bbf7d0] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center mr-4 shrink-0">
              <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#16a34a] mb-1">Payment Successful!</h2>
              <p className="text-sm text-slate-500 font-medium">Transaction completed securely via Bharat Connect</p>
            </div>
          </div>
          
          <img
            src={bAssuredLogo}
            alt="Bharat Connect Assured"
            className="w-20 h-20 object-contain mt-4 md:mt-0 shrink-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Transaction Receipt */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
              <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase mb-6">
                TRANSACTION RECEIPT
              </h3>
              
              <div className="flex flex-col">
                <ReceiptRow label="B-Connect Txn ID" value="CC017LESTEQDOASZIGTM" boldValue={true} valueColor="text-slate-800" />
                <ReceiptRow label="Biller ID" value="OTME00005XXZ43" />
                <ReceiptRow label="Biller Name" value="OTME" />
                <ReceiptRow label="Customer Name" value="B-connect" />
                <ReceiptRow label="Customer Mobile" value="9898990084" />
                <ReceiptRow label="Bill Date" value="2015-06-14" />
                <ReceiptRow label="Bill Period" value="june" />
                <ReceiptRow label="Bill Number" value="12303" />
                <ReceiptRow label="Due Date" value="2015-06-20" />
                <ReceiptRow label="Bill Amount" value="₹1000.00" />
                <ReceiptRow label="Customer Convenience Fee (CCF)" value="₹10.00" />
                <ReceiptRow label="CCF Status" value="Submitted" valueColor="text-[#16a34a]" boldValue={true} />
                <ReceiptRow label="Total Amount Paid" value="₹1010.00" valueColor="text-orange-500" boldValue={true} />
                <ReceiptRow label="Transaction Date/Time" value="2026-07-07 12:32:18" />
                <ReceiptRow label="Initiating Channel" value="AGT" />
                <ReceiptRow label="Payment Mode" value="UPI" />
                <ReceiptRow label="Transaction Status" value="Successful" labelColor="text-[#16a34a]" valueColor="text-[#16a34a]" boldValue={true} />
                <ReceiptRow label="Approval Number" value="91876089" />
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/')}
                  className="w-full bg-[#111827] hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
                >
                  Pay Another Bill
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated SMS */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e293b] rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  SIMULATED SMS NOTIFICATION
                </h3>
                <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  Sent
                </span>
              </div>
              
              <div className="bg-[#0f172a] rounded-xl p-5 border border-slate-700/50">
                <p className="text-slate-300 text-[13px] font-mono leading-relaxed">
                  Thank you for payment of ₹1010.00 against OTME, Consumer no 9898990084, B-Connect Txn id CC017LESTEQD on 2026-07-07 12:32:18 vide UPI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PaymentSuccess;
