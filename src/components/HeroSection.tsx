"use client";

import Image from "next/image";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Code2,
  Braces ,
  Megaphone,
  Lightbulb,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden  flex items-center bg-background overflow-x-hidden "
    >
      <div className=" mt-40 mx-4 md:mx-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column — Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies
            </div>

            {/* Headline */}
            <h1 className="text-4xl   capitalize sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground  ">
             All-in-One Solutions for Modern
              <span className="text-primary"> Businesses</span> 
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed text-justify">
            Simplify, innovate, and grow. Our comprehensive solutions combine custom software, 
            web development, digital marketing, and cloud capabilities to help your business succeed
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:border-primary/50"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "99.9%", label: "Uptime Guarantee" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Hero Visual */}
          <div className="relative animate-slide-in-right">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden  ">
              <Image
                src="/images/HeroImages.webp"
                alt="Hero Visual"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Tech Icons (placed outside image area) */}
        {/* Floating Tech Icons (placed outside image area, now circular) */}
<div className="absolute -top-12 right-1/2 animate-float">
  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-md">
    <Code2 className="w-8 h-8 text-primary/70" />
  </div>
</div>
<div className="absolute top-0 left-[-20px] md:left-[-60px] animate-float" style={{ animationDelay: "1s" }}>
  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center shadow-md">
    <Braces className="w-8 h-8 text-green-500/70" />
  </div>
</div>
<div className="absolute bottom-0 right-[-20px] animate-float" style={{ animationDelay: "2s" }}>
  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center shadow-md">
    <Megaphone className="w-8 h-8 text-blue-500/70" />
  </div>
</div>
<div className="absolute top-[60%] left-[-20px] md:left-[-70px] animate-float" style={{ animationDelay: "3s" }}>
  <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center shadow-md">
    <Lightbulb className="w-7 h-7 text-yellow-500/70" />
  </div>
</div>
<div className="absolute -bottom-24 left-1/2 animate-float" style={{ animationDelay: "4s" }}>
  <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center shadow-md">
    <BarChart3 className=" w-4 h-4 md:w-8 md:h-8 text-purple-500/70" />
  </div>
</div>
<div className="absolute top-[20%] right-[-20px] animate-float" style={{ animationDelay: "5s" }}>
  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center shadow-md">
    <ShieldCheck className="w-8 h-8 text-emerald-500/70" />
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Optional background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
    </section>
  );
}
