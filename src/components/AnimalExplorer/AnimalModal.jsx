import React, { useEffect, useState } from 'react'; // Importerer React og hooks
import styles from './AnimalModal.module.css';      // Importerer modulbasert CSS
import { useAnimalFacts } from './useAnimalFacts';  // Custom hook for å hente fakta
import { useAnimalImage } from './useAnimalImage';  // Custom hook for å hente bilder

// AnimalModal – vises når bruker har valgt et dyr og trykker "Show fact and image"
function AnimalModal({ animal, onClose }) {
  const [tab, setTab] = useState('facts'); // Aktivt tab: 'facts' eller 'image'
  const { facts, loading, error } = useAnimalFacts(animal); // Fakta fra hook
  const { imageUrl, refreshImage } = useAnimalImage(animal); // Bilde fra hook
  const [currentFact, setCurrentFact] = useState(''); // Holder nåværende faktatekst

  // Når fakta endres, velg en tilfeldig én (men ikke samme som før)
  useEffect(() => {
    if (facts.length > 0) {
      setCurrentFact(randomFact(facts, currentFact));
    }
  }, [facts]);

  // Funksjon for å hente en tilfeldig faktatekst
  const randomFact = (list, prevFact) => {
    if (!list || list.length === 0) return 'No facts available';

    let newFact;
    do {
      newFact = list[Math.floor(Math.random() * list.length)];
    } while (newFact === prevFact && list.length > 1); // Unngå samme som forrige

    return newFact;
  };

  // Når bruker klikker "New fact"-knappen
  const handleNewFact = () => {
    setCurrentFact(randomFact(facts, currentFact));
  };

  return (
    <div className={styles.overlay}> {/* Mørk bakgrunn bak modalen */}
      <div className={styles.modal}> {/* Selve modalen */}
        <h2>{animal.toUpperCase()}</h2> {/* Overskrift – dyrenavn i caps */}

        {/* Tab-knapper */}
        <div className={styles.tabs}>
          <button onClick={() => setTab('facts')}>Facts</button>
          <button onClick={() => setTab('image')}>Image</button>
        </div>

        <div className={styles.content}>
          {/* Viser "Loading..." mens API-data hentes */}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>} {/* Viser feil hvis noe gikk galt */}

          {/* Fakta-tab: viser en random fakta */}
          {tab === 'facts' && !loading && !error && (
            <div>
              <p>{currentFact || 'Click to show a fun fact!'}</p>
              <button onClick={handleNewFact}>🔁 New fact</button>
            </div>
          )}

          {/* Bilde-tab: viser bilde om tilgjengelig, ellers feilmelding */}
          {tab === 'image' && (
            <>
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt={animal}
                    className={styles.animalImage}
                  />
                  <button onClick={refreshImage}>🔁 New image</button>
                </>
              ) : (
                <p>No image available</p>
              )}
            </>
          )}
        </div>

        {/* Lukkeknapp nederst */}
        <button className={styles.closeButton} onClick={onClose}>
          ❌ Close
        </button>
      </div>
    </div>
  );
}

export default AnimalModal; // Eksporterer komponenten
