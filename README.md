# SyraGPT

A beautiful, interactive PWA where you chat face-to-face with **Syra** — an AI companion and assistant with a warm anime persona. Talk to her with your voice or type messages, and she replies in the same language you use.

<img width="1034" height="677" alt="Screenshot 2026-06-09 021454" src="https://github.com/user-attachments/assets/a434095f-a207-4a6f-8067-87dd941d97a4" />




## Features

- **Voice Companion Mode** — real two-way voice chat using Web Speech API (speech recognition + female TTS) in 20+ languages
- **Assistant Mode** — threaded chat with file attachments, streaming responses, and markdown support
- **Multilingual by default** — English, Hindi, Hinglish, and 100+ languages auto-detected
- **Anime persona** — Syra has a playful, caring personality with a cherry-blossom sunset aesthetic
- **Real Google sign-in** — secure authentication via Cloud
- **Progressive Web App** — installable on mobile and desktop, with offline shell caching

---

## Tech Stack

- **Framework:** TanStack Start (React 19, full-stack SSR/SSG)
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS v4 + custom glassmorphism theme
- **Backend:** Cloud (Supabase) — Auth, Database, Storage
- **AI:** Google Gemini
- **PWA:** Web App Manifest + Service Worker

---

## Project Structure

```
public/              # PWA manifest, service worker, icons, robots
src/
  components/        # Reusable UI (Petals, etc.)
  hooks/             # Mobile detection hook
  integrations/      # Supabase and Lovable Cloud clients
  lib/               # AI gateway, config, utilities
  routes/            # TanStack Start file-based routes
    __root.tsx       # Root layout
    index.tsx        # Landing page
    _authenticated/  # Protected routes
      app/index.tsx  # Mode selection
      companion.tsx  # Voice chat
      chat/          # Threaded assistant chat
  styles.css         # Global theme and animations
  start.ts           # Start instance configuration
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended)
- A Cloud backend connected to the project

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun dev
```

Open http://localhost:8080 in your browser.

### Build for production

```bash
bun run build
```

---

## Key Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page and sign-in |
| `/app` | Mode selection (Companion / Assistant) |
| `/companion` | Voice-to-voice chat with Syra |
| `/chat` | List of assistant chat threads |
| `/chat/$threadId` | Individual assistant conversation |
| `/api/chat` | Server endpoint that streams AI responses |

---

## PWA

SyraGPT is designed as an installable Progressive Web App:

- `public/manifest.webmanifest` defines app metadata and theme colors
- `public/sw.js` caches the app shell for offline use
---

## License

All rights reserved by the project owner.

---

## Credits

- Character: **Syra** — your anime AI companion
- AI: Google Gemini.

Made with ❤ by [iabhinavtiwari273](https://github.com/iabhinavtiwari273)
