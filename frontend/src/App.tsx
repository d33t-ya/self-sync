
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AvatarCreation from "./pages/AvatarCreation";
import Dashboard from "./pages/Dashboard";
import Quests from "./pages/Quests";
import CheckIn from "./pages/CheckIn";
import Nutritionist from "./pages/Nutritionist";
import NotFound from "./pages/NotFound";

// Refactored code:
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import NavBar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  // Refactored code:
  const { authUser, checkAuth, checkingAuth, onlineUsers } = useAuthStore(); // Destructure authUser and checkAuth from useAuthStore
  useEffect(() => { checkAuth() }, [checkAuth]);  // Check if user is authenticated

  console.log({ onlineUsers });

  if (checkingAuth && !authUser) {
    return <div className="flex justify-center items-center h-screen">Loading, please wait</div>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing/Home Route */}
            <Route path="/" element={authUser ? <Navigate to="/dashboard" /> : <Landing />} />

            {/* Authentication Routes */}
            <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/avatar-creation" />} />

            {/* Dashboard and Protected Routes */}
            <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/avatar-creation" element={authUser ? <AvatarCreation /> : <Navigate to="/login" />} />
            <Route path="/quests" element={authUser ? <Quests /> : <Navigate to="/login" />} />
            <Route path="/checkin" element={authUser ? <CheckIn /> : <Navigate to="/login" />} />
            <Route path="/nutritionist" element={authUser ? <Nutritionist /> : <Navigate to="/login" />} />

            {/* Fallback Route for 404 Pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
