import { Card, CardContent } from './ui/card';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  Headphones, 
  Lock,
  Smartphone,
  Globe
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your project delivered on time with our agile development process.",
      stat: "2-4 weeks"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with experienced developers and designers who understand your needs.",
      stat: "50+ experts"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our solutions have helped businesses increase their revenue by 300%.",
      stat: "300% growth"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure your product is flawless.",
      stat: "99.9% quality"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support to help you whenever you need assistance.",
      stat: "24/7 available"
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and users.",
      stat: "100% secure"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "All our solutions are optimized for mobile devices and performance.",
      stat: "Mobile ready"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve clients worldwide with localized solutions and support.",
      stat: "50+ countries"
    }
  ];

  return (
    <section className="w-full max-w-8xl mx-auto py-20 bg-background">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose TechFlow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver 
            exceptional results that drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {feature.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their digital presence 
              with our innovative solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}