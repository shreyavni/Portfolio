# Avni Shukla Portfolio

Personal portfolio for Avni Shukla, an AI / ML Engineer building practical
machine-learning, Generative AI, and full-stack products.

The site presents selected projects, experience, technical skills, background,
and contact information through a responsive Next.js interface.

## Features

- Responsive portfolio layout with shared sidebar navigation
- Homepage introduction and contact call to action
- Projects gallery with individual project detail pages
- Experience timeline and achievements
- Categorized technical toolkit
- About and contact pages
- Motion-based page and card transitions
- Dark, grid-based visual design with responsive mobile navigation

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React
- ESLint

## Pages

| Route              | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `/`                | Homepage and introduction                                         |
| `/projects`        | Project gallery                                                   |
| `/projects/[slug]` | Project details                                                   |
| `/experience`      | Experience, achievements, and technologies                        |
| `/tools`           | Languages, frameworks, AI tools, databases, and deployment skills |
| `/about`           | Background, interests, and working principles                     |
| `/contact`         | Contact details and message form                                  |

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

## Project Structure

```text
app/              Next.js routes, layouts, and page styles
components/       Shared UI components and navigation
lib/              Project data and utility functions
public/            Images and other static assets
```

Key content locations:

- `lib/projects-data.ts` for project cards and project details
- `components/Sidebar.tsx` for primary navigation and profile information
- `app/*/page.tsx` for route-specific content
- `public/` for images used throughout the portfolio

## Deployment

The recommended deployment platform is [Vercel](https://vercel.com), which
supports Next.js with zero additional configuration.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Select **Next.js** as the framework preset.
4. Use `npm run build` as the build command.
5. Deploy.

No environment variables are currently required. Vercel will automatically
create new deployments for future pushes to the connected branch.

## Customization

1. Update profile and navigation details in `components/Sidebar.tsx`.
2. Update project content in `lib/projects-data.ts`.
3. Replace images in `public/` and update their references where needed.
4. Adjust global styling in `app/globals.css` and route-specific styling in the
   relevant page component or CSS module.

## License

This portfolio is a personal project. Contact the author before reusing its
content, imagery, or branding.
