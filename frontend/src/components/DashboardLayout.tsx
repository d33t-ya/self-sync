
import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Award, Calendar, Smile, BookOpen, MessageSquare } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [avatarName] = useState("Self-Sync");
  
  const navItems = [
    { path: "/dashboard", icon: <Heart className="w-5 h-5" />, label: "Dashboard" },
    { path: "/quests", icon: <Award className="w-5 h-5" />, label: "Quests" },
    { path: "/checkin", icon: <Smile className="w-5 h-5" />, label: "Check-in" },
    { path: "/calendar", icon: <Calendar className="w-5 h-5" />, label: "Calendar" },
    { path: "/resources", icon: <BookOpen className="w-5 h-5" />, label: "Resources" },
    { path: "/nutritionist", icon: <MessageSquare className="w-5 h-5" />, label: "Nutritionist" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 border-r border-border bg-accent/20 p-4">
        <div className="flex items-center gap-3 mb-8 p-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=100&q=80" />
            <AvatarFallback className="bg-futurepurple text-white">FY</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{avatarName}</p>
            <p className="text-xs text-muted-foreground">Your wellness guide</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${location.pathname === item.path 
                  ? 'bg-futurepurple text-white'
                  : 'hover:bg-accent text-foreground'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto pt-6">
          <div className="p-4 bg-futuresoft-purple rounded-lg">
            <p className="text-sm font-medium mb-2">How are you feeling today?</p>
            <Button 
              variant="outline" 
              className="w-full bg-background hover:bg-white"
              asChild
            >
              <Link to="/checkin">Daily Check-in</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Mobile header */}
        <header className="md:hidden border-b border-border p-4 bg-background">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=100&q=80" />
                <AvatarFallback className="bg-futurepurple text-white">FY</AvatarFallback>
              </Avatar>
              <p className="font-semibold">{avatarName}</p>
            </div>
            <Button variant="outline" size="sm">Menu</Button>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          {children}
        </main>
        
        {/* Mobile navigation */}
        <nav className="md:hidden flex justify-around border-t border-border bg-background p-2">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center justify-center p-2 rounded-md
                ${location.pathname === item.path 
                  ? 'text-futurepurple'
                  : 'text-muted-foreground'}
              `}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
