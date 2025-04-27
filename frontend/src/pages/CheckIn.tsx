import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";
import { Calendar, Heart, HeartPulse, Plus } from "lucide-react";

const CheckIn = () => {
  const [entries, setEntries] = useState<number[]>([1]);
  const [mood, setMood] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState([50]);
  const [sleepQuality, setSleepQuality] = useState([50]);
  const [bodyImage, setBodyImage] = useState([50]);
  const [journal, setJournal] = useState("");
  const [calories, setCalories] = useState("");
  const [exercise, setExercise] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const { toast } = useToast();

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😊", label: "Great" },
    { emoji: "🤩", label: "Amazing" },
  ];

  const resetForm = () => {
    setMood(null);
    setEnergyLevel([50]);
    setSleepQuality([50]);
    setBodyImage([50]);
    setJournal("");
    setCalories("");
    setExercise("");
    setActiveStep(1);
  };

  const handleSubmit = () => {
    toast({
      title: "Check-in complete! 🎉",
      description: "Thank you for taking time for self-reflection today.",
    });
    resetForm();
  };

  const addNewEntry = () => {
    setEntries([...entries, entries.length + 1]);
    resetForm();
  };

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="future-title">Daily Check-In</h1>
          <p className="text-muted-foreground mt-2">
            Take a moment to reflect on your day and track your progress
          </p>
        </div>

        {entries.map((entryId) => (
          <Card key={entryId} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-futurepurple" />
                <span>Today's Check-in</span>
              </CardTitle>
              <CardDescription>Step {activeStep} of 3</CardDescription>
            </CardHeader>
            
            <CardContent>
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">How are you feeling today?</h3>
                    <div className="flex justify-between">
                      {moods.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => setMood(item.label)}
                          className={`
                            flex flex-col items-center gap-2 p-3 rounded-lg transition-all
                            ${mood === item.label ? 'bg-accent scale-110' : 'hover:bg-accent/50'}
                          `}
                        >
                          <span className="text-3xl">{item.emoji}</span>
                          <span className="text-xs">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Energy Level</h3>
                    <div className="px-2">
                      <Slider 
                        value={energyLevel}
                        onValueChange={setEnergyLevel}
                        max={100}
                        step={1}
                        className="my-6"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Low Energy</span>
                        <span>High Energy</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">How did you sleep?</h3>
                    <div className="px-2">
                      <Slider 
                        value={sleepQuality}
                        onValueChange={setSleepQuality}
                        max={100}
                        step={1}
                        className="my-6"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Poor Sleep</span>
                        <span>Great Sleep</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">How do you feel about your body today?</h3>
                    <div className="px-2">
                      <Slider 
                        value={bodyImage}
                        onValueChange={setBodyImage}
                        max={100}
                        step={1}
                        className="my-6"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Struggling</span>
                        <span>Feeling Good</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="journal" className="font-medium">Journal Entry</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Write down your thoughts, feelings, or reflections for today
                    </p>
                    <Textarea
                      id="journal"
                      placeholder="Today I felt..."
                      value={journal}
                      onChange={(e) => setJournal(e.target.value)}
                      className="min-h-[150px]"
                    />
                  </div>
                </div>
              )}
              
              {activeStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-5 w-5 text-futurepurple" />
                      <h3 className="font-medium">Nutrition & Activity</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="calories">Estimated Calories (optional)</Label>
                        <Input
                          id="calories"
                          placeholder="e.g., 2000"
                          value={calories}
                          onChange={(e) => setCalories(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="exercise">Exercise (optional)</Label>
                        <Input
                          id="exercise"
                          placeholder="e.g., 30 min walk"
                          value={exercise}
                          onChange={(e) => setExercise(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-border p-4 bg-accent/10">
                    <div className="flex items-start gap-3">
                      <HeartPulse className="h-5 w-5 text-futurepurple mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Gentle Reminder</h4>
                        <p className="text-sm text-muted-foreground">
                          These numbers are optional and just for your awareness. 
                          Remember that your worth is not defined by calories or exercise! 💖
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={activeStep === 1}
              >
                Back
              </Button>
              
              {activeStep < 3 ? (
                <Button 
                  className="future-button border-0"
                  onClick={nextStep}
                  disabled={activeStep === 1 && !mood}
                >
                  Next
                </Button>
              ) : (
                <Button 
                  className="future-button border-0"
                  onClick={handleSubmit}
                >
                  Complete Check-in
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}

        <Button
          onClick={addNewEntry}
          variant="outline"
          className="w-full py-6 border-dashed border-2 hover:border-primary hover:bg-accent/10 transition-all"
        >
          <Plus className="mr-2" />
          Add Another Check-in
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default CheckIn;
