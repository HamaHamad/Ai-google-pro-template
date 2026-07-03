import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
          <div className="text-2xl font-bold mt-2">$45,231.89</div>
          <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Subscriptions</h3>
          <div className="text-2xl font-bold mt-2">+2350</div>
          <p className="text-xs text-muted-foreground mt-1">+180.1% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Active Now</h3>
          <div className="text-2xl font-bold mt-2">+573</div>
          <p className="text-xs text-muted-foreground mt-1">+201 since last hour</p>
        </Card>
      </div>
    </div>
  );
}
