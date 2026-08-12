// Mock transaction details shared by the payment success and receipt screens
// so the two views can never drift apart.
export const transaction = {
  txnId: 'CC017LESTEQDOASZIGTM',
  billerId: 'OTME00005XXZ43',
  billerName: 'OTME',
  customerName: 'B-connect',
  customerMobile: '9898990084',
  billDate: '2015-06-14',
  billPeriod: 'june',
  billNumber: '12303',
  dueDate: '2015-06-20',
  billAmount: '₹1000.00',
  ccf: '₹10.00',
  ccfStatus: 'Submitted',
  totalPaid: '₹1010.00',
  txnDateTime: '2026-07-07 12:32:18',
  initiatingChannel: 'AGT',
  paymentMode: 'UPI',
  txnStatus: 'Successful',
  approvalNumber: '91876089',
};

export default transaction;
