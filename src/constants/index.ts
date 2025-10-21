import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  Briefcase,
  BarChart,
  Settings,
  LogOut,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/employee-management", label: "Employee Management", icon: Users },
  { href: "/attendance", label: "Attendance & Leave", icon: CalendarCheck },
  { href: "/appraisals", label: "Appraisals & IPCR", icon: FileText },
  { href: "/recruitment", label: "Recruitment", icon: Briefcase },
  { href: "/reports", label: "Reports", icon: BarChart },
];

export const bottomNavLinks = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/logout", label: "Logout", icon: LogOut },
];
