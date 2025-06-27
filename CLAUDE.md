# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 project for GreenGo Lawncare, a lawn care service company website. The project uses the Pages Router architecture and is built with TypeScript, React, and Tailwind CSS with custom SCSS styling.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Framework Stack
- **Next.js 14** with Pages Router (`src/pages/` directory)
- **TypeScript** for type safety
- **React 18** for UI components
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with CSS custom properties
- **React Hook Form + Zod** for form validation
- **next-seo** for SEO and Open Graph tags
- **Vercel Analytics** for usage tracking
- **Lucide React** for icons

### Project Structure
- `src/pages/` - Next.js pages using Pages Router
  - `index.tsx` - Homepage with hero section and services overview
  - `services.tsx` - Detailed services page with pricing
  - `landscaping.tsx` - Landscaping services with gallery and testimonials
  - `about.tsx` - Company information, team, and values
  - `contact.tsx` - Contact form with validation using react-hook-form + zod
  - `_app.tsx` - App wrapper with global styles, analytics, and SEO
  - `_document.tsx` - Custom document structure
  - `api/` - API routes
- `src/components/` - Reusable UI components
  - `layout/` - Header, Footer, and Layout components
  - `sections/` - Page sections like Hero
  - `ui/` - shadcn/ui components (Button, Card, Tabs, Input, etc.)
- `src/lib/` - Utility functions including `cn()` for class merging
- `src/styles/` - Global styles with shadcn CSS variables
- `public/` - Static assets including logos and favicons
- `components.json` - shadcn/ui configuration
- `next-seo.config.js` - SEO configuration with Open Graph tags

### Key Features
- **Service Categories**: Lawn Maintenance, Landscaping, Cleanups displayed with Tabs component
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **shadcn/ui Components**: Modern UI with Card, Button, and Tabs components
- **Light Theme**: Clean light design with green accent color (hsl(142, 76%, 36%))
- **External Image Assets**: Services images hosted on AWS S3

### Styling System
- **Base**: Tailwind CSS utilities with CSS custom properties
- **Component Library**: shadcn/ui components with consistent design tokens
- **Color Scheme**: Light theme with green primary color and semantic color variables
- **Typography**: Open Sans font family loaded via next/font/google

### Key Technical Patterns
- **Component Architecture**: Uses shadcn/ui components for consistent design
- **Tab-based Navigation**: Service categories displayed as tabs instead of custom selector
- **Card Layout**: Service cards using shadcn Card component with proper semantic structure
- **Icon Integration**: Lucide React icons for consistent iconography
- **CSS Variables**: Semantic color system using CSS custom properties

## TypeScript Configuration

The project uses strict TypeScript settings with path aliases configured:
- `@/*` maps to `./src/*` for clean imports
- Strict mode enabled for better type safety