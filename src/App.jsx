import React, { useState } from 'react';

// 🔽 Komponentimporter
import AnimalExplorer from './components/AnimalExplorer/AnimalExplorer'; // Dropdown med dyrevalg
import CookieClicker from './components/AnimalExplorer/CookieClicker/CookieClicker'; // Cookie-klikker
import LeaderboardModal from './components/UserSystem/LeaderboardModal'; // Leaderboard-visning
import ForbiddenModal from './components/ForbiddenZone/ForbiddenModal'; // "Ikke trykk!"-modaler
import AnimalModal from './components/AnimalExplorer/AnimalModal'; // Modal for fakta + bilde

function App() {
  // 🐾 State for dyrevisning
  const [selectedAnimal, setSelectedAnimal] = useState(''); // Hvilket dyr brukeren har valgt
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false); // Om modal for valgt dyr er åpen

  // 🏆 Leaderboard-tilstand
  const [showLeaderboard, setShowLeaderboard] = useState(false); // Om leaderboard-modalen vises

  // ⛔️ Forbidden-knapp og easter egg
  const [showForbidden, setShowForbidden] = useState(false); // Om forbidden-modalen er aktiv

  // 👉 Åpner modal for valgt dyr
  const openAnimalModal = (animal) => {
    setSelectedAnimal(animal);
    setIsAnimalModalOpen(true);
  };

  // ✖ Lukker modal for dyrefakta
  const closeAnimalModal = () => {
    setSelectedAnimal('');
    setIsAnimalModalOpen(false);
  };

  // 🔁 Toggler visning av leaderboard
  const toggleLeaderboard = () => {
    setShowLeaderboard((prev) => !prev);
  };

  return (
    <>
      {/* 🎯 Flytende knapper øverst til høyre (kun synlig hvis ingen modaler er åpne) */}
      {!isAnimalModalOpen && !showForbidden && (
        <div className="floatingButtons">
          {/* 🏆 Leaderboard-knapp */}
          <button
            onClick={toggleLeaderboard}
            className="leaderboard-button"
            aria-label="Open leaderboard"
          >
            🏆
          </button>

          {/* ⛔️ Forbidden-zone easter egg knapp */}
          <button
            onClick={() => setShowForbidden(true)}
            className="forbidden-button"
            title="Seriously, do not click this"
            aria-label="Forbidden button"
          >
            ⛔️
          </button>
        </div>
      )}

      {/* 🔳 Aktiverte modaler vises basert på state */}
      {showLeaderboard && <LeaderboardModal onClose={toggleLeaderboard} />}
      {isAnimalModalOpen && (
        <AnimalModal animal={selectedAnimal} onClose={closeAnimalModal} />
      )}
      {showForbidden && (
        <ForbiddenModal onClose={() => setShowForbidden(false)} />
      )}

      {/* 🧩 Hovedinnhold */}
      <AnimalExplorer onAnimalSelected={openAnimalModal} /> {/* Dyrevalg og fakta */}
      <CookieClicker /> {/* CookieClicker med score, registrering og leaderboard */}
    </>
  );
}

export default App;
