'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: 'Ava Thompson',
    role: 'CEO & Co‑Founder',
    bio: 'Leads company vision and strategy with a focus on customer value.',
    initials: 'AT',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Liam Carter',
    role: 'CTO',
    bio: 'Architects scalable platforms and ensures technical excellence.',
    initials: 'LC',
    socials: { github: '#', linkedin: '#' },
  },
  {
    name: 'Mia Rodriguez',
    role: 'Head of Design',
    bio: 'Crafts delightful user experiences and cohesive brand systems.',
    initials: 'MR',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Noah Patel',
    role: 'Lead Engineer',
    bio: 'Builds reliable services and mentors the engineering team.',
    initials: 'NP',
    socials: { github: '#', linkedin: '#' },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full max-w-8xl mx-auto bg-background ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multidisciplinary team committed to building high‑quality, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-semibold mb-4 group-hover:bg-primary/20 transition-colors">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    {member.socials?.github && (
                      <a href={member.socials.github} aria-label={`${member.name} on GitHub`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.linkedin && (
                      <a href={member.socials.linkedin} aria-label={`${member.name} on LinkedIn`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a href={member.socials.twitter} aria-label={`${member.name} on X`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


