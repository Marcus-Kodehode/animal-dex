import React, { useEffect, useState } from 'react'; // Importerer nødvendige hooks
import styles from './ForbiddenModal.module.css';   // Importerer tilhørende modul-CSS

// 🚨 Modaldata for hvert steg i sekvensen (GIF + tekst + evt. lyd)
const modalSteps = [
  {
    gif: '/images/modal1.gif',
    text: 'Warning: This area is restricted!',
  },
  {
    gif: '/images/modal2.gif',
    text: 'You still have time to turn back...',
  },
  {
    gif: '/images/modal3.gif',
    text: 'Last chance to leave!',
  },
  {
    gif: '/images/modal4.gif',
    text: 'Too late. You are now trapped here. 😈',
    sound: '/sounds/giveup.mp3', // 🔊 Lyd kun på siste steg
  },
];

function ForbiddenModal({ onClose }) {
  const [step, setStep] = useState(0); // 🧭 Hvilket steg i modalsekvensen vi er på

  // 🎵 Spill lyd på siste steg (engangs-effekt)
  useEffect(() => {
    if (step === 3) {
      const audio = new Audio(modalSteps[3].sound);
      audio.loop = true; // Lyd skal spille uendelig
      audio.play();      // Start lyden
    }
  }, [step]);

  // 👉 Neste steg i rekkefølgen
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  // 🧩 Data for nåværende steg (tekst, gif, evt. lyd)
  const content = modalSteps[step];

  return (
    <div className={styles.overlay}> {/* Mørk bakgrunn */}
      <div className={styles.modal}> {/* Selve modalboksen */}
        <h2>⛔️ Forbidden Zone</h2> {/* Modal-tittel */}
        
        {/* 🎞️ GIF som vises for hvert steg */}
        <img
          src={content.gif}
          alt="Forbidden modal gif"
          className={styles.gif}
        />

        {/* 💬 Meldingen som vises for hvert steg */}
        <p className={styles.text}>{content.text}</p>

        {/* 🔘 Knapper vises kun for de 3 første stegene */}
        {step < 3 && (
          <div className={styles.actions}>
            <button className={styles.backButton} onClick={onClose}>
              🚪 Go back
            </button>
            <button className={styles.nextButton} onClick={handleNext}>
              👉 Continue
            </button>
          </div>
        )}

        {/* 😈 Siste steg – ingen knapper, kun advarsel */}
        {step === 3 && (
          <p className={styles.trapNote}>
            You cannot close this. Good luck... 😵‍💫
          </p>
        )}
      </div>
    </div>
  );
}

export default ForbiddenModal;
