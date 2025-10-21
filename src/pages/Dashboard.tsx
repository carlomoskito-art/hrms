import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import Card, { CardTitle } from '../components/ui/Card';
import { pendingActions, recentActivities, statCards } from '../lib/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-semibold uppercase tracking-wider text-dark-text">
          HR Management Dashboard
        </h1>
        <div className="flex items-center gap-2.5">
          <button className="bg-gray-300 text-black text-sm font-medium uppercase px-4 py-2.5 rounded hover:bg-gray-400 transition-colors">
            Generate Report
          </button>
          <button className="bg-primary-yellow text-white text-sm font-medium uppercase px-4 py-2.5 rounded hover:bg-amber-600 transition-colors">
            New Action
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardTitle>Recent Activities</CardTitle>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${index < recentActivities.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div>
                  <p className="text-sm text-dark-text">{activity.title}</p>
                  <p className="text-sm text-gray-text">{activity.subtitle}</p>
                </div>
                <p className="text-xs text-gray-text">{activity.timestamp}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle>Pending Actions</CardTitle>
          <div className="space-y-4">
            {pendingActions.map((action, index) => (
              <div key={index} className={`p-4 border rounded-lg ${action.bgColor} ${action.borderColor}`}>
                <p className="text-sm text-dark-text">{action.title}</p>
                <p className="text-xs text-gray-text">{action.subtitle}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
