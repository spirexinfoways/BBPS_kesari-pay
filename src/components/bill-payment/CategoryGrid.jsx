import React from 'react';
import CategoryCard from './CategoryCard';
import { 
  Users, Wifi, Monitor, Building2, CreditCard, 
  Satellite, Receipt, GraduationCap, Zap, BatteryCharging, 
  CarFront, Truck, Flame, Home, Shield, 
  Phone, CircleDollarSign, Fuel, Smartphone, SignalHigh, 
  Landmark, Banknote, Umbrella, TrainFront, BarChart3, 
  Key, RefreshCw, Droplet 
} from 'lucide-react';

const categories = [
  { id: 1, title: 'Agent Collection', icon: Users },
  { id: 2, title: 'Broadband Postpaid', icon: Wifi },
  { id: 3, title: 'Cable TV', icon: Monitor },
  { id: 4, title: 'Clubs and Associations', icon: Building2 },
  { id: 5, title: 'Credit Card', icon: CreditCard },
  { id: 6, title: 'DTH', icon: Satellite },
  { id: 7, title: 'eChallan', icon: Receipt },
  { id: 8, title: 'Education Fees', icon: GraduationCap },
  { id: 9, title: 'Electricity', icon: Zap },
  { id: 10, title: 'EV Recharge', icon: BatteryCharging },
  { id: 11, title: 'Fastag', icon: CarFront },
  { id: 12, title: 'Fleet Card Recharge', icon: Truck },
  { id: 13, title: 'Gas', icon: Flame },
  { id: 14, title: 'Housing Society', icon: Home },
  { id: 15, title: 'Insurance', icon: Shield },
  { id: 16, title: 'Landline Postpaid', icon: Phone },
  { id: 17, title: 'Loan Repayment', icon: CircleDollarSign },
  { id: 18, title: 'LPG Gas', icon: Fuel },
  { id: 19, title: 'Mobile Postpaid', icon: Smartphone },
  { id: 20, title: 'Mobile Prepaid', icon: SignalHigh },
  { id: 21, title: 'Municipal Services', icon: Landmark },
  { id: 22, title: 'Municipal Taxes', icon: Banknote },
  { id: 23, title: 'National Pension System', icon: Umbrella },
  { id: 24, title: 'NCMC Recharge', icon: TrainFront },
  { id: 25, title: 'Prepaid Meter', icon: BarChart3 },
  { id: 26, title: 'Rental', icon: Key },
  { id: 27, title: 'Subscription', icon: RefreshCw },
  { id: 28, title: 'Water', icon: Droplet },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} title={cat.title} icon={cat.icon} />
      ))}
    </div>
  );
};

export default CategoryGrid;
