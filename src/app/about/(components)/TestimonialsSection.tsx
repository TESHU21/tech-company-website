'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "TechFlow delivered beyond expectations. Our deployment velocity doubled while costs dropped significantly.",
    author: 'Sarah Nguyen',
    role: 'VP Engineering',
    company: 'FinEdge',
    rating: 5,
  },
  {
    quote:
      "Exceptional craftsmanship and attention to detail. The team truly understands product and business goals.",
    author: 'Daniel Brooks',
    role: 'Product Director',
    company: 'NovaHealth',
    rating: 5,
  },
  {
    quote:
      "From discovery to launch, the process was smooth and collaborative. Highly recommend.",
    author: 'Amara Okoro',
    role: 'Founder & CEO',
    company: 'MarketMint',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-10 md:pt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner stories from teams that built and scaled with TechFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-6">“{t.quote}”</p>
                <div className="mt-auto">
                  <div className="text-sm font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role} • {t.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


