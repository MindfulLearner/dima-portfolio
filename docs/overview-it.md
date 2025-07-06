# Dima Portfolio - Documentazione del Progetto

## Panoramica

Questo è un sito web portfolio personale costruito con un design a tema VSCode. Il progetto mostra le mie competenze ed esperienze lavorative in un'interfaccia interattiva e user-friendly per sviluppatori.

**Stack Tecnologico:**
- React
- TypeScript
- Framer Motion
- Tailwind CSS

## Idea di Funzionalità Open Source

Sto pianificando di implementare una funzionalità dove i visitatori possono inviare messaggi al mio repository GitHub direttamente dal sito web utilizzando l'API di GitHub. Questo creerà un'esperienza di guestbook interattiva.

### Stato dell'Implementazione
- **Approccio Attuale:** AWS Lambda (in corso)
- **Approccio Precedente:** API GitHub diretta (deprecato)

![Implementazione Attuale](https://github.com/user-attachments/assets/8283a71c-00d9-486d-a5f0-215f4d598c27)

*Implementazione precedente basata su API GitHub diretta (deprecata):*
![Vecchia Implementazione](https://github.com/user-attachments/assets/5102bfe4-65c9-4f78-ac23-fb1289274493)

## Funzionalità Pianificate

### 1. Toggle di Visibilità del Codice
- Switch interattivo per mostrare l'intero codice sorgente
- Dato che il progetto è open source su GitHub, i visitatori possono esplorare il codebase direttamente dal sito web
- Fornisce trasparenza e opportunità di apprendimento

### 2. Pannelli Ridimensionabili
- Tutti i pannelli nel sito web saranno ridimensionabili
- Layout personalizzabile per una migliore esperienza utente

### 3. Architettura Modulare
- Diviso l'app web in 4 livelli distinti per una migliore organizzazione
- Ogni livello rappresenta un aspetto diverso della mia identità professionale
- Vantaggi:
  - Manutenzione e sviluppo più semplici
  - Navigazione rapida usando Ctrl+P per trovare componenti specifici
  - Chiara separazione delle responsabilità

## Suddivisione delle Sezioni

### Parti delle Sezioni
Il sito web è diviso in 4 sezioni principali, ognuna rappresentante una faccia diversa della mia identità professionale:
1. **Chi Sono** - Introduzione personale e background
2. **Competenze e Tecnologie** - Esperienza tecnica
3. **Esperienze Lavorative** - Percorso professionale e progetti
4. **Contatti e Social** - Modi per connettersi

### Interfaccia Terminale
Terminale interattivo con vari comandi:
- `help` - Elenca tutti i comandi disponibili e la mia storia lavorativa
- Mini-giochi con controlli Vim motion
- Funzionalità interattive aggiuntive

**API Utilizzate:**
- Citazioni: [quotable.io](https://api.quotable.io/random)
- Musica: [Spotify Web API](https://developer.spotify.com/documentation/web-api)

### Navigazione Tab Destra
- Tab cliccabili per navigare tra le diverse sezioni
- Esperienza di navigazione in stile VSCode

### Header e Footer
- Elementi cliccabili simili all'interfaccia VSCode
- Funzionalità aggiuntive da implementare

## Riferimento Design

**Layout Base in Figma:**
![Design Figma](https://github.com/user-attachments/assets/9e612475-4b22-4e88-8564-6086b81ecd95)

## Struttura del Progetto

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

## Note di Sviluppo

- Il progetto segue un approccio modulare per una migliore manutenibilità
- Ogni sezione è autonoma per uno sviluppo più semplice
- Il tema VSCode fornisce un'interfaccia familiare per gli sviluppatori
- L'approccio open source incoraggia il contributo della community

---

*Issue Correlata: [#49](https://github.com/MindfulLearner/dima-portfolio/issues/49)* 