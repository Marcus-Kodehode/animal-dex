import React, { useState } from 'react';                     // React og useState hook
import styles from './RegisterModal.module.css';             // Modulbasert styling

// 🎯 RegisterModal – vises når brukeren når et cookie-mål (f.eks. 50)
// Gir valget mellom å registrere poeng eller fortsette å klikke
function RegisterModal({ score, onRegister, onClose }) {
  const [name, setName] = useState('');                      // Input state for navn
  const [email, setEmail] = useState('');                    // Input state for e-post
  const [error, setError] = useState('');                    // Feilmelding hvis felt mangler

  // 📩 Håndter innsending av registrering
  const handleSubmit = (e) => {
    e.preventDefault();                                      // Forhindre at siden refresher

    // ⚠️ Enkel validering: sjekk at begge felt er utfylt
    if (name.trim() === '' || email.trim() === '') {
      setError('Please enter both name and email.');
      return;
    }

    // 👤 Lag brukerobjekt med score og input
    const newUser = {
      username: name,
      email: email,
      score,                    // Poengsummen fra cookie clicker
    };

    // 🧠 Hent eksisterende brukere fra localStorage
    const storedUsers = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // ➕ Legg til ny bruker i listen
    storedUsers.push(newUser);

    // 💾 Lagre oppdatert leaderboard tilbake i localStorage
    localStorage.setItem('leaderboard', JSON.stringify(storedUsers));

    // 🔄 Tilbakestill inputs og lukk modal
    setName('');
    setEmail('');
    setError('');
    onRegister(); // Informerer CookieClicker at registrering er fullført (reset score)
  };

  return (
    <div className={styles.overlay}> {/* 📦 Bakgrunn for modalen */}
      <div className={styles.modal}> {/* Hovedinnhold */}
        <h2>🎉 You've collected {score} cookies!</h2>
        <p>Would you like to register your score or keep clicking?</p>

        {/* ➡️ Knapp for å ignorere registrering og fortsette å klikke */}
        <button className={styles.cancelButton} onClick={onClose}>
          Keep Clicking
        </button>

        {/* 🧾 Registreringsskjema */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}

          {/* ✅ Submit-knapp */}
          <button type="submit" className={styles.submitButton}>
            Register Score
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal; // 📤 Gjør komponenten tilgjengelig for bruk i CookieClicker
