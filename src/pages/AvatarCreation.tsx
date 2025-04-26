
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const AvatarCreation = () => {
  const [avatarName, setAvatarName] = useState("");
  const [goals, setGoals] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const avatarOptions = [
    { id: 1, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=400&q=80", alt: "Avatar 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&w=400&q=80", alt: "Avatar 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&w=400&q=80", alt: "Avatar 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=400&q=80", alt: "Avatar 4" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!avatarName.trim()) {
      toast({
        title: "Please name your avatar",
        description: "Your future self needs a name to guide you!",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: `Meet ${avatarName}! ✨`,
      description: "Your personal wellness guide is ready to support your journey.",
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="future-title">Create Your Future Self</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Design the avatar that will guide and motivate you on your journey
            </p>
          </div>
          
          <Tabs defaultValue="choose" className="space-y-6">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2">
              <TabsTrigger value="choose">Choose Avatar</TabsTrigger>
              <TabsTrigger value="custom">Customize</TabsTrigger>
            </TabsList>
            
            <TabsContent value="choose" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {avatarOptions.map((avatar) => (
                  <div 
                    key={avatar.id}
                    className={`
                      relative cursor-pointer rounded-xl overflow-hidden transition-all
                      ${selectedAvatar === avatar.id ? 'ring-4 ring-futurepurple scale-105' : 'opacity-70 hover:opacity-100'}
                    `}
                    onClick={() => setSelectedAvatar(avatar.id)}
                  >
                    <img 
                      src={avatar.src} 
                      alt={avatar.alt}
                      className="w-full aspect-square object-cover"
                    />
                    {selectedAvatar === avatar.id && (
                      <div className="absolute inset-0 bg-futurepurple/20 flex items-center justify-center">
                        <div className="bg-futurepurple text-white rounded-full p-2">
                          ✓
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground text-sm">
                Select an image that represents your aspirational self
              </p>
            </TabsContent>
            
            <TabsContent value="custom">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <p>Upload your own image for your future self (coming soon)</p>
                    </div>
                    
                    <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
                      <p className="text-muted-foreground">Feature coming soon!</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        You'll be able to upload your own images or create an AI-generated avatar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="avatar-name">Name Your Avatar</Label>
                <Input
                  id="avatar-name"
                  placeholder="e.g., Future Alex, Confident Me, etc."
                  value={avatarName}
                  onChange={(e) => setAvatarName(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  This is what we'll call your future self when sending you messages
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">Your Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="What would you like to achieve? e.g., better relationship with food, more confidence, daily exercise..."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button type="submit" className="future-button border-0" size="lg">
                Meet Your Future Self
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AvatarCreation;
