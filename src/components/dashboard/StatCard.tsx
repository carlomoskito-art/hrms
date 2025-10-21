import React from 'react';
import Card from '../ui/Card';
import { StatCardData } from '../../types';

const StatCard: React.FC<StatCardData> = ({ title, value, icon: Icon, iconBgColor }) => {
  return (
    <Card className="p-0">
      <div className="flex justify-between items-start p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-text">{title}</p>
          <p className="text-4xl font-bold text-dark-text">{value}</p>
        </div>
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center`} style={{ backgroundColor: iconBgColor }}>
          <Icon className="text-white" size={32} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
