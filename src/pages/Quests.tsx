
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";
import { Award, Star, Trophy } from "lucide-react";

const Quests = () => {
  const [activeCategory, setActiveCategory] = useState("daily");
  
  // Mock data
  const dailyQuests = [
    { id: 1, title: "Drink 8 glasses of water", description: "Stay hydrated throughout the day", points: 10, completed: false },
    { id: 2, title: "15 minutes of mindfulness", description: "Practice being present and aware", points: 15, completed: false },
    { id: 3, title: "Write 3 things you're grateful for", description: "Practice gratitude to boost your mood", points: 10, completed: true },
    { id: 4, title: "Take a 10-minute walk", description: "Get some fresh air and gentle movement", points: 10, completed: false },
  ];
  
  const weeklyQuests = [
    { id: 5, title: "Try a new healthy recipe", description: "Expand your cooking skills with something nutritious", points: 30, completed: false },
    { id: 6, title: "Complete 3 daily check-ins", description: "Maintain consistency in your self-reflection", points: 25, completed: true },
    { id: 7, title: "Reach out to a friend", description: "Social connections boost mental wellbeing", points: 20, completed: false },
  ];
  
  const challenges = [
    { id: 8, title: "7-Day Positivity Challenge", description: "Find something positive in each day for a week", points: 100, completed: false, progress: 30 },
    { id: 9, title: "Mindful Eating Journey", description: "Practice being present during meals for 5 days", points: 75, completed: false, progress: 60 },
    { id: 10, title: "Self-Compassion Series", description: "Complete 4 self-compassion exercises", points: 90, completed: false, progress: 0 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Quests & Challenges ✨</h1>
          <p className="text-muted-foreground">Complete activities to earn points and improve your wellbeing</p>
        </div>
        
        {/* Progress overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-futurepurple text-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Star className="h-10 w-10 mb-2 animate-pulse-soft" />
              <p className="text-3xl font-bold">275</p>
              <p className="text-white/80">Total Points</p>
            </CardContent>
          </Card>
          
          <Card className="bg-futureblue text-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Trophy className="h-10 w-10 mb-2" />
              <p className="text-3xl font-bold">5</p>
              <p className="text-white/80">Quests Completed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Award className="h-10 w-10 mb-2 text-futurepurple" />
              <p className="text-3xl font-bold">Bronze</p>
              <p className="text-muted-foreground">Current Tier</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Quests tabs */}
        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="daily" onClick={() => setActiveCategory("daily")}>Daily</TabsTrigger>
            <TabsTrigger value="weekly" onClick={() => setActiveCategory("weekly")}>Weekly</TabsTrigger>
            <TabsTrigger value="challenges" onClick={() => setActiveCategory("challenges")}>Challenges</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="space-y-4">
            {dailyQuests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-4">
            {weeklyQuests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </TabsContent>
          
          <TabsContent value="challenges" className="space-y-4">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

interface QuestProps {
  quest: {
    id: number;
    title: string;
    description: string;
    points: number;
    completed: boolean;
  };
}

const QuestCard = ({ quest }: QuestProps) => {
  return (
    <Card className={quest.completed ? "bg-futuresoft-green" : ""}>
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-start gap-4">
          <div className={`
            flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center
            ${quest.completed 
              ? 'bg-green-500 text-white' 
              : 'bg-futurepurple/10 text-futurepurple'}
          `}>
            {quest.completed ? '✓' : <Award className="h-5 w-5" />}
          </div>
          
          <div>
            <h3 className={`font-semibold ${quest.completed ? 'line-through text-muted-foreground' : ''}`}>
              {quest.title}
            </h3>
            <p className="text-sm text-muted-foreground">{quest.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-semibold text-futurepurple">{quest.points} pts</span>
          {!quest.completed && (
            <button className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              +
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface ChallengeProps {
  challenge: {
    id: number;
    title: string;
    description: string;
    points: number;
    completed: boolean;
    progress: number;
  };
}

const ChallengeCard = ({ challenge }: ChallengeProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex justify-between">
          <span>{challenge.title}</span>
          <span className="text-futurepurple">{challenge.points} pts</span>
        </CardTitle>
        <CardDescription>{challenge.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex justify-between items-center">
          <div className="w-full max-w-[200px] h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-futurepurple" 
              style={{ width: `${challenge.progress}%` }}
            ></div>
          </div>
          <span className="text-sm ml-2">{challenge.progress}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quests;
