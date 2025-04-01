import React, { useState, useEffect } from 'react';
import styles from './CookieClicker.module.css';
import RegisterModal from '../../UserSystem/RegisterModal'; // ✅ Import av registreringsmodal (riktig sti)

// 🍪 CookieClicker-komponenten: lar brukeren samle poeng og trigge spesialmodals
function CookieClicker() {
  const [score, setScore] = useState(0);                    // 🔢 Holder styr på antall klikk/cookies
  const [showRegisterModal, setShowRegisterModal] = useState(false); // 🧾 Styrer om registreringsmodal vises

  // 🔁 Effekt som kjører hver gang `score` oppdateres
  useEffect(() => {
    if (score > 0 && score % 50 === 0) {
      setShowRegisterModal(true); // 📍 Åpne modal hver 50. cookie (50, 100, 150 osv)
    }
  }, [score]);

  // 📌 Håndterer klikk på cookie
  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore); // ✅ Øker poengsum

    // 🎉 Vis emoji-animasjon for hvert 10. klikk
    if (newScore % 10 === 0) {
      triggerEmojiBurst();
    }
  };

  // 🎊 Lager en animert burst med dyre-emojier
  const triggerEmojiBurst = () => {
    const emojis = ['🐶', '🐱', '🦊', '🐼', '🦆', '🍪']; // Tilfeldige emojier
    const burstContainer = document.createElement('div');
    burstContainer.className = styles.burstContainer;

    // 🔄 Legg til 10 tilfeldige emojis med tilfeldig posisjon/forsinkelse
    for (let i = 0; i < 10; i++) {
      const emoji = document.createElement('div');
      emoji.className = styles.emoji;
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.animationDelay = `${Math.random() * 0.3}s`;
      burstContainer.appendChild(emoji);
    }

    // 🎇 Legg container til DOM
    document.body.appendChild(burstContainer);

    // ⏱️ Fjern container etter animasjonen er ferdig
    setTimeout(() => {
      document.body.removeChild(burstContainer);
    }, 2000);
  };

  // 📝 Når bruker registrerer score → reset poeng + lukk modal
  const handleScoreRegistered = () => {
    setScore(0);                  // 🔄 Tilbakestill poeng
    setShowRegisterModal(false); // 🛑 Skjul modal
  };

  return (
    <div className={styles.container}>
      {/* 🍪 Tittel */}
      <h2 className={styles.title}>🍪 Animal Snack Collector</h2>

      {/* 📝 Beskrivelse */}
      <p className={styles.description}>
        Click the cookie to collect snacks for the animals!
      </p>

      {/* 📊 Viser poengsum */}
      <div className={styles.scoreBox}>
        Cookies collected: <span className={styles.score}>{score}</span>
      </div>

      {/* 👆 Cookie-knapp */}
      <img
        src="/images/styggcookie.png"                // 📷 Laster bilde fra public/images
        alt="Ugly cookie"
        className={styles.cookieImage}
        onClick={handleClick}                        // 🎯 Trigger klikklogikk
        role="button"
        aria-label="Click to collect cookie"
      />

      {/* 🧾 Modal for registrering vises hver 50 cookies */}
      {showRegisterModal && (
        <RegisterModal
          score={score}                              // 📤 Sender nåværende score
          onRegister={handleScoreRegistered}         // 🧹 Reset ved innsending
          onClose={() => setShowRegisterModal(false)}// ❌ Lukk uten reset
        />
      )}
    </div>
  );
}

export default CookieClicker;
