import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Heart, Award, Smile, Calendar } from "lucide-react";
const Landing = () => {
  const navigate = useNavigate();
  const features = [{
    icon: <Heart className="h-8 w-8 text-futurepurple" />,
    title: "Self-Care Focus",
    description: "Build healthy habits and nurture your mental wellness with gentle, affirming guidance."
  }, {
    icon: <Award className="h-8 w-8 text-futureblue" />,
    title: "Achievement System",
    description: "Complete quests and track your progress with a supportive gamification approach."
  }, {
    icon: <Smile className="h-8 w-8 text-futurepurple" />,
    title: "Daily Check-ins",
    description: "Reflect on your day and track your emotional wellbeing with easy-to-use tools."
  }, {
    icon: <Calendar className="h-8 w-8 text-futureblue" />,
    title: "Expert Guidance",
    description: "Connect with AI-powered nutrition and wellness advice tailored to your needs."
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="future-title">Meet Your Future Self</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                A personal development companion that helps you nurture your mental health 
                and foster a positive body image through motivation, 
                self-reflection, and gentle habit building. 💖
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button className="future-button border-0" size="lg" onClick={() => navigate('/signup')}>
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/login')}>
                  Log In
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-futurepurple/20 blur-3xl rounded-full"></div>
                <img alt="Future You visualization" src="npx @builder.io/dev-tools@latest code --url \"https://builder.io/fiddle/3c07ce2857244fa08581d49f72838eef?fromFigma=true\" --spaceId 327829d0bcad4451ba93088a3a351915" className="npx @builder.io/dev-tools@latest code --url \"https://builder.io/fiddle/3c07ce2857244fa08581d49f72838eef?fromFigma=true\" --spaceId 327829d0bcad4451ba93088a3a351915" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-accent/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="future-subtitle text-center mb-12">How Future You Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => <div key={index} className="future-card">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <h2 className="future-subtitle text-center mb-12">Journey Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="future-card">
              <p className="italic mb-4">
                "Future You helped me build a healthier relationship with myself. The daily check-ins 
                and gentle reminders keep me accountable without feeling pressured. 💫"
              </p>
              <p className="font-semibold">User123</p>
            </div>
            <div className="future-card">
              <p className="italic mb-4">
                "I love how the app focuses on mental wellness first. The quests are fun 
                and I actually look forward to completing them each day! 🌱"
              </p>
              <p className="font-semibold">Anonymous User</p>
            </div>
            <div className="future-card">
              <p className="italic mb-4">
                "The nutritionist chat has been so helpful. I get personalized advice without judgment. 
                It's like having a wellness coach in my pocket. 🙌"
              </p>
              <p className="font-semibold">Journey456</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-futuresoft-purple">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="future-subtitle">Begin Your Transformation Today</h2>
            <p className="text-lg">
              Your future self is waiting. Start your journey with a free account and 
              discover the supportive companion that will guide you toward your best self. ✨
            </p>
            <Button className="future-button border-0" size="lg" onClick={() => navigate('/signup')}>
              Create Your Avatar
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Future You. A mental wellness and self-improvement companion.</p>
          <p className="mt-2">Made with 💜 for better mental health and body image.</p>
        </div>
      </footer>
    </div>;
};
export default Landing;