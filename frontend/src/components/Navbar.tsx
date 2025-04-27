
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leaf } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm border-b border-primary/10">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Leaf className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          SelfSync
        </span>
      </Link>
      
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <Button variant="outline" className="border-primary hover:bg-primary/10">
                Return to Garden
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Growing
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/dashboard">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground">SS</AvatarFallback>
            </Avatar>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
