'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-background py-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center md:mt-24">
        
        {/* Left side - Video / Image */}
        <div className="relative ">
          <Image
            src={"/images/whoweare.jpg"}
            alt="Company Profile Video"
            width={1200}
            height={675}
            priority
            className="rounded-xl  transition-transform duration-500 group-hover:scale-105 dark:hidden"
          />
          <Image
            src={"/images/whoweare black.jpg"}
            alt="Company Profile Video"
            width={1200}
            height={675}
            priority
            className="rounded-xl  transition-transform duration-500 group-hover:scale-105 hidden dark:flex "
          />
       
          {/* Optional floating icons for creativity */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-primary/20 rounded-full mix-blend-multiply animate-float opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full mix-blend-multiply animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are an emerging software development company dedicated to empowering businesses and individuals with cutting-edge technology.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-5 h-5 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white">✔</span>
              Prioritizing your needs
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-5 h-5 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white">✔</span>
              Committed to resolving your challenges
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-5 h-5 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white">✔</span>
              Delivering exceptional software solutions
            </li>
          </ul>
          <Button className="mt-4 bg-primary hover:bg-primary/90">
            <span className="flex items-center gap-2">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
