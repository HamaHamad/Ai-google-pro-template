"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Menu } from "lucide-react";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="icon" className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <span className="font-bold">Acme SaaS</span>
      </div>

      <div className="hidden md:flex flex-1 items-center max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search dashboard..."
            className="w-full bg-gray-50 pl-9 border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center focus:outline-none"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full border border-gray-300 overflow-hidden">
               <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
            </div>
          </button>
          
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john@example.com</p>
              </div>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                Settings
              </Link>
              <Link href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileOpen(false)}>
                Billing
              </Link>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
