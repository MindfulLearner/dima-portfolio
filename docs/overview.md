# Dima Portfolio - Project Documentation

## Overview

This is a personal portfolio website built with a VSCode theme design. The project showcases my skills and work experience in an interactive, developer-friendly interface.

**Tech Stack:**
- React
- TypeScript
- Framer Motion
- Tailwind CSS

## Open Source Feature Idea

I'm planning to implement a feature where visitors can push messages to my GitHub repository directly from the website using the GitHub API. This will create an interactive guestbook experience.

### Implementation Status
- **Current Approach:** AWS Lambda (in progress)
- **Previous Approach:** Direct GitHub API (deprecated)

![Current Implementation](https://github.com/user-attachments/assets/8283a71c-00d9-486d-a5f0-215f4d598c27)

*Previous direct GitHub API implementation (deprecated):*
![Old Implementation](https://github.com/user-attachments/assets/5102bfe4-65c9-4f78-ac23-fb1289274493)

## Planned Features

### 1. Code Visibility Toggle
- Interactive switch to display the entire source code
- Since the project is open source on GitHub, visitors can explore the codebase directly from the website
- Provides transparency and learning opportunities

### 2. Resizable Panels
- All panels in the website will be resizable
- Customizable layout for better user experience

### 3. Modular Architecture
- Divided the web app into 4 distinct layers for better organization
- Each layer represents a different aspect of my professional identity
- Benefits:
  - Easier maintenance and development
  - Quick navigation using Ctrl+P to find specific components
  - Clear separation of concerns

## Section Breakdown

### Section Parts
The website is divided into 4 main sections, each representing a different facet of my professional identity:
1. **About Me** - Personal introduction and background
2. **Skills & Technologies** - Technical expertise
3. **Work Experience** - Professional journey and projects
4. **Contact & Social** - Ways to connect

### Terminal Interface
Interactive terminal with various commands:
- `help` - Lists all available commands and my work history
- Mini-games with Vim motion controls
- Additional interactive features

**APIs Used:**
- Quotes: [quotable.io](https://api.quotable.io/random)
- Music: [Spotify Web API](https://developer.spotify.com/documentation/web-api)

### Right Tab Navigation
- Clickable tabs to navigate between different sections
- VSCode-style navigation experience

### Header & Footer
- Clickable elements similar to VSCode interface
- Additional functionality to be implemented

## Design Reference

**Base Layout in Figma:**
![Figma Design](https://github.com/user-attachments/assets/9e612475-4b22-4e88-8564-6086b81ecd95)

## Project Structure

```bash
src/
├── App.css
├── App.test.tsx
├── App.tsx
├── components/
│   ├── BottomSection/
│   │   └── BottomSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MainContainer.tsx
│   ├── PublicComponents/
│   │   ├── Components/
│   │   │   └── squareCards.tsx
│   │   └── svgtsx/
│   │       ├── component-discord-svg.tsx
│   │       ├── component-github-svg.tsx
│   │       ├── component-gmail-svg.tsx
│   │       ├── component-linkedin-svg.tsx
│   │       └── component-twitter-svg.tsx
│   ├── SidePanel/
│   │   └── SidePanel.tsx
│   ├── TextEditorSection/
│   │   ├── TextEditorPanel1.tsx
│   │   ├── TextEditorPanel2.tsx
│   │   ├── TextEditorPanel3.tsx
│   │   ├── TextEditorPanel4.tsx
│   │   └── TextEditorSection.tsx
│   └── data/
│       ├── ArraySvgComponents.tsx
│       ├── CarouselWork.tsx
│       └── arraySkill.tsx
├── index.css
├── index.tsx
├── interfaces/
│   ├── squareInterface.tsx
│   └── svgInterface.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```

## Development Notes

- The project follows a modular approach for better maintainability
- Each section is self-contained for easier development
- VSCode theme provides familiar interface for developers
- Open source approach encourages community contribution

---

*Related Issue: [#49](https://github.com/MindfulLearner/dima-portfolio/issues/49)*
