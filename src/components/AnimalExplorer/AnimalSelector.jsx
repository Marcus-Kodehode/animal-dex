import React from 'react'; // Importerer React
import styles from './AnimalSelector.module.css'; // Henter stilmodulen

// Komponent for å velge dyr fra en dropdown
function AnimalSelector({ selectedAnimal, onChange, onSubmit }) {
  return (
    <div className={styles.selector}> {/* Wrapper for dyrevelgeren */}
      
      {/* Label koblet til select med id="animal" */}
      <label htmlFor="animal">Choose an animal:</label>

      {/* Dropdown-liste for valg av dyr */}
      <select
        id="animal"                              // Matcher label htmlFor
        value={selectedAnimal}                   // Nåværende valgt dyr
        onChange={(e) => onChange(e.target.value)} // Kaller onChange når bruker velger nytt dyr
      >
        <option value="">-- Choose --</option>   {/* Tomt valg som standard */}
        <option value="cat">🐱 Cat</option>
        <option value="dog">🐶 Dog</option>
        <option value="fox">🦊 Fox</option>
        <option value="panda">🐼 Panda</option>
        <option value="duck">🦆 Duck</option>     {/* Nytt alternativ lagt til */}
        <option value="joakim">🦖 Joakim</option>
      </select>

      {/* Knapp for å vise fakta/bilde – deaktivert hvis intet dyr er valgt */}
      <button onClick={onSubmit} disabled={!selectedAnimal}>
        Show fact and image
      </button>
    </div>
  );
}

export default AnimalSelector; // Gjør komponenten tilgjengelig for andre filer
