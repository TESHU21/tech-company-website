import { Card, CardContent } from './ui/card';
import { AlertTriangle, Lightbulb, Target, Zap } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Outdated Technology",
      description: "Legacy systems holding back your growth and innovation potential.",
      
    },
    {
      icon: Target,
      title: "Poor User Experience",
      description: "Complex interfaces driving customers away from your platform."
    },
    {
      icon: Zap,
      title: "Scalability Issues",
      description: "Systems that can't handle growth, causing performance bottlenecks."
    }
  ];

  const solutions = [
    {
      icon: Lightbulb,
      title: "Modern Architecture",
      description: "Cloud-native solutions built for scale, performance, and reliability.",
      className:"text-amber-500"
    },
    {
      icon: Target,
      title: "User-Centered Design",
      description: "Intuitive interfaces that delight users and drive engagement."
      ,
       className:"text-blue-600"
    },
    {
      icon: Zap,
      title: "Future-Proof Solutions",
      description: "Scalable infrastructure that grows with your business needs."
         ,
       className:"text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Problems to Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the challenges modern businesses face and provide 
            comprehensive solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Common Challenges
            </h3>
            {problems.map((problem, index) => (
              <Card key={index} className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                        <problem.icon className={`w-6 h-6 text-destructive `} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Our Solutions
            </h3>
            {solutions.map((solution, index) => (
              <Card key={index} className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <solution.icon className={`w-8 h-8 ${solution.className}`} />
                      
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}