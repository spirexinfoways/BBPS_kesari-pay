import React, { useState } from 'react';
import Header from '../components/layout/Header';
import bharatConnectLogo from '../assets/bharat-connect-logo.jpeg';

const RaiseComplaint = () => {
  const [searchBy, setSearchBy] = useState('txnId');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  // Form state
  const [txnId, setTxnId] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [disposition, setDisposition] = useState('Transaction Successful, Amount Debited but services not received');
  const [description, setDescription] = useState('');

  const dispositions = [
    "Transaction Successful, Amount Debited but services not received",
    "Transaction Successful, Amount Debited but Service Disconnected or Service Stopped",
    "Transaction Successful, Amount Debited but Late Payment Surcharge Charges add in next bill",
    "Erroneously paid in wrong account",
    "Duplicate Payment",
    "Erroneously paid the wrong amount",
    "Payment information not received from Biller or Delay in receiving payment information from the Biller",
    "Bill Paid but Amount not adjusted or still showing due amount"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random complaint ID matching the format in screenshot COM083156251456
    const randomId = "COM" + Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
    setComplaintId(randomId);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto relative">

          <div className="absolute top-8 right-8 hidden md:block">
            <img src={bharatConnectLogo} alt="Bharat Connect" className="h-12 object-contain" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">Raise Complaint</h1>
          <p className="text-slate-500 mb-8 font-medium text-sm">
            Have issues with a transaction? Lodge a standard BBPS dispute for investigation.
          </p>

          <form onSubmit={handleSubmit} className="max-w-4xl">

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

            {/* Search By */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Search By
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchBy"
                    value="txnId"
                    checked={searchBy === 'txnId'}
                    onChange={() => {
                      setSearchBy('txnId');
                      setIsSubmitted(false);
                    }}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 accent-orange-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-bold text-slate-800">B-Connect Transaction ID</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchBy"
                    value="mobile"
                    checked={searchBy === 'mobile'}
                    onChange={() => {
                      setSearchBy('mobile');
                      setIsSubmitted(false);
                    }}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 accent-orange-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-bold text-slate-800">Mobile No. & Date</span>
                </label>
              </div>
            </div>

            {/* Dynamic Search Fields */}
            {searchBy === 'txnId' ? (
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  B-Connect Transaction ID (Received in Pay Response)
                </label>
                <input
                  type="text"
                  placeholder="e.g. CC015169BAAF00005009"
                  value={txnId}
                  onChange={(e) => setTxnId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc]"
                  required
                />
              </div>
            ) : (
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
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Date From
                    </label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Date To
                    </label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Complaint Disposition */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Complaint Disposition <span className="text-red-500">*</span>
              </label>
              <select
                value={disposition}
                onChange={(e) => setDisposition(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-white"
                required
              >
                {dispositions.map((disp, idx) => (
                  <option key={idx} value={disp}>{disp}</option>
                ))}
              </select>
            </div>

            {/* Complaint Description */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Complaint Description
              </label>
              <textarea
                placeholder="Detail the issue you are facing..."
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 font-medium bg-[#f8fafc] resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-orange-500/20 transition-all text-center mb-8"
            >
              Submit Complaint
            </button>
          </form>

          {/* Success State */}
          {isSubmitted && (
            <div className="mt-8 border-t border-gray-200 pt-8 animate-in fade-in duration-300 max-w-4xl">
              <h2 className="text-lg font-bold text-[#16a34a] mb-6">Complaint Registered successfully</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                {/* XML Response */}
                <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-5 overflow-x-auto h-full">
                  <pre className="text-[10px] sm:text-xs text-slate-700 font-mono leading-relaxed">
                    {`<complaintResponse>
  <complaintId>${complaintId}</complaintId>
  <complaintAssigned>Agent-Institution</complaintAssigned>
</complaintResponse>`}
                  </pre>
                </div>

                {/* SMS Confirmation */}
                <div className="bg-[#1e293b] rounded-xl p-6 shadow-sm h-full">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      SMS CONFIRMATION
                    </h3>
                    <span className="bg-orange-500/20 text-orange-500 text-[9px] font-bold px-2 py-1 rounded uppercase">
                      SENT
                    </span>
                  </div>

                  <div className="bg-[#0f172a] rounded-lg p-4 border border-slate-700/50">
                    <p className="text-slate-300 text-xs font-mono leading-relaxed">
                      Your Complaint has been registered successfully for B-Connect Txn id {searchBy === 'txnId' ? txnId : '564651321'}. Your Complaint ID is {complaintId}. You can track status of your complaint using your Complaint ID.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default RaiseComplaint;
