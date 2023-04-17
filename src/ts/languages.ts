export type langName = 'fr' | 'en'
type field = { fr: string, en: string }
type elem = { [id: string]: field }
type projects = { [id: string]: { description: field, link: string } }
//TODO: rename
export let dict:
    {
        sideMenu: elem,
        welcomePage: elem,
        projects: {
            perso: projects, ecole: projects, divers: projects
        }
    } = {
    welcomePage: {
        sujet: {
            fr: "Portfolio - Programmation Web",
            en: "Portfolio - Web Programming"
        },
        ecole: {
            fr: "UTT (Université de Technologie de Troyes) - Branche : Réseaux et Télécommunications",
            en: "UTT (Université de Technologie de Troyes) - Branch : Netwoks and Telecommunications"
        },
        projets: {
            fr: "Mes Projets",
            en: "My Projects"
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
            portfolio: {
                description: {
                    fr: "<p>Le portfolio sur lequel vous êtes actuellement a été codé avec <span class=\"important\">Vue.js</span> et hébergé sur github pages. J'ai utilisé <span class=\"important\">WebPack et Vite</span> afin de l'exporter en version statique. Les icônes 3D on été faits grâce à Blender.</p>",
                    en: "<p>This portfolio has been programmed with <span class=\"important\">Vue.js</span>, it is hosted thanks to Github pages. I used <span class=\"important\">Webpack and Vite</span> for the exportation into a static site. The 3D icons have been created thanks to Blender.</p>"
                },
                link: "https://github.com/eli-sauvage/eli-sauvage.github.io"
            },
            socialMedia: {
                description: {
                    fr: "<p>Pour l'association \"Junior Conseil UTT\" dans laquelle je suis depuis 2021, j'ai développé une application web en <span class=\"important\">Typescript (architecture MVC)</span> permettant d'analyser les différentes statistiques des réseaux sociaux de l'asso. L'application utlise les <span class=\"important\">APIs</span> de Facebook, Instagram, Twitter et LinkedIn.<br>Actuellement hébergé sur un <span class=\"important\">Cluster Kubernetees</span>.</p>",
                    en: "<p>For the association \"Junior Conseil UTT\" of which I am a member since 2021, I developped a web app in <span class=\"important\">Typescript (MVC architecture)</span> that analyses every metrics of the club's social networks. The app uses the <span class=\"important\">APIs</span> of Facebook, Instagram, Twitter and LinkedIn.<br>Currently hosted on a <span class=\"important\">Kubernetees Cluster</span>.</p>"
                },
                link: "https://github.com/eli-sauvage/social-media"
            },
            helibot: {
                description: {
                    fr: "<p>Mon premier projet personnel (commencé au lycée). C'est un robot discord permettant de compter le temps que passent les différents joueurs en appel vocal sur le serveur : 1mn passée sur le serveur équivaut à 1 point, le robot assigne ensuite des rôles en fonction du nombre de points.<br>Actuellement hébergé sur une instance Compute Engine de <span class=\"important\">Google Cloud</span>.</p>",
                    en: "<p>My first personal project (started in highscool). This is a discord bot that counts points based on the time spent in vocal channels by the users : 1mn equals 1 point. Based on this score, the bot assigns a role to the user.<br>This project is currently hosted on a Compute Engine instance of <span class=\"important\">Google Cloud</span></p>"
                },
                link: "https://github.com/eli-sauvage/helibot"
            },
            dawnLauncher: {
                description: {
                    fr: "<p>Ce project codé en <span class=\"important\">C#</span> est une petite application windows permettant de lancer, télécharger et mettre à jour un jeu vidéo. L'application détecte lorsque le jeu n'est plus à jour.<br>L'application gère également un système de compte utilisateur</p>",
                    en: "<p>This project is a small game launcher programmed in <span class=\"important\">C#</span>. It allows the user to launch, download and update the game when needed.<br>This app also supports a user accounts system.</p>"
                },
                link: "https://github.com/eli-sauvage/DawnLauncher"
            }
        },
        ecole: {
            lo14: {
                description: {
                    fr: "<p>Pour la matière \"Administration des systèmes : Bash et Docker\"(automne 2021), j'ai du créer un projet entièrement écrit en <span class=\"important\">Bash</span>, reproduisant un système d'archivage de fichiers : l'application devait être capable de stocker une arborescence de fichiers ainsi que leur contenu dans un seul fichier archive, tout en permettant l'envoi d'archives via le réseau</p>",
                    en: "<p>In the class \"Administration of systems : Bash and Docker\"(autumn 2021), I had to create a project entirely in <span class=\"important\">Bash</span>, that reproduced a file archive system : the app had to be capable of recursively stocking a file system as well as their content in a single archive file. It is also possible to send an archive on the network</p>"
                },
                link: "https://github.com/eli-sauvage/lo14-projet"
            },
            lo02: {
                description: {
                    fr: "<p>Ce projet en <span class=\"important\">Java</span> est un jeu vidéo basique, qui suit l'architecture <span class=\"important\">Model View Controller</span>. C'est un jeu de stratégie sur lequel on peut paramétrer notre armée puis la déployer contre celle de l'adversaire dans différentes zones de batailles. Il utilise par exemple <span class=\"important\">Java Swing ainsi que les Threads</span>.<br>Ce projet a été réalisé dans le cadre de la matière \"Principe et pratique de la programmation orientée objets\" en automne 2022</p>",
                    en: "<p>This <span class=\"important\">java</span> project is a simple video game, built with the <span class=\"important\">Model View Controller</span> architecture. Is it a strategy game on which we create an army and deploy it against our opponent's in differents battle zones. The project uses <span class=\"important\">Java Swing, and Threads</span>.<br>It has been developped in the context of the class \"Principle and application of object oriented programming\", in autumn of 2022</p>"
                },
                link: "https://github.com/eli-sauvage/projet-lo02"
            }, nf05: {
                description: {
                    fr: "<p>Dans la matière \"Introduction aux langages C et Python\" (suivie au printemps 2021), j'ai pu créer une <span class=\"important\">application console en C</span> représentant une simulation d'un gestionnaire de parking, ainsi qu'une application en <span class=\"important\">Python</span> simulant un réseau social. Cette application python est un serveur web, avec une base de données et un frontend Bootstrap.</p>",
                    en: "<p>In the class \"Introduction to C and Python programming languages\"(in spring 2021), I created a <span class=\"important\">console app in C</span> representing a simulation of a car park manager, as well as a <span class=\"important\">Python</span> app simulating a social network. This python app is a web server with a database, and a frontend made with Bootstrap.</p>"
                },
                link: "https://github.com/eli-sauvage/nf05A-python-project"
            }
        },
        divers: {
            blender: {
                description: {
                    fr: "<p>Dans mon temps libre et lorsque je ne programme pas, j'aime faire du design 3D sur Blender, un logiciel puissant et open-source.<br><span class=\"important\">Toutes les icones en 3D sur ce site ont été faites à la main sur Blender !</span></p>",
                    en: "<p>During my spare time and when I'm not programming, I like to practise 3D modeling on Blender, a powerful and open-source software.<br><span class=\"important\">All of the 3D icons on this website have been handmade with Blender!</span></p>"
                },
                link: ""
            }, unrealEngine: {
                description: {
                    fr: "<p>Au lycée, j'ai eu l'occasion d'apprendre à utiliser le logiciel de création de jeux vidéos en 3D <span class=\"important\">\"Unreal Engine\"</span> avec des amis. Grâce à cette expérience, j'ai pu animer un atelier de création de jeux vidéos pour l'association familiale de l'<span class=\"important\">UDAF Aube</span> durant plusieurs mois.</p>",
                    en: "<p>In highschool, I learned to use the 3D video game creation software <span class=\"important\">\"Unreal Engine\"</span>. Thanks to this experience, I was able to animate a video game creation workshop in the family association \"<span class=\"important\">UDAF Aube</span>\" for several months\""
                },
                link: ""
            },
        }
    }
}
