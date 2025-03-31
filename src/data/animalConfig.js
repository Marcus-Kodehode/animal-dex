// src/data/animalConfig.js

// Konfigurasjonsobjekt for alle dyr i applikasjonen
// Inneholder label (emoji + navn), fakta (API eller manuelt), og bilder (API eller manuelt)

export const animalConfig = {
    // 🐱 Katt – eneste dyr med både fakta og bilde fra API
    cat: {
      label: '🐱 Katt', // Vises i dropdown
      factsApi: 'https://catfact.ninja/facts?limit=5', // Fakta hentes via API
      imageApi: 'https://api.thecatapi.com/v1/images/search' // Bilder hentes via API (array med .url)
    },
  
    // 🐶 Hund – har manuelle fakta, men henter bilder fra API
    dog: {
      label: '🐶 Hund',
      facts: [
        'Dogs have been human companions for over 15,000 years.',
        'Dogs can smell up to 100,000 times better than humans.',
        'The Basenji dog is known as the "barkless dog".',
        'Dalmatian puppies are born completely white.',
        'A Greyhound can beat a Cheetah in a long-distance race.'
      ],
      imageApi: 'https://dog.ceo/api/breeds/image/random' // Enkel API, returnerer { message: "url" }
    },
  
    // 🦊 Rev – har manuelle fakta og manuelle bilder
    fox: {
      label: '🦊 Rev',
      facts: [
        'Foxes belong to the Canidae family, which includes dogs and wolves.',
        'A group of foxes is called a skulk.',
        'Foxes can hear rodents digging underground.',
        'They use over 28 types of vocalizations.',
        'Some foxes can climb trees like cats.'
      ],
      images: [
        '/images/fox1.jpg',
        '/images/fox2.jpg',
        '/images/fox3.jpg'
      ]
    },
  
    // 🐼 Panda – manuelle fakta og manuelle bilder
    panda: {
      label: '🐼 Panda',
      facts: [
        'Pandas eat for about 12 hours a day.',
        'A panda’s diet consists almost entirely of bamboo.',
        'Pandas have a "pseudo thumb" used for holding bamboo.',
        'Pandas can weigh up to 150kg (330 lbs).',
        'Baby pandas are born pink and blind.'
      ],
      images: [
        '/images/panda1.jpg',
        '/images/panda2.jpg',
        '/images/panda3.jpg'
      ]
    },
  
    // 🦆 And – manuelle fakta og manuelle bilder
    duck: {
      label: '🦆 Duck',
      facts: [
        'Ducks have waterproof feathers.',
        'A group of ducks is called a “raft”, “team”, or “paddling”.',
        'Ducklings can swim immediately after birth.',
        'Ducks sleep with one eye open.',
        'Male ducks are called drakes.'
      ],
      images: [
        '/images/duck1.jpg',
        '/images/duck2.jpg',
        '/images/duck3.jpg'
      ]
    },
    joakim: {
        label: '🦖 Joakim',
        facts: [
          'Joakim is a mythical creature of immense coding power.',
          'He once fixed a bug before it even existed.',
          'Joakim doesn’t write code – he whispers it into existence.',
          'He debugs JavaScript with his bare hands.',
          'His favorite snack is... CSS variables.'
        ],
        images: [
          '/images/joakim1.jpg',
          '/images/joakim2.jpg',
          '/images/joakim3.jpg'
        ]
      }
      
  };
  