# Dima Portfolio

/git commit -m "{{ name }}" con limite 20 caratteri -> da sanitizzare backend che riceve e controlla-> server in ascolto con git attivato il mio account o un account -> apre una pr con assigne la persona che ha pushato nome pr pr { n volte di pr aperti } -> verra' accettato in un attimo "controlli" di nomi non offensivi controllo codice -> accettazione PR

- PROD
- server / sanitizzazione e controllo parolacce.haha occhio al numero di spam 
- github CLI 
- github action 
  - automerge problem could be?
  - o si controlla da soli o si controlla con github action 
- readme che si modifica e commit di qualcosa? tipo linea codice 

# OPEN SOURCE IDEA / Developer Program Member
i would like to give feat where you can git push from my website like a message and will be showed there, so we will be using Github API to do this!

![image](https://github.com/user-attachments/assets/5102bfe4-65c9-4f78-ac23-fb1289274493)


## Project Description

This is a portfolio website for myself, I've made it in VSCode theme.

I'm using React, Typescript, Framer Motion, Tailwind CSS.

## Idea
- You can click a switch that will show you the entire code, since is open here in my github you can at least see it in the website! Very cool feature right?
- You can also resize every panel in the website.
- Divided the web app into 4 layers so I can define my structure in different parts of the work.
- Why that? For m it seems more organized. For example, if I have to work on panel number 3, I can easily go to its folder or use ctrl+p to search for it in the right folder.
---
### SectionPart idea: 
- I've divided the website into 4 sections, each section has a different idea of who i am. 
### Terminal Idea:
- You can type help and you can get list of my works, in array, a minigame with vimmotion and diff features.
API used: 
- quotes: https://api.quotable.io/random
- music: https://developer.spotify.com/documentation/web-api


### Right Tab Idea:
- you can click to point at the section selected.
### header and footer idea:
- still need to think about it. certantly they will be clickable as well like vscode.


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
