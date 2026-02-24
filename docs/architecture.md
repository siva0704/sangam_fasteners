# System Architecture
> Sangam Fasteners Corporate Web Portal

## Overview
This document outlines the architectural decisions and system design for the Sangam Fasteners B2B procurement portal. The architecture prioritizes predictable performance, SEO-friendliness, and high-conversion visual aesthetics designed specifically for tier-1 OEM procurement engineers.

## ADR-001: Componentized "Viewport" Routing
### Status
Accepted

### Context
Technical buyers and procurement leads suffer from "scroll fatigue" when dealing with B2B websites that present walls of text. To maximize conversion, the home page needed to act less like a standard brochure and more like a sequenced technical presentation.

### Decision
The primary `Home.tsx` is strictly structured into 5 sequential "Viewports."
1. **Viewport 01 (Proof of Truth)**: Hero section establishing scale and precision immediately.
2. **Viewport 02 (Institutional Validation)**: Client logo marquee providing immediate social proof.
3. **Viewport 03 (Why Us Matrix)**: Glassmorphic matrix explaining operational excellence rules.
4. **Viewport 04 (Machinery Exhibition)**: Data-heavy 5/7 split interactive image router displaying strict capabilities.
5. **Viewport 05 (Authority Conversion)**: High contrast, low friction technical drawing submission via footer CTA.

### Consequences
- **Pros**: Drastically higher engagement; prevents users from missing key capabilities.
- **Cons**: Requires rigid adherence to component height constraints to ensure transitions trigger correctly during scroll.

## Frontend Stack & Tooling

| Layer | Technology | Decision Rationale |
|-------|------------|--------------------|
| **Core Framework** | React 18 + Vite | Chosen for rapid compilation, HMR speed, and extensive plugin ecosystem. |
| **Routing** | React Router v6 | Standard client-side routing allowing seamless transitions between the Home, About, and Product pages. |
| **Styling** | Tailwind CSS + custom vars | Utility-first approach allowing strict adherence to the "Industrial Glassmorphism" thematic blueprint without writing verbose CSS. |
| **UI Components** | Shadcn UI | Headless accessible components used as a baseline for complex interactions (carousels, dialogs). |
| **Animation** | Framer Motion + CSS | Used for enter animations (fade-up, fade-right) and the complex synchronized image routing in Viewport 04. |

## Data Ingestion Strategy
The portal utilizes a "Static Content Injection" strategy. 

Instead of an external CMS that would slow down initialization, raw data provided by Sangam Fasteners (via Word documents and PPTX presentations) is processed and statically injected into a central data store (`src/constants/data.ts`). 

This severely limits network latency, ensuring the site loads instantly while allowing developers to update statistics and product catalogs (e.g., the 020, 030, and 040 shafts) via simple TypeScript modifications rather than digging through component code.

## Deployment Pipeline
The application utilizes a fully automated CI/CD pipeline via GitHub Actions using the `gh-pages` branch deployment strategy. 
The build script (`npm run build:gh-pages`) injects the proper `--base=/sangam_fasteners/` pathing required for the sub-directory hosting environment.
