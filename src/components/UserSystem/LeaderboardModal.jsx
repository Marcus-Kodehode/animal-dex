import React from 'react';
import styles from './LeaderboardModal.module.css'; // Modulbasert styling

function LeaderboardModal({ onClose }) {
  // 📦 Hent tidligere lagrede brukere fra localStorage, eller tom liste
  const storedUsers = JSON.parse(localStorage.getItem('leaderboard')) || [];

  // 📊 Sorter brukerne etter høyest score først
  const sortedUsers = storedUsers.sort((a, b) => b.score - a.score);

  // 🧹 Håndter sletting av leaderboard
  const handleClear = () => {
    const confirmClear = window.confirm(
      'Are you sure you want to clear the leaderboard? This action cannot be undone.'
    );

    if (confirmClear) {
      localStorage.removeItem('leaderboard');  // Fjern data fra localStorage
      window.location.reload();                // Oppdater siden for å reflektere endringen
    }
  };

  // 🥇 Henter riktig emoji basert på plassering
  const getMedalEmoji = (index) => {
    if (index === 0) return '🥇'; // 1. plass
    if (index === 1) return '🥈'; // 2. plass
    if (index === 2) return '🥉'; // 3. plass
    return `${index + 1}.`;       // Øvrige får tall
  };

  return (
    <div className={styles.overlay}> {/* 🔳 Mørk bakgrunn bak modalen */}
      <div className={styles.modal}> {/* 📦 Modal-vindu */}
        <h2>🏆 <span className={styles.title}>Leaderboard</span></h2>

        {/* 📋 Liste over brukere */}
        <ul className={styles.list}>
          {sortedUsers.map((user, index) => (
            <li key={index} className={styles.entry}>
              <span className={styles.rank}>{getMedalEmoji(index)}</span> {/* Rangering */}
              <span className={styles.name}>{user.username}</span>         {/* Brukernavn */}
              <span className={styles.score}>{user.score} 🍪</span>        {/* Score + emoji */}
            </li>
          ))}
        </ul>

        {/* 🔘 Knapper for lukk og slett */}
        <div className={styles.buttonRow}>
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
          <button onClick={handleClear} className={styles.clearButton}>
            Clear Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardModal;
