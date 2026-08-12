import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import bAssuredLogo from '../assets/b-assured-standard.png';
import mogoSound from '../assets/bharat-connect-mogo.mp3';
import transaction from '../data/transaction';

const ReceiptRow = ({ label, value, boldValue = false, valueColor = "text-slate-500", labelColor = "text-slate-800" }) => (
  <div className="grid grid-cols-2 gap-4 py-3 border-b border-dashed border-gray-200 last:border-0">
    <span className={`${labelColor} font-bold text-sm`}>{label}</span>
    <span className={`${valueColor} ${boldValue ? 'font-bold' : 'font-medium'} text-sm`}>{value}</span>
  </div>
);

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { id, providerId } = useParams();

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
            className="w-28 h-28 object-contain mt-4 md:mt-0 shrink-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Payment Summary */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
              <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase mb-6">
                PAYMENT SUMMARY
              </h3>

              <div className="flex flex-col">
                <ReceiptRow label="B-Connect Txn ID" value={transaction.txnId} boldValue={true} valueColor="text-slate-800" />
                <ReceiptRow label="Biller Name" value={transaction.billerName} />
                <ReceiptRow label="Customer Mobile" value={transaction.customerMobile} />
                <ReceiptRow label="Bill Amount" value={transaction.billAmount} />
                <ReceiptRow label="Customer Convenience Fee (CCF)" value={transaction.ccf} valueColor="text-orange-500" />
                <ReceiptRow label="CCF Status" value={transaction.ccfStatus} valueColor="text-[#16a34a]" boldValue={true} />
                <ReceiptRow label="Total Amount Paid" value={transaction.totalPaid} valueColor="text-orange-500" boldValue={true} />
                <ReceiptRow label="Transaction Date/Time" value={transaction.txnDateTime} />
                <ReceiptRow label="Transaction Status" value={transaction.txnStatus} labelColor="text-[#16a34a]" valueColor="text-[#16a34a]" boldValue={true} />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate(`/category/${id}/provider/${providerId}/receipt`)}
                  className="flex-1 bg-[#f26e24] hover:bg-[#e05d15] text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
                >
                  View Payment Receipt
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-[#111827] hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
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
                  Thank you for payment of {transaction.totalPaid} against {transaction.billerName}, Consumer no {transaction.customerMobile}, B-Connect Txn id {transaction.txnId.slice(0, 12)} on {transaction.txnDateTime} vide {transaction.paymentMode}.
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
