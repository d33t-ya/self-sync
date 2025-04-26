
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock signup logic
    if (email && password) {
      toast({
        title: "Account created! ✨",
        description: "Welcome to Future You! Let's create your avatar now.",
      });
      
      // Navigate to avatar creation
      setTimeout(() => {
        navigate("/avatar-creation");
      }, 1500);
    } else {
      toast({
        title: "Please fill out all fields",
        description: "We need this information to create your account.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-futurepurple">Join Future You</CardTitle>
            <CardDescription className="text-center">
              Create an account to start your personal wellness journey
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              {!isAnonymous && (
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={!isAnonymous}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={!isAnonymous}
                />
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="anonymous" 
                  checked={isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(!!checked)}
                />
                <Label htmlFor="anonymous" className="text-sm">
                  Use anonymous mode (no personal details required)
                </Label>
              </div>
              
              <Button type="submit" className="w-full future-button border-0 mt-6">
                Create Account & Continue
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </div>
            <div className="text-center text-sm">
              Already have an account? <Link to="/login" className="text-futurepurple hover:underline">Log in</Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Signup;
