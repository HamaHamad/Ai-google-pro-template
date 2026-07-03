import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8">
      <div className="md:hidden font-bold">Acme SaaS</div>
      <div className="flex-1"></div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm">Sign Out</Button>
        <div className="w-8 h-8 bg-gray-200 rounded-full border"></div>
      </div>
    </header>
  );
}
