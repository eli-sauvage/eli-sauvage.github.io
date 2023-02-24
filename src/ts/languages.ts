export type langName = 'fr' | 'en'
type field = { fr: string, en: string }
type elem = { [id: string]: field }
//TODO: rename
export let dict:
    {
        sideMenu: elem,
        welcomePage: elem,
        projects: {
            perso: elem, ecole: elem, divers: elem
        }
    } = {
    welcomePage: {
        sujet:{
            fr:"Portfolio - Programmation Web",
            en:"Portfolio - Web Programming"
        },
        ecole:{
            fr:"UTT (Université de Technologie de Troyes) - Branche : Réseaux et Télécommunications",
            en:"UTT (Université de Technologie de Troyes) - Branch : Netwoks and Telecommunications"
        },
        projets:{
            fr:"Mes Projets",
            en:"My Projects"
        }
    },
    sideMenu: {
        perso: {
            fr: "Projets personnels",
            en: "Personnal projects"
        },
        ecole: {
            fr: "Projets scolaires",
            en: "School projets"
        },
        divers: {
            fr: "Projets divers",
            en: "Miscellianous projects"
        },
    },
    projects: {
        perso: {
            helibot: {
                fr: "<p>Mon premier projet personnel (commencé au lycée). C'est un robot discord permettant de compter le temps que passent les différents joueurs en appel vocal sur le serveur : 1mn passée sur le serveur équivaut à 1 point, le robot assigne ensuite des roles en fonction du nombre de points.<br>Actuellement hébergé sur une instance compute engine de Google Cloud</p>",
                en: "<p>My first personal project (in developement since highscool). This is a discord bot that couts points based on the time spent in vocal channels by the users : 1mn equals 1 point. Based on this score, the bot assigns a role to the user.<br>This project is currently hosted on a compute engine instance at Google Cloud </p>"
            },
            dawnLauncher: {
                fr: "<p>Ce project codé en C# est une petite application windows permettant de lancer, télécharger et mettre à jour un jeu vidéo. L'application détecte lorsque le jeu n'est plus à jour.<br>L'application gère également un système de compte utilisateur</p>",
                en: "<p>This prject is a small game launcher programmed in C#. It allows the user to launch, download and update the game when needed.<br>This app also supports a user accounts system.</p>"
            },
            portfolio: {
                fr: "<p>Le portfolio sur lequel vous êtes actuellement a été codé avec Vue.js et hébergé sur github pages. J'ai utilisé WebPack et vite afin de l'exporter en version statique. Les icônes 3D on été faits grâce à Blender</p>",
                en: "<p>This portfolio has been programmed with Vue.js, it is hosted thanks to Github pages. I used webpack and vite for the exportation into a static site. The 3D icons have been created thanks to Blender</p>"
            },
        },
        ecole: {
            lo02: {
                fr: "lo02 fr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                en: "lo02 en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, nf05: {
                fr: "nf05 fr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                en: "nf05 en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, lo14: {
                fr: "lo14 fr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                en: "lo14 en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        },
        divers: {
            blender: {
                fr: "blender fr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                en: "blender en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, unrealEngine: {
                fr: "unrealEngine fr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                en: "unrealEngine en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        }
    }
}
