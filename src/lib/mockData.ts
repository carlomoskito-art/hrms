import { faker } from '@faker-js/faker';
import { Briefcase, CalendarCheck, FileText, Users } from 'lucide-react';
import { PendingAction, RecentActivity, StatCardData } from '../types';

export const statCards: StatCardData[] = [
  {
    title: 'Total Employees',
    value: '342',
    icon: Users,
    iconBgColor: '#2B7FFF',
  },
  {
    title: 'Present Today',
    value: '318',
    icon: CalendarCheck,
    iconBgColor: '#00C950',
  },
  {
    title: 'Pending Appraisals',
    value: '28',
    icon: FileText,
    iconBgColor: '#FF6900',
  },
  {
    title: 'Open Positions',
    value: '12',
    icon: Briefcase,
    iconBgColor: '#AD46FF',
  },
];

export const recentActivities: RecentActivity[] = [
  {
    title: 'New employee onboarding',
    subtitle: 'Maria Santos',
    timestamp: '10 minutes ago',
  },
  {
    title: 'Leave application approved',
    subtitle: 'Juan Dela Cruz',
    timestamp: '1 hour ago',
  },
  {
    title: 'IPCR submitted',
    subtitle: 'Anna Reyes',
    timestamp: '2 hours ago',
  },
  {
    title: 'Job posting published',
    subtitle: 'Vacant Position: IT Officer',
    timestamp: '3 hours ago',
  },
];

export const pendingActions: PendingAction[] = [
  {
    title: '15 Leave Applications',
    subtitle: 'Requires approval',
    bgColor: 'bg-action-orange-bg',
    borderColor: 'border-action-orange-border',
  },
  {
    title: '8 Training Requests',
    subtitle: 'Pending scheduling',
    bgColor: 'bg-action-blue-bg',
    borderColor: 'border-action-blue-border',
  },
  {
    title: '23 Job Applications',
    subtitle: 'For PSB review',
    bgColor: 'bg-action-purple-bg',
    borderColor: 'border-action-purple-border',
  },
  {
    title: 'DTR Verification',
    subtitle: 'Monthly validation due',
    bgColor: 'bg-action-green-bg',
    borderColor: 'border-action-green-border',
  },
];
