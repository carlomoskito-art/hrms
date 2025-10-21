import React from 'react';
import { NavLink } from 'react-router-dom';
import { bottomNavLinks, navLinks } from '../../constants';
import { cn } from '../../lib/utils';
import { User } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-sidebar-bg w-[325px] fixed top-[103px] left-0 h-full flex flex-col justify-between py-5 z-20">
      <div>
        <div className="flex items-center gap-4 px-7 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
             <User size={24} className="text-gray-600"/>
          </div>
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-dark-text">Admin User</p>
            <p className="text-xs uppercase tracking-wider text-dark-text">HR Management Office</p>
          </div>
        </div>
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 py-4 px-7 text-sm font-medium uppercase tracking-wider transition-colors',
                  isActive
                    ? 'bg-primary-yellow/20 text-primary-yellow border-r-4 border-primary-yellow'
                    : 'text-black hover:bg-primary-yellow/10'
                )
              }
            >
              <link.icon size={24} />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <nav className="flex flex-col">
        {bottomNavLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className="flex items-center gap-2 py-4 px-7 text-sm font-medium uppercase tracking-wider text-black hover:bg-primary-yellow/10 transition-colors"
          >
            <link.icon size={24} />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
