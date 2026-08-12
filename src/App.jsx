import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillPayment from './pages/BillPayment';
import CategoryDetails from './pages/CategoryDetails';
import FetchBill from './pages/FetchBill';
import PayBill from './pages/PayBill';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentReceipt from './pages/PaymentReceipt';
import SearchTransaction from './pages/SearchTransaction';
import RaiseComplaint from './pages/RaiseComplaint';
import TrackComplaint from './pages/TrackComplaint';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BillPayment />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/category/:id/provider/:providerId/fetch" element={<FetchBill />} />
        <Route path="/category/:id/provider/:providerId/pay" element={<PayBill />} />
        <Route path="/category/:id/provider/:providerId/success" element={<PaymentSuccess />} />
        <Route path="/category/:id/provider/:providerId/receipt" element={<PaymentReceipt />} />
        <Route path="/transactions/search" element={<SearchTransaction />} />
        <Route path="/tickets/raise" element={<RaiseComplaint />} />
        <Route path="/tickets/track" element={<TrackComplaint />} />
      </Routes>
    </Router>
  );
}

export default App;
