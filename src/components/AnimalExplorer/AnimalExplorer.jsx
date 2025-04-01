import React, { useState } from 'react'; // Importerer React og useState-hook
import styles from './AnimalExplorer.module.css'; // Importerer modulbasert CSS for layout og design

// 🐾 Liste over alle dyr som kan velges – vises i dropdown
const animals = [
  { value: '', label: '-- Choose --' },             // Standard tomvalg
  { value: 'cat', label: '🐱 Cat' },                 // API-basert
  { value: 'dog', label: '🐶 Dog' },                 // Manuell fakta + bilde via API
  { value: 'fox', label: '🦊 Fox' },                 // Manuell data
  { value: 'panda', label: '🐼 Panda' },             // Manuell data
  { value: 'duck', label: '🦆 Duck' },               // Manuell data
  { value: 'joakim', label: '🐨 Joakim' }            // 🎉 Spesial-karakter
];

// 🌿 Komponent for dyrevelgeren. Tar imot onAnimalSelected som prop (fra App.jsx)
function AnimalExplorer({ onAnimalSelected }) {
  const [selectedAnimal, setSelectedAnimal] = useState(''); // Holder på valgt dyr

  // 📌 Oppdaterer når brukeren velger fra dropdown
  const handleSelect = (e) => {
    setSelectedAnimal(e.target.value);
  };

  // 📤 Når knapp trykkes, send dyr tilbake til App via prop
  const handleOpenModal = () => {
    if (selectedAnimal) {
      onAnimalSelected(selectedAnimal);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* 🔠 Logo med animert tekst og emoji-poter */}
        <h1 className={styles.logo}>
          <span className={styles.pawLeft}>🐾</span>
          <span className={styles.logoText}>Animal-dex</span>
          <span className={styles.pawRight}>🐾</span>
        </h1>

        {/* 📑 Label + dropdown meny */}
        <label htmlFor="animal-select">Choose an animal:</label>
        <select
          id="animal-select"
          value={selectedAnimal}
          onChange={handleSelect}
          className={styles.dropdown}
        >
          {animals.map((animal) => (
            <option key={animal.value} value={animal.value}>
              {animal.label}
            </option>
          ))}
        </select>

        {/* ✅ Vis knapp når et dyr er valgt */}
        {selectedAnimal && (
          <button className={styles.openButton} onClick={handleOpenModal}>
            Show fact and image
          </button>
        )}
      </div>
    </div>
  );
}

export default AnimalExplorer; // 🔄 Gjør komponenten tilgjengelig for bruk i App.jsx
