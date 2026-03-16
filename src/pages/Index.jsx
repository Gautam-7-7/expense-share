import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Calculator, Bell } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Add Friends",
      description: "Easily add and manage your friends to track shared expenses together.",
    },
    {
      icon: DollarSign,
      title: "Track Expenses",
      description: "Record all shared expenses and see who owes what in real-time.",
    },
    {
      icon: Calculator,
      title: "Auto Calculate",
      description: "Automatically calculate balances and split costs fairly among friends.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notified when it's time to settle up or when new expenses are added.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Split Expenses with Friends Made Simple
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Track shared expenses, calculate balances automatically, and settle up with ease. 
              Perfect for roommates, trips, and group activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
              <p className="text-muted-foreground text-lg">
                Powerful features to manage shared expenses and keep your finances organized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of users who are already simplifying their shared expenses.
            </p>
            <Button size="lg">Create Free Account</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
