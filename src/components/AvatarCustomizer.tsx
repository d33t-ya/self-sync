
import { useState } from 'react';
import { Circle, Square, Triangle, CircleDot, Eye, User, UserRound, SmileIcon, Frown } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

type AvatarFeature = {
  id: string;
  name: string;
  options: {
    id: string;
    icon: JSX.Element;
    label: string;
  }[];
};

const AvatarCustomizer = () => {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState({
    faceShape: 'circle',
    skinTone: 'light',
    eyes: 'round',
    expression: 'smile',
    bodyType: 'regular',
  });

  const features: AvatarFeature[] = [
    {
      id: 'faceShape',
      name: 'Face Shape',
      options: [
        { id: 'circle', icon: <Circle className="w-8 h-8" />, label: 'Round' },
        { id: 'square', icon: <Square className="w-8 h-8" />, label: 'Square' },
        { id: 'triangle', icon: <Triangle className="w-8 h-8" />, label: 'Triangle' },
      ],
    },
    {
      id: 'skinTone',
      name: 'Skin Tone',
      options: [
        { id: 'light', icon: <CircleDot className="w-8 h-8 text-futuresoft-peach" />, label: 'Light' },
        { id: 'medium', icon: <CircleDot className="w-8 h-8 text-futuresoft-orange" />, label: 'Medium' },
        { id: 'dark', icon: <CircleDot className="w-8 h-8 text-amber-900" />, label: 'Dark' },
      ],
    },
    {
      id: 'eyes',
      name: 'Eyes',
      options: [
        { id: 'round', icon: <Eye className="w-8 h-8" />, label: 'Round' },
        { id: 'almond', icon: <Eye className="w-8 h-8 transform scale-x-75" />, label: 'Almond' },
      ],
    },
    {
      id: 'expression',
      name: 'Expression',
      options: [
        { id: 'smile', icon: <SmileIcon className="w-8 h-8" />, label: 'Smile' },
        { id: 'calm', icon: <Frown className="w-8 h-8" />, label: 'Calm' },
      ],
    },
    {
      id: 'bodyType',
      name: 'Body Type',
      options: [
        { id: 'regular', icon: <User className="w-8 h-8" />, label: 'Regular' },
        { id: 'athletic', icon: <UserRound className="w-8 h-8" />, label: 'Athletic' },
      ],
    },
  ];

  const handleFeatureChange = (featureId: string, value: string) => {
    setSelectedFeatures(prev => ({
      ...prev,
      [featureId]: value
    }));

    toast({
      description: "Your avatar has been updated! ✨",
      duration: 1500,
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-futurepurple mb-2">Customize Your Avatar</h2>
        <p className="text-muted-foreground">Create your future self, one feature at a time ✨</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-futuresoft-purple/50">
          <div className="flex justify-center items-center h-64 border-2 border-dashed border-futurepurple/20 rounded-xl bg-white/50">
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                {/* Preview would go here in future iterations */}
                <User className="w-24 h-24 text-futurepurple" />
              </div>
              <p className="text-sm text-muted-foreground">Avatar Preview</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-3">
              <Label className="text-base font-medium">{feature.name}</Label>
              <RadioGroup
                defaultValue={selectedFeatures[feature.id as keyof typeof selectedFeatures]}
                onValueChange={(value) => handleFeatureChange(feature.id, value)}
                className="flex flex-wrap gap-4"
              >
                {feature.options.map((option) => (
                  <div key={option.id} className="flex flex-col items-center gap-2">
                    <RadioGroupItem
                      value={option.id}
                      id={`${feature.id}-${option.id}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`${feature.id}-${option.id}`}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 hover:bg-white cursor-pointer peer-data-[state=checked]:bg-futuresoft-purple peer-data-[state=checked]:text-futurepurple transition-colors"
                    >
                      {option.icon}
                      <span className="text-sm">{option.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          <Button 
            className="w-full mt-6 future-button"
            onClick={() => {
              toast({
                title: "Avatar saved! 🎉",
                description: "Your future self is ready to guide you on your journey.",
              });
            }}
          >
            Save Avatar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomizer;
