

import { Project, SocialLink, Bio, Presentation, WorkExperience } from '../../../domain/portfolio.types';


export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    period: '2023 - Presente',
    title: 'Mercadito Ecommerce',
    description: 'Una plataforma web completa para la gestión de productos y pedidos, construida con Clean Architecture y Next.js.',
    imageUrl: '/images/mercadito.png',
    projectUrl: 'https://ecommercewithreact-a20oe9y99-dloyo04s-projects.vercel.app/',
    tags: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Chakra UI' },
    ],
  },
  {
    id: 'proj-2',
    period: '2020 - 2022',
    title: 'Avoshop Ecommerce',
    description: 'El mismo sitio que estás viendo ahora, enfocado en animaciones y una experiencia de usuario fluida.',
    imageUrl: '/images/avoShop.png',
    projectUrl: 'https://avocado-shop-b6mouuox0-dloyo04s-projects.vercel.app/',
    tags: [
      { name: 'Next.js', },
      { name: 'Framer Motion', },
    ],
  },
];

export const mockWorkExperience: WorkExperience[] = [
  {
    id: 'work-1',
    period: 'Octubre 2024 - Actualidad',
    title: 'Desarrollador Full Stack',
    company: 'Tiendas Daka',
    description: 'Desarrollador Full Stack responsable y encargado del proyecto de gestión y automatización de gastos e importación de mercancías marítimas internacionales. Responsable de la arquitectura y desarrollo integral (end-to-end) de una aplicación para la gestión de gastos nacionales y logística de importaciones. Desarrollo completo del Backend con NestJS incluyendo API REST, lógica de negocio, modelado de base de datos relacional con TypeORM, gestión de datos maestros y sistema de trazabilidad y auditoría de punta a punta. Construcción y mantenimiento de la interfaz de usuario (UI/UX) con Vue.js para la administración en una interfaz de dashboard. Integración con SAP para sincronización de facturas de anticipos y pagos, automatizando procesos internos y mejorando el control de la gestión naviera.',
    imageUrl: '/images/tiendas-daka.png',
    tags: [
      { name: 'NestJS' },
      { name: 'Vue.js' },
      { name: 'TypeORM' },
      { name: 'PostgreSQL' },
      { name: 'SAP Integration' },
      { name: 'TypeScript' },
    ],
  },
];

export const mockBio: Bio = {
  heading: "Un poco sobre mí",
  paragraphs: [
    "Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y performantes.",
    "Con experiencia en el ecosistema de React y un fuerte enfoque en la arquitectura de software, busco transformar ideas complejas en productos digitales elegantes y funcionales."
  ]
};

export const mockSocialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/dloyo04', handle: '@dloyo04' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/daniel-loyo-dev', handle: 'Daniel Loyo' },
  { platform: 'Email', url: 'mailto:dloyo04@gmail.com', handle: 'dloyo04@gmail.com' },
  { platform: 'Curriculum', url: '#', handle: 'Mi CV' },
];

export const mockPresentation: Presentation = {
  imageUrl: "/images/portrait.png",
  title: "Daniel Loyo",
  subtitle: "Software Developer - Focused in Frontend",



}