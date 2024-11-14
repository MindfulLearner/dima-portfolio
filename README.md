# Dima Portfolio

## Project Description

This is a portfolio website for myself, I've made it in VSCode theme.

I'm using React, Typescript, Framer Motion, Tailwind CSS.

## Idea

- You can click a switch that will show you the entire code, since is open here in my github you can at least see it in the website! Very cool feature right?
- You can also resize every panel in the website.

## Layot Base Idea:

- Divided the web app into 4 layers so I can define my structure in different parts of the work.
- Why that? For m it seems more organized. For example, if I have to work on panel number 3, I can easily go to its folder or use ctrl+p to search for it in the right folder.

## Base Layout in Figma:
![Screenshot 2024-11-13 154222](https://github.com/user-attachments/assets/9e612475-4b22-4e88-8564-6086b81ecd95)


## Project Structure

```bash
src
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── BottomSection
│   │   └── BottomSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MainContainer.tsx
│   ├── PublicComponents
│   │   ├── Components
│   │   │   └── squareCards.tsx
│   │   └── svgtsx
│   │       ├── component-discord-svg.tsx
│   │       ├── component-github-svg.tsx
│   │       ├── component-gmail-svg.tsx
│   │       ├── component-linkedin-svg.tsx
│   │       └── component-twitter-svg.tsx
│   ├── SidePanel
│   │   └── SidePanel.tsx
│   ├── TextEditorSection
│   │   ├── TextEditorPanel1.tsx
│   │   ├── TextEditorPanel2.tsx
│   │   ├── TextEditorPanel3.tsx
│   │   ├── TextEditorPanel4.tsx
│   │   └── TextEditorSection.tsx
│   └── data
│       ├── ArraySvgComponents.tsx
│       ├── CarouselWork.tsx
│       └── arraySkill.tsx
├── index.css
├── index.tsx
├── interfaces
│   ├── squareInterface.tsx
│   └── svgInterface.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
