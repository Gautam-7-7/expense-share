import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Expenses = () => {
  const expenses = [
    { id: 1, description: "Dinner at Restaurant", amount: 85.50, category: "food", date: "2025-10-08", paidBy: "You", split: 4 },
    { id: 2, description: "Movie Tickets", amount: 60.00, category: "entertainment", date: "2025-10-07", paidBy: "John", split: 3 },
    { id: 3, description: "Grocery Shopping", amount: 120.25, category: "groceries", date: "2025-10-06", paidBy: "Sarah", split: 2 },
    { id: 4, description: "Uber Ride", amount: 25.00, category: "transport", date: "2025-10-05", paidBy: "You", split: 2 },
    { id: 5, description: "Coffee & Snacks", amount: 18.50, category: "food", date: "2025-10-04", paidBy: "Mike", split: 3 },
    { id: 6, description: "Concert Tickets", amount: 150.00, category: "entertainment", date: "2025-10-03", paidBy: "Emma", split: 4 },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      food: "bg-orange-100 text-orange-800",
      transport: "bg-blue-100 text-blue-800",
      entertainment: "bg-purple-100 text-purple-800",
      groceries: "bg-green-100 text-green-800",
      utilities: "bg-yellow-100 text-yellow-800",
      other: "bg-gray-100 text-gray-800",
    };
    return colors[category] || colors.other;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Expense History</h1>
            <p className="text-muted-foreground">View and search all your expenses</p>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search expenses..."
                    className="pl-9"
                  />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="transport">Transportation</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="groceries">Groceries</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Expenses List */}
          <Card>
            <CardHeader>
              <CardTitle>All Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border hover:bg-accent transition-smooth gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-medium">{expense.description}</p>
                        <Badge className={getCategoryColor(expense.category)} variant="secondary">
                          {expense.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Paid by {expense.paidBy} • Split {expense.split} ways • {expense.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${expense.amount.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">
                        ${(expense.amount / expense.split).toFixed(2)}/person
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Expenses;