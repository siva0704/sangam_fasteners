# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Created `llms.txt` to provide AI-friendly context for crawler and coding agents.
- Created `docs/architecture.md` to document the 5-Viewport design pattern and data ingestion strategy.
- Created `CHANGELOG.md` to track project evolution.

### Changed
- **Home Page Overhaul**: Entirely reconstructed `Home.tsx` following the 5-Viewport Structural Blueprint.
- **Hero Section**: Remapped `SectionHero.tsx` to display true capability metrics (20,000m² scale, 0.0001mm precision) with new CTAs.
- **Infrastructure Section**: Refactored `SectionInfrastructure.tsx` from standard blocks to an interactive 5/7 split-layout router synchronizing narrative text with factory images.
- **About Preview**: Overhauled into a 3-column "Operational Discipline" matrix with interactive glassmorphism.
- **Client Logos**: Replaced generic 4x4 grid with an infinite, seamless scrolling marquee utilizing 18 authentic Tier-1 client extractions.
- **Product Catalog**: Gutted the 40+ mock items in `constants/data.ts` and replaced them with the actual core washing machine shaft lineup (020, 030, 040, FL440, FL550, 4000RPM). Overhauled `SectionProducts.tsx` to feature an advanced industrial aesthetic tailored directly to these 6 components.
- **Footer CTA**: Changed to an Authority Conversion block to prompt for Technical Drawing submissions.

## [1.0.0] - 2025-02-22
### Added
- Initial project generation via Lovable.
- React + Vite + Tailwind CSS scaffolding.
- Dummy components for core B2B routes (Home, About, Contact).
