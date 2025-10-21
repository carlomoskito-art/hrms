import { Bell, Download, Moon, User } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-dark-blue text-white p-4 flex items-center justify-between fixed top-0 left-0 right-0 h-[103px] z-30">
      <div className="w-[298px]">
        <img
          src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3119/4212/86c53343d43ccc83a0f532a880801849?Expires=1762128000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jwKkRcU4-LerDrOeLHsQtYDXx7DB5wCXKdFB-IMBwllxbf7rsdYw60SUP7VtobvBlWCinROUYh5-ntPbzJQkHckZ5gtf-9rgkLqdf1QbSb-EJifxIsfPm0cJ-1lVSH7tQF0OAkHx6skSOohzjNJeHN3MGrJ7pu9WoNtMIdZ6Yzj4LUgdPRj9BtAt3g24e~Zd2QmINMPy3jzfOg8VJrCdyKeFxi5stVJffcbP8u0UtBmUNRJeFt7J~shfM4SL2~3wEj6Z6TQ2jxKQjyRWrhsWb9toHGwnmQMvrc-JALEGwq74dQ3PYNj-HRvAletks40AGKF-JmWSXLJ-DfcbdjvpZw__"
          alt="Company Logo"
          className="h-12 object-contain"
        />
      </div>
      <div className="flex-grow flex items-center justify-between">
        <div></div>
        <div className="flex items-center space-x-6">
          <button className="hover:text-primary-yellow transition-colors">
            <Moon size={24} />
          </button>
          <button className="hover:text-primary-yellow transition-colors">
            <Download size={24} />
          </button>
          <div className="relative">
            <button className="hover:text-primary-yellow transition-colors">
              <Bell size={24} />
            </button>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                 <User size={24} className="text-gray-600"/>
              </div>
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-primary-dark-blue"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
