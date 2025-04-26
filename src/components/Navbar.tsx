
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-background border-b border-border">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full future-gradient flex items-center justify-center">
          <span className="text-white font-bold">FY</span>
        </div>
        <span className="text-xl font-bold text-foreground">Future You</span>
      </Link>
      
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="future-button border-0">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Link to="/dashboard">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-futurepurple text-white">FY</AvatarFallback>
            </Avatar>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
