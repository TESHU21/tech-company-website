'use client';

import { Lightbulb, Target, ShieldCheck, Users, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function MissionVisionValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity',
      description: 'We act with honesty, transparency, and accountability in everything we do.',
        className:" text-blue-600"
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description: 'We prioritize user outcomes and build solutions that deliver real value.',
        className:" text-green-600"
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to high standards and continuously improve our craft.',
      className:" text-amber-500"
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We embrace curiosity and experiment to find better ways to solve problems.',
       className:" text-purple-600"

    }
  ];

  return (
    <section className="py-20 max-w-8xl mx-auto w-full bg-background">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                  <Target className="w-12 h-12 text-blue-600" />
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Empower organizations with scalable, secure, and delightful digital products that
                    create measurable business impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                
                  <Lightbulb className="w-12 h-12 text-orange-500" />
               
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Become a trusted global partner for modern software, enabling teams to innovate
                    faster and operate with confidence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-foreground mb-6">Our Core Values</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="h-full group hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className={`${value.className} w-8 h-8`} />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">{value.title}</h5>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


