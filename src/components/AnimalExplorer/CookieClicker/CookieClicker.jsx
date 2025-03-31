import React, { useState } from 'react'; // Importerer React og useState hook
import styles from './CookieClicker.module.css'; // Importerer modulbasert CSS-styling

function CookieClicker() {
  const [score, setScore] = useState(0); // Holder styr på antall cookies samlet

  const handleClick = () => {
    const newScore = score + 1; // Øker poengsummen med 1
    setScore(newScore); // Oppdaterer state

    if (newScore % 10 === 0) {
      triggerEmojiBurst(); // Trigger emoji-animasjon hver 10. cookie
    }
  };

  const triggerEmojiBurst = () => {
    const emojis = ['🐶', '🐱', '🦊', '🐼', '🦆', '🍪']; // Emojier som skal "poppe"
    const burstContainer = document.createElement('div'); // Lager en div som container
    burstContainer.className = styles.burstContainer; // Legger til styling-klasse

    for (let i = 0; i < 10; i++) {
      const emoji = document.createElement('div'); // Lager et nytt emoji-element
      emoji.className = styles.emoji; // Styling for animasjon
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)]; // Velger en tilfeldig emoji

      // Tilfeldig horisontal posisjon og liten animasjonsforsinkelse
      emoji.style.left = `${Math.random() * 100}%`; // Plassering fra venstre
      emoji.style.animationDelay = `${Math.random() * 0.3}s`; // Forsinkelse for variasjon

      burstContainer.appendChild(emoji); // Legger til emoji i containeren
    }

    document.body.appendChild(burstContainer); // Legger containeren på siden (vises over alt)

    // Fjerner containeren etter 2 sekunder (slik at det ikke blir uendelig mange div-er)
    setTimeout(() => {
      document.body.removeChild(burstContainer);
    }, 2000);
  };

  return (
    <div className={styles.container}> {/* Hovedkortet med tittel og cookie */}
      <h2 className={styles.title}>🍪 Animal Snack Collector</h2> {/* Overskrift */}
      <p className={styles.description}>
        Click the cookie to collect snacks for the animals!
      </p>

      <div className={styles.scoreBox}>
        Cookies collected: <span className={styles.score}>{score}</span> {/* Viser antall samlet */}
      </div>

      <img
        src="/images/styggcookie.png" // Henter bildet fra public/images-mappa
        alt="Ugly cookie" // Skjermleser-tekst
        className={styles.cookieImage} // Styling for bildet
        onClick={handleClick} // Hver klikk utløser handleClick
        role="button" // Tilgjengelighet: sier at dette fungerer som knapp
        aria-label="Click to collect cookie" // Beskrivelse for skjermlesere
      />
    </div>
  );
}

export default CookieClicker; // Gjør komponenten tilgjengelig for import
