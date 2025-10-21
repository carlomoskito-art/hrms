import { LucideIcon } from "lucide-react";

export interface StatCardData {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBgColor: string;
}

export interface RecentActivity {
  title: string;
  subtitle: string;
  timestamp: string;
}

export interface PendingAction {
  title: string;
  subtitle: string;
  bgColor: string;
  borderColor: string;
}
