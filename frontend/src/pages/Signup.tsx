
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";

import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const navigate = useNavigate();

  // Refactored code:
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, SigningUp } = useAuthStore(); // Assuming you have a useAuth hook for authentication


  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return toast.error("Full name is required");
    }
    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.error("Email is invalid");
    }
    if (!formData.password.trim()) {
      return toast.error("Password is required");
    }
    if (formData.password.length < 3) {
      return toast.error("Password must be at least 6 characters");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const successful = validateForm();
    if (successful === true) signup(formData);
  };

  return (
    <>
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

            {/* Form */}
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                }

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required={!isAnonymous}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required={!isAnonymous}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full future-button border-0 mt-6"
                  disabled={SigningUp}
                >
                  {SigningUp ? "Signing Up..." : "Sign Up now!"}
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
    </>

  );
};

export default Signup;
