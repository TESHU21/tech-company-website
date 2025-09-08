# TechFlow - Modern Tech Company Website

A comprehensive tech company website built with Next.js 14, Tailwind CSS v4, and modern React components.

## Features

- **Multi-page Next.js App Router Structure**
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode Toggle**
- **Smooth Animations** - Framer Motion integration
- **Modern UI Components** - shadcn/ui components
- **SEO Optimized** - Meta tags and OpenGraph
- **Performance Focused** - Optimized loading and animations

## Pages

- **Home** (`/`) - Hero, services overview, portfolio highlights
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Project showcase and case studies
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact forms and information

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Inter font

## Project Structure

```
/app                    # Next.js App Router pages
  /about               # About page
  /contact             # Contact page
  /portfolio           # Portfolio page
  /services            # Services page
  layout.tsx           # Root layout
  page.tsx             # Home page

/components             # React components
  /ui                  # shadcn/ui components
  Header.tsx           # Navigation header
  HeroSection.tsx      # Hero section
  TechIllustration.tsx # Animated tech illustration
  [other sections...]

/styles
  globals.css          # Global styles and CSS variables
```

## Getting Started

This is a Next.js project with App Router. The entry point is `/app/layout.tsx` which wraps all pages.

## Design System

The website uses a creative green color scheme with gradients and modern animations:
- **Primary:** Emerald green (#059669)
- **Secondary:** Blue accents
- **Interactive:** Smooth hover and scroll animations
- **Typography:** Inter font with optimized spacing