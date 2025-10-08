import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { mockUser } from '../../data/mockData';

const MobileHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3 h-14">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MS</span>
          </div>
          <span className="font-bold text-lg">MyServe</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="relative p-2">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs bg-pink-500 text-white rounded-full">
              3
            </div>
          </Button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-200 to-violet-200 flex items-center justify-center">
            <span className="text-xs font-medium">JS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
