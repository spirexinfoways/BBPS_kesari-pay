import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import bAssuredLogo from '../assets/b-assured-standard.png';
import transaction from '../data/transaction';

const ReceiptRow = ({ label, value, boldValue = false, valueColor = "text-slate-500", labelColor = "text-slate-800" }) => (
  <div className="grid grid-cols-2 gap-4 py-3 border-b border-dashed border-gray-200 last:border-0">
    <span className={`${labelColor} font-bold text-sm`}>{label}</span>
    <span className={`${valueColor} ${boldValue ? 'font-bold' : 'font-medium'} text-sm`}>{value}</span>
  </div>
);

const PaymentReceipt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">

        {/* Top Bar: Back Button */}
        <div className="flex items-center mb-6 print:hidden">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-xl shadow-sm border border-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Payment Status
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

          {/* Receipt Header: title and B-ASSURED mark */}
          <div className="flex items-start justify-between border-b border-gray-200 pb-6 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1f36] mb-1">Payment Receipt</h1>
              <p className="text-sm text-slate-500 font-medium">
                Transaction completed securely via Bharat Connect
              </p>
              <span className="inline-block mt-3 bg-[#dcfce7] text-[#16a34a] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {transaction.txnStatus}
              </span>
            </div>

            <img
              src={bAssuredLogo}
              alt="Bharat Connect Assured"
              className="w-28 h-28 object-contain shrink-0"
            />
          </div>

          <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase mb-4">
            TRANSACTION DETAILS
          </h3>

          <div className="flex flex-col">
            <ReceiptRow label="B-Connect Txn ID" value={transaction.txnId} boldValue={true} valueColor="text-slate-800" />
            <ReceiptRow label="Biller ID" value={transaction.billerId} />
            <ReceiptRow label="Biller Name" value={transaction.billerName} />
            <ReceiptRow label="Customer Name" value={transaction.customerName} />
            <ReceiptRow label="Customer Mobile" value={transaction.customerMobile} />
            <ReceiptRow label="Bill Date" value={transaction.billDate} />
            <ReceiptRow label="Bill Period" value={transaction.billPeriod} />
            <ReceiptRow label="Bill Number" value={transaction.billNumber} />
            <ReceiptRow label="Due Date" value={transaction.dueDate} />
            <ReceiptRow label="Transaction Date/Time" value={transaction.txnDateTime} />
            <ReceiptRow label="Initiating Channel" value={transaction.initiatingChannel} />
            <ReceiptRow label="Payment Mode" value={transaction.paymentMode} />
            <ReceiptRow label="Approval Number" value={transaction.approvalNumber} />
            <ReceiptRow label="Transaction Status" value={transaction.txnStatus} labelColor="text-[#16a34a]" valueColor="text-[#16a34a]" boldValue={true} />
          </div>

          {/* Amount breakdown, including the Customer Convenience Fee */}
          <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase mt-8 mb-4">
            AMOUNT BREAKDOWN
          </h3>

          <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between text-sm items-center border-b border-gray-200 pb-3">
              <span className="text-slate-800 font-bold">Bill Amount</span>
              <span className="text-slate-500 font-medium">{transaction.billAmount}</span>
            </div>
            <div className="flex justify-between text-sm items-center border-b border-gray-200 py-3">
              <span className="text-orange-500 font-bold">Customer Convenience Fee (CCF)</span>
              <span className="text-orange-500 font-medium">{transaction.ccf}</span>
            </div>
            <div className="flex justify-between text-sm items-center border-b border-gray-200 py-3">
              <span className="text-slate-800 font-bold">CCF Status</span>
              <span className="text-[#16a34a] font-bold">{transaction.ccfStatus}</span>
            </div>
            <div className="flex justify-between text-base items-center pt-3">
              <span className="font-bold text-slate-800">Total Amount Paid</span>
              <span className="font-bold text-orange-500">{transaction.totalPaid}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex-1 bg-[#f26e24] hover:bg-[#e05d15] text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
            >
              Print / Download Receipt
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-[#111827] hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md text-center"
            >
              Pay Another Bill
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentReceipt;
