
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, SendHorizontal, BookOpen, Info } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ResearchInsight {
  id: string;
  title: string;
  content: string;
  source: string;
}

const Nutritionist = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      content: "Hello! I'm your AI nutritionist. How can I help you with your nutrition and wellness questions today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const [currentInsight, setCurrentInsight] = useState<ResearchInsight | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Mock insights
  const researchInsights: ResearchInsight[] = [
    {
      id: "i1",
      title: "Mindful Eating Practices",
      content: "Research shows that mindful eating can help improve your relationship with food, reduce overeating, and enhance digestive health.",
      source: "Journal of Nutrition and Dietetics",
    },
    {
      id: "i2",
      title: "Body Image and Self-Compassion",
      content: "Studies indicate that practicing self-compassion can significantly improve body image and reduce negative self-talk.",
      source: "International Journal of Mental Health",
    },
    {
      id: "i3",
      title: "Intuitive Eating Benefits",
      content: "Intuitive eating, which focuses on honoring hunger cues and food enjoyment, has been linked to better psychological well-being and reduced disordered eating.",
      source: "American Journal of Health Promotion",
    },
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Mock AI reply after delay (simulating API call)
    setTimeout(() => {
      // Show research insight popup randomly
      if (Math.random() > 0.5) {
        const randomInsight = researchInsights[Math.floor(Math.random() * researchInsights.length)];
        setCurrentInsight(randomInsight);
        setShowInsight(true);
      }

      // Mock response based on user input
      let response = "";
      const lowerInput = inputMessage.toLowerCase();
      
      if (lowerInput.includes("diet") || lowerInput.includes("weight")) {
        response = "I understand you're interested in discussing diet and weight. Remember, it's important to approach these topics from a health perspective rather than appearance. What specific aspect would you like to focus on?";
      } else if (lowerInput.includes("body image") || lowerInput.includes("appearance")) {
        response = "Body image is so important to our overall wellbeing. It's completely normal to have days where you feel less confident. Let's talk about some strategies that might help nurture a more positive relationship with your body. 💖";
      } else if (lowerInput.includes("healthy") || lowerInput.includes("nutrition")) {
        response = "Great question about nutrition! Healthy eating is about nourishing your body and enjoying your food, not restriction. What kinds of foods do you currently enjoy?";
      } else {
        response = "Thank you for sharing that with me. Would you like to explore how this relates to your overall wellness goals? I'm here to support you in creating sustainable, gentle habits.";
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        role: "ai",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const generateSessionSummary = () => {
    const userMessages = messages.filter(msg => msg.role === "user").map(msg => msg.content);
    
    if (userMessages.length <= 1) {
      toast({
        title: "Not enough conversation",
        description: "Please have a longer conversation to generate a meaningful summary.",
      });
      return;
    }
    
    toast({
      title: "Session Summary Generated",
      description: "Your conversation summary has been saved to your profile.",
    });

    // In a real app, this would create a document with the summary
    console.log("Generated summary from:", userMessages);
  };

  const dismissInsight = () => {
    setShowInsight(false);
    setCurrentInsight(null);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] md:h-[calc(100vh-80px)]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="text-futurepurple" />
            Nutritionist Chat
          </h1>
          <Button 
            variant="outline" 
            size="sm"
            onClick={generateSessionSummary}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Generate Summary
          </Button>
        </div>

        <div className="flex-1 flex gap-4">
          {/* Main chat area */}
          <Card className="flex-1 flex flex-col overflow-hidden">
            <CardHeader className="border-b py-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=100&q=80" />
                  <AvatarFallback className="bg-futureblue text-white">AI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Nutritionist AI</CardTitle>
                  <p className="text-xs text-muted-foreground">Online • Replies instantly</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user" 
                        ? "bg-futuresoft-purple text-foreground" 
                        : "bg-accent text-foreground"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-accent rounded-2xl px-4 py-2 max-w-[80%]">
                    <div className="flex gap-1">
                      <span className="animate-bounce">•</span>
                      <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>•</span>
                      <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>•</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>
            
            <form 
              onSubmit={handleSubmit}
              className="border-t p-4 flex gap-2"
            >
              <Input 
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <SendHorizontal className="h-5 w-5" />
              </Button>
            </form>
          </Card>
          
          {/* Research insights sidebar - only visible on md+ screens */}
          <Card className="w-80 hidden md:flex flex-col">
            <CardHeader className="py-3 border-b">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="h-4 w-4 text-futurepurple" />
                Research Insights
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 flex-1 overflow-y-auto">
              <div className="space-y-4">
                {researchInsights.map((insight) => (
                  <Card key={insight.id} className="bg-accent/50">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm">{insight.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {insight.content}
                      </p>
                      <p className="text-xs italic mt-2">Source: {insight.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Research insight popup for mobile */}
        {showInsight && currentInsight && (
          <div className="fixed inset-0 bg-background/80 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-futurepurple" />
                  Research Insight
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <h3 className="font-medium mb-2">{currentInsight.title}</h3>
                <p className="text-muted-foreground">{currentInsight.content}</p>
                <p className="italic text-sm mt-2">Source: {currentInsight.source}</p>
              </CardContent>
              
              <div className="p-4 flex justify-end">
                <Button onClick={dismissInsight}>
                  Got it
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Nutritionist;
