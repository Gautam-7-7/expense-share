import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Our Mission",
      description: "To simplify expense sharing among friends and make financial transparency easy and stress-free.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community First",
      description: "Built by people who understand the challenges of splitting bills and managing shared expenses.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Continuously improving our platform with smart features that make expense tracking effortless.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trust & Security",
      description: "Your financial data is encrypted and secure. We prioritize your privacy above all else.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-24">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About ExpenseShare
            </h1>
        
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 container px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              ExpenseShare was born from a simple idea: splitting expenses with friends shouldn't be complicated or awkward. We've all been there – trying to remember who paid for what, calculating splits on napkins, and sending countless reminders for pending payments.
            </p>
            <p>
              Our team built ExpenseShare to solve these everyday problems. Whether you're living with roommates, going on a trip with friends, or just grabbing dinner together, ExpenseShare keeps track of everything automatically.
            </p>
            
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent/30">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="gradient-card border-0">
                  <CardContent className="p-6 space-y-4">
                    <div className="rounded-lg bg-accent w-fit p-3">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a diverse team of developers, designers, and finance enthusiasts passionate about creating tools that make life easier.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { name: "Gautam Krishna", role: "Developer", initials: "GK" },
                { name: "Harkirat Singh", role: "Developer", initials: "HS" },
                { name: "Dhanush Biradar", role: "Designer", initials: "DB" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="font-bold text-2xl text-primary">{member.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;