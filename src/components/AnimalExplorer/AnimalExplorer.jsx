import React, { useState } from 'react'; // Importerer React og useState hook
import AnimalModal from './AnimalModal'; // Importerer modalen for visning av fakta og bilde
import styles from './AnimalExplorer.module.css'; // Importerer styling for komponenten

// Liste over tilgjengelige dyr som brukeren kan velge
const animals = [
    { value: '', label: '-- Choose --' },       // Standard tomt valg
    { value: 'cat', label: '🐱 Cat' },
    { value: 'dog', label: '🐶 Dog' },
    { value: 'fox', label: '🦊 Fox' },
    { value: 'panda', label: '🐼 Panda' },
    { value: 'duck', label: '🦆 Duck' },
    { value: 'joakim', label: '🐨 Joakim' }    // Joakim lagt til
  ];

function AnimalExplorer() {
  const [selectedAnimal, setSelectedAnimal] = useState(''); // Holder på hvilket dyr brukeren har valgt
  const [isModalOpen, setIsModalOpen] = useState(false);    // Styrer om modalvinduet vises eller ikke

  const handleSelect = (e) => {
    setSelectedAnimal(e.target.value); // Oppdaterer hvilket dyr som er valgt i dropdown
  };

  const handleOpenModal = () => {
    if (selectedAnimal) {
      setIsModalOpen(true); // Åpner modal hvis et dyr er valgt
    }
  };

  return (
    <div className={styles.wrapper}> {/* Wrapper rundt hele seksjonen */}
      <div className={styles.card}> {/* Kort-design for tittel og valg */}

        {/* Tittel/logo */}
        <h1 className={styles.logo}>
          <span className={styles.pawLeft}>🐾</span>
          <span className={styles.logoText}>Animal-dex</span>
          <span className={styles.pawRight}>🐾</span>
        </h1>

        {/* Label og dropdown for dyrevalg */}
        <label htmlFor="animal-select">Choose an animal:</label>
        <select
          id="animal-select"
          value={selectedAnimal}
          onChange={handleSelect}
          className={styles.dropdown}
        >
          {animals.map((animal) => (
            <option key={animal.value} value={animal.value}>
              {animal.label} {/* Viser emojien + navnet på dyret */}
            </option>
          ))}
        </select>

        {/* Knapp som åpner modal, kun hvis et dyr er valgt */}
        {selectedAnimal && (
          <button className={styles.openButton} onClick={handleOpenModal}>
            Show fact and image
          </button>
        )}
      </div>

      {/* Modal vises hvis isModalOpen er true */}
      {isModalOpen && (
        <AnimalModal
          animal={selectedAnimal}               // Sender valgt dyr til modal
          onClose={() => setIsModalOpen(false)} // Lukkefunksjon for modal
        />
      )}
    </div>
  );
}

export default AnimalExplorer; // Eksporterer komponenten slik at den kan brukes i App.jsx
