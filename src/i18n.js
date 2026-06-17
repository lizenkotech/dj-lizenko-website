import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  nl: {
    translation: {
      // Navigation
      home: "Home",
      chat: "Live Chat",
      requests: "Song Requests",
      admin: "Admin Panel",
      
      // Hero Section
      heroTitle: "DJ Lizenko",
      heroSubtitle: "Professional DJ & Producer",
      heroDescription: "Ervaar de beste muziek en energie op elk evenement. Van clubs tot festivals, ik breng de beat die je nodig hebt.",
      ctaBook: "Boek Nu",
      ctaListen: "Luister Nu",
      
      // Features
      liveChatTitle: "Live Chat",
      liveChatDesc: "Chat direct met DJ Lizenko tijdens het evenement.",
      songRequestsTitle: "Song Requests",
      songRequestsDesc: "Stuur je favoriete nummers in en hoor ze live!",
      
      // Chat
      sendMessage: "Stuur bericht...",
      online: "Online",
      offline: "Offline",
      
      // Song Requests
      requestSong: "Nummer Aanvragen",
      songName: "Nummer Naam",
      artistName: "Artiest",
      submitRequest: "Verstuur Aanvraag",
      yourRequests: "Jouw Aanvragen",
      requestStatus: {
        pending: "In afwachting",
        accepted: "Geaccepteerd",
        played: "Afgespeeld",
        rejected: "Geweigerd"
      },
      
      // Admin
      adminTitle: "Admin Panel",
      manageChat: "Beheer Chat",
      manageRequests: "Beheer Aanvragen",
      accept: "Accepteer",
      reject: "Weiger",
      play: "Speel Af",
      delete: "Verwijder",
      
      // Footer
      contact: "Contact",
      socialMedia: "Social Media",
      copyright: "© 2024 DJ Lizenko. Alle rechten voorbehouden.",
      
      // Language
      language: "Taal"
    }
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      chat: "Live Chat",
      requests: "Song Requests",
      admin: "Admin Panel",
      
      // Hero Section
      heroTitle: "DJ Lizenko",
      heroSubtitle: "Professional DJ & Producer",
      heroDescription: "Experience the best music and energy at any event. From clubs to festivals, I bring the beat you need.",
      ctaBook: "Book Now",
      ctaListen: "Listen Now",
      
      // Features
      liveChatTitle: "Live Chat",
      liveChatDesc: "Chat directly with DJ Lizenko during the event.",
      songRequestsTitle: "Song Requests",
      songRequestsDesc: "Submit your favorite songs and hear them live!",
      
      // Chat
      sendMessage: "Send message...",
      online: "Online",
      offline: "Offline",
      
      // Song Requests
      requestSong: "Request Song",
      songName: "Song Name",
      artistName: "Artist",
      submitRequest: "Submit Request",
      yourRequests: "Your Requests",
      requestStatus: {
        pending: "Pending",
        accepted: "Accepted",
        played: "Played",
        rejected: "Rejected"
      },
      
      // Admin
      adminTitle: "Admin Panel",
      manageChat: "Manage Chat",
      manageRequests: "Manage Requests",
      accept: "Accept",
      reject: "Reject",
      play: "Play",
      delete: "Delete",
      
      // Footer
      contact: "Contact",
      socialMedia: "Social Media",
      copyright: "© 2024 DJ Lizenko. All rights reserved.",
      
      // Language
      language: "Language"
    }
  },
  fr: {
    translation: {
      // Navigation
      home: "Accueil",
      chat: "Chat en Direct",
      requests: "Demandes de Chansons",
      admin: "Panneau Admin",
      
      // Hero Section
      heroTitle: "DJ Lizenko",
      heroSubtitle: "DJ & Producteur Professionnel",
      heroDescription: "Découvrez la meilleure musique et l'énergie à chaque événement. Des clubs aux festivals, j'apporte le rythme dont vous avez besoin.",
      ctaBook: "Réserver",
      ctaListen: "Écouter",
      
      // Features
      liveChatTitle: "Chat en Direct",
      liveChatDesc: "Discutez directement avec DJ Lizenko pendant l'événement.",
      songRequestsTitle: "Demandes de Chansons",
      songRequestsDesc: "Soumettez vos chansons préférées et écoutez-les en direct!",
      
      // Chat
      sendMessage: "Envoyer un message...",
      online: "En ligne",
      offline: "Hors ligne",
      
      // Song Requests
      requestSong: "Demander une Chanson",
      songName: "Nom de la Chanson",
      artistName: "Artiste",
      submitRequest: "Soumettre la Demande",
      yourRequests: "Vos Demandes",
      requestStatus: {
        pending: "En attente",
        accepted: "Acceptée",
        played: "Jouée",
        rejected: "Rejetée"
      },
      
      // Admin
      adminTitle: "Panneau Admin",
      manageChat: "Gérer le Chat",
      manageRequests: "Gérer les Demandes",
      accept: "Accepter",
      reject: "Rejeter",
      play: "Jouer",
      delete: "Supprimer",
      
      // Footer
      contact: "Contact",
      socialMedia: "Réseaux Sociaux",
      copyright: "© 2024 DJ Lizenko. Tous droits réservés.",
      
      // Language
      language: "Langue"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
