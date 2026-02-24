# Sangam Fasteners Corporate Portal

A high-performance B2B procurement web application engineered to showcase the manufacturing scale and precision of Sangam Fasteners Private Limited.

## Quick Start

Follow these steps to run the project locally in under 2 minutes:

```sh
# Step 1: Clone the repository
git clone https://github.com/siva0704/sangam_fasteners.git

# Step 2: Navigate to the project directory
cd sangam_fasteners

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Features

- **5-Viewport Procurement Architecture**: A high-conversion homepage sequence explicitly designed for Tier-1 OEM technical buyers.
- **Industrial Glassmorphism UI**: A dark-mode aesthetic utilizing deep slate backgrounds and high-contrast electric blue accents.
- **Dynamic Infrastructure Exhibition**: An interactive 5/7 split-layout router showcasing actual factory floor imagery synchronized with capability data.
- **Centralized Data Management**: Product lines (020, 030, 040 shafts) and operational metrics are decoupled from components for rapid content iteration.
- **Instant Procurement Integration**: High-contrast, low-friction technical drawing submission interfaces via `mailto:` protocols.

## Configuration

| Variable/File | Description | Default Location |
|----------|-------------|---------|
| `tailwind.config.ts` | Theme definitions, color palettes (slate/accent), and animations | Root |
| `src/index.css` | Global CSS variables and glassmorphism utilities | `src/` |
| `src/constants/data.ts` | Product catalog, manufacturing features, and industry stats | `src/constants/` |
| `vite.config.ts` | Vite build configurations and path resolutions | Root |

## Documentation

- [AI Documentation](./llms.txt)
- [System Architecture](./docs/architecture.md)
- [Changelog](./CHANGELOG.md)

## Deployment

The application utilizes GitHub Actions (or manual deployment) to push the built bundle to GitHub Pages.

```sh
# Deploy to the gh-pages branch
npm run deploy
```

## License

MIT
