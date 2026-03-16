import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Settlements = () => {
  const settlements = [
    { from: "You", to: "Mike Johnson", amount: 200.00, status: "pending" },
    { from: "You", to: "John Doe", amount: 45.50, status: "pending" },
    { from: "Sarah Smith", to: "You", amount: 80.00, status: "pending" },
    { from: "Emma Wilson", to: "You", amount: 100.00, status: "pending" },
  ];

  const handleSettle = (from, to, amount) => {
    toast.success(`Marked payment of $${amount.toFixed(2)} from ${from} to ${to} as settled!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Settlements</h1>
            <p className="text-muted-foreground">Track and manage pending payments</p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">You Need to Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-destructive">$245.50</div>
                <p className="text-sm text-muted-foreground mt-2">Total amount to settle</p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">You Will Receive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">$180.00</div>
                <p className="text-sm text-muted-foreground mt-2">Total amount to collect</p>
              </CardContent>
            </Card>
          </div>

          {/* Settlements List */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Settlements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {settlements.map((settlement, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-semibold text-primary text-sm">
                          {settlement.from.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-semibold text-success text-sm">
                          {settlement.to.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">
                          {settlement.from} → {settlement.to}
                        </p>
                        <p className="text-sm text-muted-foreground">Payment pending</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-xl">${settlement.amount.toFixed(2)}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSettle(settlement.from, settlement.to, settlement.amount)}
                        className="whitespace-nowrap"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Mark Settled
                      </Button>
                    </div>
                  </div>
                ))}

                {settlements.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                    <p className="text-lg font-medium">All settled up!</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      You don't have any pending settlements.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Settlement Tips */}
          <Card className="bg-accent/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">💡 Settlement Tips</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                <li>Mark settlements as complete only after receiving/sending payment</li>
                <li>Use payment apps like Venmo, PayPal, or bank transfers for settlements</li>
                <li>Keep records of all transactions for your reference</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Settlements;