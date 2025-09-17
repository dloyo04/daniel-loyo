import { Project, SocialLink, Bio } from '../domain/portfolio.types';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Proyecto "Comestero Argentina"',
    description: 'Una plataforma web completa para la gestión de productos y pedidos, construida con Clean Architecture y Next.js.',
    imageUrl: '/images/placeholder-project-1.png', // Usaremos placeholders por ahora
    repositoryUrl: 'https://github.com/tu-usuario/comestero',
    tags: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Chakra UI' },
    ],
  },
  {
    id: 'proj-2',
    title: 'Mi Portafolio Personal',
    description: 'El mismo sitio que estás viendo ahora, enfocado en animaciones y una experiencia de usuario fluida.',
    imageUrl: '/images/placeholder-project-2.png',
    repositoryUrl: 'https://github.com/tu-usuario/portfolio',
    tags: [
      { name: 'Next.js',  },
      { name: 'Framer Motion', },
    ],
  },
];

// Datos de ejemplo para la biografía y redes
export const mockBio: Bio = {
  heading: "Un poco sobre mí",
  paragraphs: [
    "Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y performantes.",
    "Con experiencia en el ecosistema de React y un fuerte enfoque en la arquitectura de software, busco transformar ideas complejas en productos digitales elegantes y funcionales."
  ]
};

export const mockSocialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/tu-usuario' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario' },
  { platform: 'Email', url: 'mailto:tu-email@example.com' },
];