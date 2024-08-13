import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">FinTrackr Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹1,234,567</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Today's Gain/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-500">+₹12,345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹1,000,000</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="mutualfunds">Mutual Funds</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="h-[200px] w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stocks">
          <Card>
            <CardHeader>
              <CardTitle>Stock Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart className="h-[200px] w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mutualfunds">
          <Card>
            <CardHeader>
              <CardTitle>Mutual Fund Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="h-[200px] w-full" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
