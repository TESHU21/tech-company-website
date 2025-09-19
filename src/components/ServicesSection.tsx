import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Cloud, 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart3,
  Code,
  Zap
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions that grow with your business.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "99.9% Uptime", "24/7 Monitoring"],
      badge: "Popular"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      badge: null
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Ready"],
      badge: null
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimized database architecture for performance and scalability.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Migration"],
      badge: null
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect your data and users.",
      features: ["SSL/TLS", "GDPR Compliance", "Penetration Testing", "Security Audits"],
      badge: "Essential"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your business performance.",
      features: ["Google Analytics", "Custom Dashboards", "Real-time Reports", "KPI Tracking"],
      badge: null
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and scalability.",
      features: ["REST APIs", "GraphQL", "API Documentation", "Rate Limiting"],
      badge: null
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines for faster, more reliable releases.",
      features: ["Docker", "Kubernetes", "GitHub Actions", "Automated Testing"],
      badge: "Advanced"
    }
  ];

  return (
    <section id="services" className="mx-w-8xl mx-auto py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  {service.badge && (
                    <Badge variant={service.badge === "Popular" ? "default" : "secondary"}>
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get Custom Quote
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}