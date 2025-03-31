// src/components/hooks/useAnimalImage.js

import { useEffect, useState } from 'react'; // Importerer React hooks
import { animalConfig } from '../../data/animalConfig'; // Henter konfigurasjon for dyrene

/**
 * Custom hook: useAnimalImage
 * Returnerer et bilde av valgt dyr (fra manuell liste eller API)
 */
export function useAnimalImage(animal) {
  const [imageUrl, setImageUrl] = useState(null); // Bildets URL som skal vises

  // 🔄 Henter et nytt bilde basert på dyrets konfigurasjon
  const fetchImage = async () => {
    const config = animalConfig[animal]; // Henter config for valgt dyr

    if (!config) {
      setImageUrl(null); // Ugyldig dyr – nullstill bilde
      return;
    }

    // ✅ 1. Bruk manuelt definerte bilder (f.eks. fox, panda, duck)
    if (Array.isArray(config.images)) {
      const random = config.images[Math.floor(Math.random() * config.images.length)]; // Velg tilfeldig bilde fra lista
      setImageUrl(random);
      return;
    }

    // 🌐 2. Hvis ingen manuelle bilder – bruk API (kun cat og dog i dette prosjektet)
    if (config.imageApi) {
      try {
        const res = await fetch(config.imageApi); // Hent bilde fra API
        const data = await res.json();            // Parse JSON

        // 🧠 Forsøk å finne riktig URL-felt i responsen (ettersom API-er varierer)
        const url =
          (Array.isArray(data) && data[0]?.url) || // For API-er som returnerer array (cat)
          data.url ||                              // Enkel response med `url`
          data.message ||                          // Brukt av dog.ceo API
          data.image ||                            // Brukt av randomfox
          data.link ||                             // Alternative felt
          null;

        setImageUrl(url || null); // Oppdater bilde eller sett null hvis ikke funnet
      } catch (error) {
        console.error('Feil ved henting av bilde:', error); // Logger feilmelding i devtools
        setImageUrl(null); // Nullstill hvis feil
      }
    } else {
      setImageUrl(null); // Hvis ingen bildeconfig finnes, nullstill
    }
  };

  // 🔁 Hent nytt bilde hver gang valgt dyr endres
  useEffect(() => {
    fetchImage();
  }, [animal]); // Avhenger av animal-prop

  // Returnerer bilde-URL + funksjon for å hente nytt bilde manuelt
  return { imageUrl, refreshImage: fetchImage };
}
