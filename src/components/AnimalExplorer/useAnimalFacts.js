import { useEffect, useState } from 'react'; // Importerer hooks fra React
import { animalConfig } from '../../data/animalConfig'; // Henter dyrekonfigurasjon (fakta/API-info)

/**
 * Custom hook: useAnimalFacts
 * Henter fakta basert på valgt dyr (fra config eller API)
 */
export function useAnimalFacts(animal) {
  const [facts, setFacts] = useState([]);          // Fakta som vises
  const [loading, setLoading] = useState(false);   // Laster-data indikator
  const [error, setError] = useState(null);        // Feilmelding om noe går galt

  useEffect(() => {
    if (!animal) return; // Avslutt om ingen dyr er valgt

    const config = animalConfig[animal]; // Henter config for valgt dyr
    if (!config) {
      setError('Ugyldig dyr valgt.'); // Hvis dyret ikke finnes i config
      return;
    }

    // Async-funksjon for å hente eller sette fakta
    const fetchFacts = async () => {
      setLoading(true);   // Starter lasting
      setError(null);     // Nullstiller tidligere feil

      try {
        if (config.facts) {
          setFacts(config.facts); // Bruker manuelle fakta hvis tilgjengelig
        } else if (config.factsApi && animal === 'cat') {
          // Kun katten henter fra API i dette prosjektet
          const res = await fetch(config.factsApi); // Henter data
          const data = await res.json(); // Parser JSON-respons

          setFacts(data.data.map(f => f.fact)); // Mapper ut bare tekst-delen
        } else {
          setFacts(['No facts available']); // Fallback-tekst hvis ingen fakta finnes
        }
      } catch (err) {
        setError('Feil ved henting av fakta.'); // Viser feilmelding ved feil
      } finally {
        setLoading(false); // Ferdig med lasting uansett
      }
    };

    fetchFacts(); // Kaller fetch-funksjonen når dyret endres
  }, [animal]); // Avhenger av valgt dyr

  // Returnerer fakta + status til komponent som bruker hooken
  return { facts, loading, error };
}

