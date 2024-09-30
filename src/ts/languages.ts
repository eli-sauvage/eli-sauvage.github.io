export type langName = "fr" | "en";
type field = { fr: string; en: string };
type elem = { [id: string]: field };
type project = { title: field; description: field; link?: string };
type projects = {
    perso: { [id: string]: project };
    ecole: { [id: string]: project };
    divers: { [id: string]: project };
};
//TODO: rename
export let dict: {
    general: elem;
    sideMenu: elem;
    welcomePage: elem;
    projects: projects;
} = {
    general: {
        seeCode: {
            fr: "Voir le code",
            en: "Go to code",
        },
    },
    welcomePage: {
        sujet: {
            fr: "Portfolio - Projets de Programmation",
            en: "Portfolio - Programing projects",
        },
        ecole: {
            fr: "UTT (Université de Technologie de Troyes) - Branche : Réseaux et Télécommunications",
            en: "UTT (Université de Technologie de Troyes) - Branch : Netwoks and Telecommunications",
        },
        projets: {
            fr: "Mes Projets",
            en: "My Projects",
        },
    },
    sideMenu: {
        perso: {
            fr: "Projets personnels",
            en: "Personnal projects",
        },
        ecole: {
            fr: "Projets scolaires",
            en: "School projets",
        },
        divers: {
            fr: "Projets divers",
            en: "Miscellianous projects",
        },
    },
    projects: {
        perso: {
            biere_n_collect: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: "<p>Pour un bar de ma ville natale dont les paiements au comptoir prennent trop de temps et créent de l'attente, je suis actuellement en train de créer un site web permettant de commander puis payer en ligne ses bières. Ce service utilise l'API de Stripe pour la gestion des paiements.<br>J'ai codé le front-end avec Vue.js et le backend avec Rust, un language de bas niveau à haute performances, et qui permet entre autres une garantie de la sécurité mémoire.</p>",
                    en: "<p>For a bar situated un my home town, for which the payments were taking too long and creating delays, I am currently developping a website allowing customers to order and pay their beer online. This app uses the Stripe API for managing secure payments.<br>I programmed the frontend with Vue.js and the backend with Rust, a low-leved, high performance and memory safe language.</p>",
                },
                link: "https://github.com/eli-sauvage/biere-n-collect",
            },
            portfolio: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Ce portfolio a été créé grâce au framework <span class="important">Vue.js</span>. Il est actuellement hébergé sur Github pages et déployé automatiquement avec Github Actions. Le moteur <span class="important">Vite</span> a été utilisé afin de l\'exporter en version statique. Les icônes 3D on été créés avec Blender.</p>',
                    en: '<p>This portfolio has been created thanks to the <span class="important">Vue.js</span> framework. It is currently hosted on Github pages and deployed automatically with Github Actions. The build tool <span class="important">Vite</span> has been used for the exportation into a static site. The 3D icons have been created with to Blender.</p>',
                },
                link: "https://github.com/eli-sauvage/eli-sauvage.github.io",
            },
            socialMedia: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Pour l\'association "Junior Conseil UTT" dont je faisais partie de 2021 à 2023, j\'ai développé une application web en <span class="important">Typescript (architecture MVC)</span> permettant d\'analyser les différentes statistiques des réseaux sociaux de l\'asso. L\'application utlise les <span class="important">APIs</span> de Facebook, Instagram, Twitter et LinkedIn.<br>Actuellement hébergé sur un <span class="important">Cluster Kubernetees</span>.</p>',
                    en: '<p>For the association "Junior Conseil UTT" of which I was a member from 2021 to 2023, I developped a web app in <span class="important">Typescript (MVC architecture)</span> that analyses every metrics of the club\'s social networks. The app uses the <span class="important">APIs</span> of Facebook, Instagram, Twitter and LinkedIn.<br>Currently hosted on a <span class="important">Kubernetees Cluster</span>.</p>',
                },
                link: "https://github.com/eli-sauvage/social-media",
            },
            helibot: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Mon premier projet personnel (commencé au lycée). C\'est un robot discord permettant de compter le temps que passent les différents utilisateur en appel vocal sur le serveur : 1 minute passée sur le serveur équivaut à 1 point, le robot assigne ensuite des rôles en fonction du nombre de points.<br>Actuellement hébergé sur une instance Compute Engine de <span class="important">Google Cloud</span>.</p>',
                    en: '<p>My first personal project (started in highscool). This is a discord bot that counts points based on the time spent in vocal channels by the users : 1 minutes equals 1 point. Based on this score, the bot assigns a role to each user.<br>This project is currently hosted on a Compute Engine instance of <span class="important">Google Cloud</span></p>',
                },
                link: "https://github.com/eli-sauvage/helibot",
            },
            dawnLauncher: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: "<p>Ce project codé en <span class=\"important\">C#</span> est une petite application graphique pour Windows permettant de lancer, télécharger et mettre à jour un jeu vidéo. L'application détecte lorsque le jeu n'est plus à jour.<br>Cette dernière gère également un système de compte utilisateur</p>",
                    en: '<p>This project is a small game launcher programmed in <span class="important">C#</span>. It allows the user to launch, download and update the game when needed.<br>This app also features a user account system.</p>',
                },
                link: "https://github.com/eli-sauvage/DawnLauncher",
            },
        },
        ecole: {
            lo14: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: "<p>Pour la matière \"Administration des systèmes : Bash et Docker\"(automne 2021), j'ai dû créer un projet entièrement écrit en <span class=\"important\">Bash</span>, reproduisant un système d'archivage de fichiers : l'application devait être capable de stocker une arborescence de fichiers ainsi que leur contenu dans un seul fichier archive, tout en permettant l'envoi d'archives via le réseau</p>",
                    en: '<p>In the class "Administration of systems : Bash and Docker"(autumn 2021), I had to create a project entirely in <span class="important">Bash</span>, that reproduced a file archive system : the app had to be capable of recursively stocking a file system as well as their content in a single archive file. It is also possible to send an archive on the network</p>',
                },
                link: "https://github.com/eli-sauvage/lo14-projet",
            },
            lo02: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Ce projet en <span class="important">Java</span> est un jeu vidéo basique doté d\'une interface graphique, qui suit l\'architecture <span class="important">Model View Controller</span>. C\'est un jeu de stratégie dans lequel on peut paramétrer notre armée puis la déployer contre celle de l\'adversaire dans différentes zones de batailles. Il utilise Java Swing pour la création du GUI et du multi-threading pour la simulation de comabats.<br>Ce projet a été réalisé dans le cadre de la matière "Principe et pratique de la programmation orientée objets" en automne 2022</p>',
                    en: '<p>This <span class="important">java</span> project is a simple video game with a GUI, built with the <span class="important">Model View Controller</span> architecture. Is it a strategy game where the player creates an army and deploys it against their opponent\'s in differents battle zones. The project uses Java Swing for the creation of the GUI as well as multi-threading for the battle simulations.<br>It has been developped in the context of the class "Principle and application of object oriented programming", in autumn of 2022</p>',
                },
                link: "https://github.com/eli-sauvage/projet-lo02",
            },
            nf05: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Dans la matière "Introduction aux langages C et Python" (suivie au printemps 2021), j\'ai pu créer une <span class="important">application console en C</span> représentant une simulation d\'un gestionnaire de parking, ainsi qu\'une application en <span class="important">Python</span> simulant un réseau social. Cette application python est un serveur web, avec une base de données et un frontend Bootstrap.</p>',
                    en: '<p>In the class "Introduction to C and Python programming languages"(in spring 2021), I created a <span class="important">console app in C</span> representing a simulation of a car park manager, as well as a <span class="important">Python</span> app simulating a social network. This python app is a web server with a database, and a frontend made with Bootstrap.</p>',
                },
                link: "https://github.com/eli-sauvage/nf05A-python-project",
            },
        },
        divers: {
            unrealEngine: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: "<p>Au lycée, j'ai eu l'occasion d'apprendre à utiliser le logiciel de création de jeux vidéos en 3D <span class=\"important\">\"Unreal Engine\"</span> avec des amis. Grâce à cette expérience, j'ai pu animer un atelier de création de jeux vidéos pour l'association familiale de l'<span class=\"important\">UDAF Aube</span> durant plusieurs mois.</p>",
                    en: '<p>In highschool, I learned to use the 3D video game creation software <span class="important">"Unreal Engine"</span>. Thanks to this experience, I was able to animate a video game creation workshop in the family association "<span class="important">UDAF Aube</span>" for several months"',
                },
                link: "",
            },
            blender: {
                title: {
                    fr: "Application de paiement pour un bar",
                    en: "Payment app for a bar",
                },
                description: {
                    fr: '<p>Dans mon temps libre et lorsque je ne programme pas, j\'aime faire du design 3D sur Blender, un logiciel puissant et open-source.<br><span class="important">Toutes les icones en 3D sur ce site ont été faites à la main sur Blender !</span></p>',
                    en: '<p>During my spare time and when I\'m not programming, I like to practise 3D modeling on Blender, a powerful and open-source software.<br><span class="important">All of the 3D icons on this website have been handmade with Blender!</span></p>',
                },
                link: "",
            },
        },
    },
};
