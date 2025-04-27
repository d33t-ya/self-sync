
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Leaf, Star, Smile, Calendar } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary animate-bounce-slow" />,
      title: "Grow Together",
      description: "Nurture your wellbeing like a garden, watching your progress bloom day by day."
    },
    {
      icon: <Star className="h-8 w-8 text-secondary animate-pulse-soft" />,
      title: "Daily Quests",
      description: "Complete fun challenges and earn rewards while building healthy habits."
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Mood Garden",
      description: "Track your emotions and watch your garden flourish with each check-in."
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Seasonal Events",
      description: "Join special challenges and earn unique rewards as the seasons change."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-futuresoft-green/50 to-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome to SelfSync
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Begin your journey of growth and self-discovery in a gentle, gamified way. 
                Plant seeds of positive habits and watch yourself bloom. 🌱
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" 
                  size="lg"
                  onClick={() => navigate('/signup')}
                >
                  Start Your Adventure
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/login')}
                  className="border-primary hover:bg-primary/10"
                >
                  Return to Garden
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=800&q=80" 
                  alt="Peaceful garden scene" 
                  className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-futuresoft-brown/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-secondary">
              Discover Your Garden of Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-secondary">
            Community Garden Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:shadow-lg transition-all">
              <p className="italic mb-4">
                "SelfSync helped me cultivate mindful habits. The daily quests make 
                self-care feel like a fun adventure rather than a chore. 🌿"
              </p>
              <p className="font-semibold text-primary-foreground">GardenGuardian</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:shadow-lg transition-all">
              <p className="italic mb-4">
                "I love watching my virtual garden grow alongside my personal growth. 
                The seasonal events keep me excited and engaged! 🌺"
              </p>
              <p className="font-semibold text-primary-foreground">BloomingSpirit</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:shadow-lg transition-all">
              <p className="italic mb-4">
                "The mood garden feature is brilliant! It's so rewarding to see my 
                emotional growth reflected in my flourishing virtual space. 🌸"
              </p>
              <p className="font-semibold text-primary-foreground">PeacefulGrower</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-t from-futuresoft-purple/30 to-transparent">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
              Your Garden Awaits
            </h2>
            <p className="text-lg">
              Join our growing community and start planting the seeds of your wellbeing journey. 
              Every small step helps your garden flourish. ✨
            </p>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" 
              size="lg"
              onClick={() => navigate('/signup')}
            >
              Plant Your First Seed
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-primary/10 bg-white/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 SelfSync. A gamified wellness companion.</p>
          <p className="mt-2">Growing together with 🌱 and mindfulness.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
