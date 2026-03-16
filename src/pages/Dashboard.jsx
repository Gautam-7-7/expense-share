import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, Plus, Users, Receipt } from "lucide-react";

const Dashboard = () => {
  const [summary] = useState({
    youOwe: 245.50,
    owedToYou: 180.00,
    totalExpenses: 1250.75,
  });

  const recentExpenses = [
    { id: 1, description: "Dinner at Restaurant", amount: 85.50, date: "2025-10-08", paidBy: "You", split: 4 },
    { id: 2, description: "Movie Tickets", amount: 60.00, date: "2025-10-07", paidBy: "John", split: 3 },
    { id: 3, description: "Grocery Shopping", amount: 120.25, date: "2025-10-06", paidBy: "Sarah", split: 2 },
  ];

  const balances = [
    { name: "John Doe", amount: -45.50, status: "you owe" },
    { name: "Sarah Smith", amount: 80.00, status: "owes you" },
    { name: "Mike Johnson", amount: -200.00, status: "you owe" },
    { name: "Emma Wilson", amount: 100.00, status: "owes you" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Track your expenses and balances</p>
            </div>
            <div className="flex gap-3">
              <Link to="/add-expense">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Expense
                </Button>
              </Link>
              <Link to="/friends">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Friends
                </Button>
              </Link>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="gradient-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">You Owe</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">${summary.youOwe.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">Total amount to pay</p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Owed to You</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">${summary.owedToYou.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">Total amount to receive</p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <Receipt className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${summary.totalExpenses.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Expenses */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExpenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-smooth">
                      <div className="flex-1">
                        <p className="font-medium">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Paid by {expense.paidBy} • Split {expense.split} ways
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{expense.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${expense.amount.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">${(expense.amount / expense.split).toFixed(2)}/person</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/expenses">
                  <Button variant="outline" className="w-full mt-4">
                    View All Expenses
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Balances */}
            <Card>
              <CardHeader>
                <CardTitle>Balances with Friends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {balances.map((balance, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">
                            {balance.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{balance.name}</p>
                          <p className="text-xs text-muted-foreground">{balance.status}</p>
                        </div>
                      </div>
                      <div className={`font-bold ${balance.amount < 0 ? 'text-destructive' : 'text-success'}`}>
                        {balance.amount < 0 ? '-' : '+'}${Math.abs(balance.amount).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/settlements">
                  <Button variant="outline" className="w-full mt-4">
                    View All Balances
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;