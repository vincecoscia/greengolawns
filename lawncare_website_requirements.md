# Lawncare Service Website Requirements

This file outlines all the necessary pieces for building a lawncare (including landscaping) service website using Next.js, shadcn/ui + Tailwind CSS, and AWS for image hosting.

## 1. Project Setup

- **Next.js**: Base framework for SSR/SSG and routing
- **TypeScript**: Strict typing for reliability
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built components styled with Tailwind
- **ESLint + Prettier**: Code quality and formatting
- **Husky + lint-staged**: Git hooks for linting and formatting on commit

## 2. Dependencies

```bash
npm install next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer
npm install shadcn-ui aws-sdk @aws-sdk/client-s3
npm install eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged
```

## 3. Configuration Files

- ``: Next.js config (images domains, environment variables)
- ``: Tailwind setup and custom theming
- ``: PostCSS plugins
- ``: Local environment variables
- ``: ESLint rules
- ``: Prettier rules
- ``: Git hooks config
- ``: TypeScript settings

## 4. Folder Structure

```
/src
  /components      # Reusable UI components
    /layout        # Header, Footer, Nav
    /ui            # shadcn/ui overrides & custom components
    /sections      # Page-specific sections (Hero, Services, Gallery)
  /pages           # Next.js pages
    index.tsx      # Home
    services.tsx   # Services overview
    landscaping.tsx# Landscaping details
    about.tsx      # About us
    contact.tsx    # Contact form
  /lib             # Utilities & API clients (e.g., AWS S3)
  /hooks           # Custom React hooks
  /styles          # Global styles, Tailwind overrides
  /public          # Static assets
  /assets          # Local images/icons (if any)
/utils
  aws-s3.ts        # S3 upload/download helpers
  form-validators.ts

/tests             # Unit and integration tests
```

## 5. AWS Image Hosting

- **S3 Bucket**: Configure bucket for public/private image hosting
- **IAM Credentials**: Store in environment variables
- **Upload Utility**: Implement `uploadImage(file)` using `@aws-sdk/client-s3`
- **Image Optimization**: Use Next.js `next/image` with S3 URLs

## 6. Pages & Content

### Home (`/`)

- Hero section with background image
- Overview of services (lawncare, landscaping)
- Call-to-action buttons

### Services (`/services`)

- List of offerings: Mowing, Edging, Fertilization, Seasonal Cleanups, Landscaping Design
- Service cards with icons/images

### Landscaping (`/landscaping`)

- Detailed description of landscaping services
- Before & after image gallery
- Testimonials section

### About Us (`/about`)

- Company history
- Team bios
- Mission & values

### Contact (`/contact`)

- Contact form (name, email, phone, message)
- Integration with email service or API endpoint
- Map embed (Google Maps)

## 7. Components

- ``: Responsive navigation
- ``: Site footer with social links
- ``: shadcn/ui Button overrides
- ``: Service cards
- ``: Image grid for before/after
- ``: Customer feedback
- ``: Banner section
- ``: Contact form inputs & validation

## 8. Styling & Theming

- **Tailwind Customization**: Extend colors (greens, neutrals), font families
- **Dark Mode**: Optional implementation
- **Responsive Design**: Mobile-first breakpoints

## 9. Forms & Validation

- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **Error Messages**: Inline field-level error display

## 10. SEO & Analytics

- **next-seo**: Page-level SEO meta tags
- **sitemap.xml**: Auto-generated sitemap
- **robots.txt**: Robots configuration
- **Google Analytics** (or alternative)
- **Open Graph Tags**: Social sharing optimization

## 11. Deployment & CI/CD

- **Vercel** (or AWS Amplify)
- **GitHub Actions**: Tests, linting, build, deploy pipeline
- **Environment Secrets**: AWS keys, analytics IDs

## 12. Testing

- **Jest**: Unit tests
- **React Testing Library**: Component testing
- **Cypress**: End-to-end tests for form submissions and navigation

## 13. Documentation

- **README.md**: Project overview and setup instructions
- **CONTRIBUTING.md**: Contribution guidelines
- **CHANGELOG.md**: Release notes

## 14. Monitoring & Maintenance

- **Error Reporting**: Sentry or LogRocket
- **Performance Monitoring**: Lighthouse CI integration
- **Backup**: Regular S3 backup strategy

---

*Feel free to adjust sections and add more detail as the project evolves.*

