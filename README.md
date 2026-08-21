# Portfolio — Iksvaku Claure Manchón

Portfolio personal de un desarrollador frontend. Es el sitio donde enseño mi trabajo, pero
también es el trabajo en sí: el código es público a propósito, porque forma parte de lo que
estoy presentando.

**En producción:** [isvakuclaure.github.io/PortofolioIksvaku](https://isvakuclaure.github.io/PortofolioIksvaku/)

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Despliegue | GitHub Pages vía GitHub Actions |

## Decisiones

**Export estático.** El sitio se sirve desde GitHub Pages, así que se compila con
`output: 'export'`. No hay servidor, ni API routes, ni renderizado en petición. Todo lo que
necesita interactividad es un componente de cliente.

**`basePath` y rutas de assets.** GitHub Pages sirve el sitio en un subdirectorio
(`/PortofolioIksvaku`), no en la raíz. Eso obliga a declarar `basePath` y `assetPrefix` en
[`next.config.js`](next.config.js), y a que las rutas de imágenes y vídeos incluyan el prefijo.
Si algún día el sitio se mueve a un dominio propio, esto es lo primero que hay que cambiar.

**Imágenes sin optimizar.** `next/image` necesita un servidor para optimizar al vuelo, y aquí
no hay ninguno — de ahí `images.unoptimized`. Los assets se optimizan a mano antes de
commitearlos.

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # layout raíz, fuentes y metadatos SEO
│   ├── page.tsx          # inicio
│   ├── proyectos/        # trabajo, con fichas en modal
│   ├── aficiones/        # fuera del trabajo
│   ├── contacto/
│   ├── sitemap.ts        # sitemap y robots generados en build
│   └── robots.ts
└── components/
    └── Navbar.tsx
```

## Desarrollo

```bash
npm install
npm run dev
```

Compilar el sitio estático en `out/`:

```bash
npm run build
```

## Despliegue

Cada push a `main` lanza [`deploy.yml`](.github/workflows/deploy.yml), que compila y sube
`out/` a GitHub Pages. No hay paso manual. El repo tiene otras ramas (`master`, `gh-pages`,
`production`) que no publican.

## Licencia

El código es libre de mirar y de aprender de él. Los textos, las imágenes y los vídeos de los
proyectos no lo son: son míos o de las empresas para las que trabajé.
