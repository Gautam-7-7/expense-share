import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Mail, UserMinus } from "lucide-react";
import { toast } from "sonner";

const Friends = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", balance: -45.50 },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", balance: 80.00 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", balance: -200.00 },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", balance: 100.00 },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleAddFriend = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    
    setFriends([...friends, {
      id: friends.length + 1,
      name,
      email,
      balance: 0
    }]);
    
    toast.success(`Added ${name} as a friend!`);
    setIsOpen(false);
  };

  const handleRemoveFriend = (id) => {
    const friend = friends.find(f => f.id === id);
    if (friend && friend.balance !== 0) {
      toast.error("Cannot remove friend with pending balance!");
      return;
    }
    setFriends(friends.filter(f => f.id !== id));
    toast.success("Friend removed successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Friends</h1>
              <p className="text-muted-foreground">Manage your expense-sharing friends</p>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Friend
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Friend</DialogTitle>
                  <DialogDescription>
                    Add a friend to start splitting expenses together.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddFriend}>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter friend's name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter friend's email"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add Friend</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Friends List */}
          <Card>
            <CardHeader>
              <CardTitle>Your Friends ({friends.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-smooth"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary text-lg">
                          {friend.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{friend.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {friend.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        {friend.balance !== 0 && (
                          <p className={`font-bold ${friend.balance < 0 ? 'text-destructive' : 'text-success'}`}>
                            {friend.balance < 0 ? 'You owe' : 'Owes you'} ${Math.abs(friend.balance).toFixed(2)}
                          </p>
                        )}
                        {friend.balance === 0 && (
                          <p className="text-sm text-muted-foreground">Settled up</p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFriend(friend.id)}
                      >
                        <UserMinus className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
                {friends.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No friends added yet.</p>
                    <p className="text-sm text-muted-foreground mt-2">Add friends to start tracking shared expenses!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Friends;