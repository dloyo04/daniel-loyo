# Daniel Loyo - Portfolio

Mi portfolio personal. Un sitio web donde muestro mis proyectos, experiencia laboral y formas de contacto.

**Deploy**: [daniel-loyo.vercel.app](https://daniel-loyo.vercel.app)

## Tech Stack

| Tecnologia | Version | Uso |
|-----------|---------|-----|
| Next.js | 15.5 | Framework (App Router, Turbopack) |
| TypeScript | 5 | Tipado estatico |
| Chakra UI | v3 | Componentes UI |
| Panda CSS | 1.3 | CSS-in-JS (atomico) |
| Tailwind CSS | v4 | Utilidades CSS |
| Framer Motion | 12 | Animaciones |
| Sanity | next-sanity 11 | Headless CMS |
| Resend | 6 | Envio de correos |
| React Email | 1.2 | Templates de email |
| Zod | 4 | Validacion de datos |

## Arquitectura

Sigue Clean Architecture + Feature Sliced Design. Cada feature es un slice vertical con sus propias capas.

```
domain/          Tipos y entidades del negocio
application/     Casos de uso, loaders y server actions
infrastructure   Repositorios, singletons, templates de email
UIComponents/    Presentacion por feature
```

### Patron Repository

La infraestructura usa el patron Repository. El frontend consulta datos via `PortfolioRepositorySanity`, que ejecuta GROQ contra Sanity Cloud y mapea resultados a tipos del dominio.

### Server Actions + Validacion

Los formularios usan Server Actions con validacion Zod. Ver `sendContactEMail.action.ts` para el ejemplo principal.

### ISR bajo demanda

La pagina no usa revalidacion automatica. El contenido se actualiza via webhook de Sanity a `/api/revalidate` con un token secreto.

## Getting Started

### Requisitos

- Node.js 18+
- Cuenta en Sanity (project ID: `1q7c8x46`)
- API key de Resend

### Instalacion

```bash
cd daniel-loyo
npm install
```

### Variables de entorno

Crear `.env.local` en la raiz de `daniel-loyo/`:

| Variable | Descripcion | Requerida |
|----------|------------|-----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID del proyecto Sanity | Si |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset de Sanity (`production`) | Si |
| `RESEND_API_KEY` | API key de Resend para envio de correos | Si |
| `CONTACT_EMAIL_TO` | Email destino para formularios de contacto | Si |
| `REVALIDATE_SECRET` | Token secreto para webhook de revalidacion | Si |

### Ejecutar

```bash
npm run dev      # Desarrollo (Turbopack)
npm run build    # Build de produccion
npm start        # Servidor de produccion
npm run lint     # Linting
npm run analyze  # Analisis de bundle
```

## Estructura del proyecto

```
daniel-loyo/
  app/
    layout.tsx              Layout raiz (Provider, tema, fuentes)
    page.tsx                Pagina principal
    loading.tsx             Skeleton de carga
    api/revalidate/         Webhook para revalidacion bajo demanda
  features/
    portfolio/
      domain/               Tipos del dominio
      application/
        usecases/           Casos de uso
        loaders/            Carga de datos por pagina
        action/             Server actions (contacto con Zod)
      infrastructure/
        repository/
          sanity/           GROQ queries + mappers
          resend/           Envio de correos
        singleton/          Inyeccion de dependencias
        template/           Templates de React Email
  UIComponents/             Capa de presentacion
    heroSection/            Seccion hero
    aboutSection/           Sobre mi
    work/                   Experiencia laboral
    projects/               Proyectos
    contactSection/         Formulario de contacto
    siteFooter/             Footer con enlaces sociales
    shared/                 AnimatedBackground, Logo, ThemeSwitcher, MainContainer
  components/ui/            Primitivas compartidas (Chakra Provider, Toaster)
  lib/                      Sanity client
  theme.ts                  Tema Chakra UI (tokens semanticos, dark/light)
```

## CMS

El contenido se gestiona desde Sanity Studio. Los schemas estan definidos en `daniel-loyo-dashboard/`.

Ver [daniel-loyo-dashboard/README.md](../daniel-loyo-dashboard/README.md) para el modelo de contenido.

## Deploy

Se despliega en Vercel. El build usa Turbopack. Las variables de entorno se configuran en el dashboard de Vercel.

```bash
npm run build
```
