
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { Heart, Award, Calendar, Smile, ArrowUp } from "lucide-react";

const Dashboard = () => {
  const [progress, setProgress] = useState(0);
  const [userName] = useState("there");
  const [avatarName] = useState("Future You");
  const [dailyMessage, setDailyMessage] = useState("");
  
  // Mock data
  const upcomingQuests = [
    { id: 1, title: "Drink 8 glasses of water", completed: false },
    { id: 2, title: "15 minutes of mindfulness", completed: false },
    { id: 3, title: "Write 3 things you're grateful for", completed: true }
  ];
  
  const motivationalMessages = [
    "Remember that your worth isn't measured by your appearance, but by your heart and actions. 💖",
    "Small steps today lead to big changes tomorrow. You're doing great! ✨",
    "You have the power to rewrite your story. I believe in you! 🌟",
    "Your body is an instrument, not an ornament. Appreciate what it can do! 💪",
    "Progress isn't linear, and that's okay. Every day is a new opportunity. 🌱"
  ];
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Select random motivational message
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    setDailyMessage(randomMessage);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome section */}
        <section>
          <h1 className="text-3xl font-bold mb-1">Hi {userName}! 👋</h1>
          <p className="text-muted-foreground">Here's your wellness overview for today</p>
        </section>
        
        {/* Avatar message */}
        <Card className="border-futurepurple/30 bg-gradient-to-br from-futurepurple/5 to-futureblue/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full border-4 border-futurepurple h-16 w-16 shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=100&q=80" 
                  alt="Avatar" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Message from {avatarName}:</p>
                <p className="text-lg font-medium">{dailyMessage}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-5 w-5 text-futurepurple" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Overall completion</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Heart className="h-5 w-5 text-futurepurple" />
                Streak
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <div className="bg-futurepurple/10 rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold text-futurepurple">5</span>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Days in a row</p>
                <p className="text-sm font-medium flex items-center gap-1">
                  <ArrowUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">+2 from last week</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-5 w-5 text-futurepurple" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <div className="bg-futurepurple/10 rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold text-futurepurple">3</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Badges earned this week</p>
                <Button variant="link" className="h-6 p-0 text-futurepurple">View all</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quests and check-in section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Today's quests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-futurepurple" />
                Today's Quests
              </CardTitle>
              <CardDescription>Complete these activities for your wellbeing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingQuests.map((quest) => (
                  <div 
                    key={quest.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      quest.completed ? 'bg-futuresoft-green border-green-200' : 'bg-white border-border'
                    }`}
                  >
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                      quest.completed ? 'bg-green-500 text-white' : 'border border-muted-foreground'
                    }`}>
                      {quest.completed && '✓'}
                    </div>
                    <span className={quest.completed ? 'line-through text-muted-foreground' : ''}>
                      {quest.title}
                    </span>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-2">
                  View All Quests
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Daily Check-in */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smile className="h-5 w-5 text-futurepurple" />
                How are you feeling today?
              </CardTitle>
              <CardDescription>Take a moment for self-reflection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6 py-4">
                <div className="flex justify-center gap-4">
                  {['😔', '😐', '🙂', '😊', '🤩'].map((emoji, index) => (
                    <button 
                      key={index}
                      className="h-12 w-12 text-2xl rounded-full hover:bg-accent transition-colors flex items-center justify-center"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                
                <Button className="future-button border-0">
                  Start Daily Check-in
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
