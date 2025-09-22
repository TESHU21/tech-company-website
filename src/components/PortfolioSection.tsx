"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function PortfolioSection() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory, payment processing, and an analytics dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development",
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure mobile banking app with biometric authentication, real-time transactions, and financial insights.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "AWS", "TypeScript"],
      category: "Mobile Development",
      link: "#",
      github: "#",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud setup with auto-scaling, load balancing, and monitoring for SaaS platforms.",
      image: "/api/placeholder/400/300",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "DevOps",
      link: "#",
      github: "#",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Machine learning platform that provides predictive analytics and business intelligence for retail companies.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      category: "AI/ML",
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Management",
      description:
        "Healthcare system with patient records, appointment scheduling, and telemedicine features.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Express", "MySQL", "WebRTC"],
      category: "Healthcare",
      link: "#",
      github: "#",
    },
    {
      title: "IoT Dashboard",
      description:
        "Real-time IoT monitoring dashboard for smart city infrastructure with visualization and alerts.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "D3.js", "MQTT", "InfluxDB"],
      category: "IoT",
      link: "#",
      github: "#",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "DevOps",
    "AI/ML",
    "Healthcare",
    "IoT",
  ];

  const filteredProjects =
    categoryFilter === "All"
      ? projects
      : projects.filter((p) => p.category === categoryFilter);

  return (
    <section
      id="portfolio"
      className="w-full max-w-8xl mx-auto bg-background py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we’ve helped businesses
            transform their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === category
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-4xl text-primary/50">📱</div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let’s discuss how we can bring your vision to life with our
              expertise and innovative solutions.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
