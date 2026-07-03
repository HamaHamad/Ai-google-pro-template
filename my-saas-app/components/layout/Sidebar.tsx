import Link from "next/link";
import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:flex flex-col bg-white border-r">
      <div className="h-16 flex items-center px-6 border-b">
        <span className="text-lg font-bold">Acme SaaS</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-900">
          <LayoutDashboard className="h-5 w-5 text-gray-500" />
          <span>Dashboard</span>
        </Link>
        <Link href="/users" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-600">
          <Users className="h-5 w-5 text-gray-500" />
          <span>Users</span>
        </Link>
        <Link href="/billing" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-600">
          <CreditCard className="h-5 w-5 text-gray-500" />
          <span>Billing</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-600">
          <Settings className="h-5 w-5 text-gray-500" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
