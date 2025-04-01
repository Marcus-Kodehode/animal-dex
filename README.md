# 🐾 Animal-dex

**Animal-dex** er en interaktiv React-applikasjon hvor du kan utforske spennende fakta om dyr, se bilder, spille cookie-spill, samle poeng og utfordre deg selv (og vennene dine!) i en leken og moderne grensesnitt.

Prosjektet ble utviklet som en del av en React-oppgave med fokus på `useState`, `useEffect` og API-integrasjon – men ble raskt til et **komplett mini-univers med humor, stil og funksjonalitet**.

---

## 🚀 Funksjonalitet

### 🧠 Dyrefakta + bilder
- Velg mellom dyrene: **katt, hund, rev, panda, and og Joakim**.
- Fakta for katten hentes via API (`catfact.ninja`), resten er håndlaget.
- Bildene vises sammen med fakta i en **modal**, og kan byttes manuelt.
- All tekst er på engelsk og tilpasset internasjonal målgruppe.

### 🍪 Cookie Clicker med leaderboard
- Klikk på en **stygg kjeks** for å samle snacks til dyrene!
- Hver 10. klikk trigger en **emoji-konfetti-animasjon**.
- Hver 50. klikk åpner en **registreringsmodal** hvor du kan registrere navnet og e-posten din, og bli med på et:
  
  ### 🏆 Leaderboard
  - Viser alle registrerte brukere og deres score (høyest til lavest).
  - 🥇🥈🥉 for de tre beste!
  - Mulighet for å **nullstille** leaderboardet med én knapp.
  - All data lagres i `localStorage`.

### ⛔ Forbidden Zone (på egen risiko!)
- En mystisk knapp øverst i høyre hjørne.
- Starter en reise gjennom **4 advarende modaler**, med animerte `.gif`-er.
- Den siste modalen spiller en **loopet lydfil** – og kan **ikke lukkes**.
- Bare én utvei: **refresh siden** 😈

---

## 🎨 Design og opplevelse

Appens uttrykk er varmt, lekent og moderne:

- **Font:** [Fredoka](https://fonts.google.com/specimen/Fredoka) – rund, vennlig og lettlest.
- **Farger:** Lilla, solgule aksenter og lyse pastellgradienter i bakgrunnen.
- **Animasjon:** Konfetti-effekter, “bouncy” emoji-titler og myke modaler.
- **Responsivt:** Skalerer godt på både mobil og desktop.

Stylingen kombinerer `global.css` for tema og variabler, med `module.css` for komponentbasert styling. Alt er strukturert med tanke på **gjenbruk, oversiktlighet og profesjonelt uttrykk**.

---

## 🧠 Teknologi og struktur

### 🧱 Teknologier brukt

- **React + Vite** for lynrask utvikling
- **Hooks**: `useState`, `useEffect`
- **Modulær CSS** (`.module.css`) for skalerbar stilstruktur
- **LocalStorage** for leaderboard og poeng
- **Audio og bilder** via `/public`-mappen
- **Mappestruktur** med fokus på komponenter og gjenbruk

### 📁 Struktur
src/ └── components/ ├── AnimalExplorer/ ├── CookieClicker/ ├── UserSystem/ └── ForbiddenZone/ public/ └── images/ → .jpg/.gif └── sounds/ → .mp3

yaml
Kopier
Rediger

---

## 💡 Mulige forbedringer

Denne appen er laget for å være utvidbar og eksperimentell. Noen videreutviklingsidéer:

- 🔍 Legge til søk/filter på dyreliste
- 🐾 Legge til flere dyrearter og fakta
- 📸 Laste opp egne dyrebilder
- 🌙 Mørk modus med veksleknapp
- 📊 Lagre “high scores” med dato

---

## ✅ Oppfylte krav

| Del                     | Status         |
|-------------------------|----------------|
| CookieClicker           | ✅ Ferdig      |
| Fakta fra Cat API       | ✅ Fullført    |
| Liste + legg til bruker | ✅ Integrert i leaderboard |
| Bruk av useState        | ✅ Ja          |
| Bruk av useEffect       | ✅ Ja          |
| `localStorage` brukt    | ✅ For poeng og brukere |
| Utvidelser              | ✅ Forbidden zone, styling, lyd, animasjoner |

---

## ✍️ Laget av Marcus @ Kodehode
Frontend-nerd med lidenskap for **design, data og detaljer.**  
🔥 Alltid litt for gira på modaler og gradienter.

```js
// 💍 One bug to find them,
// 🔥 One fix to bring them all,
// 💡 And in the darkness bind them.


📜 Lisens
Dette prosjektet er laget med 💜 for læring og lek:

Du kan bruke det i undervisning, videreutvikle det, eller bruke det som inspirasjon.

Gjerne krediter utvikler ved deling, og ikke lat som det er ditt eget 😄

All bruk som respekterer åpen kildekode-ånden er hjertelig velkommen.

Takk for at du besøkte dyreuniverset mitt 🐾
Trykk på kjeksen, utforsk fakta – og kanskje... trykk på den forbudte knappen?
