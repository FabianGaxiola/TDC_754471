# MovieVerse

Aplicación web Angular de catálogo de películas con favoritos en memoria.

## Descripción

MovieVerse es un proyecto de catálogo cinematográfico desarrollado con Angular para mostrar una colección de películas de ejemplo, permitir su filtrado y administrar una lista de favoritos sin persistencia externa.

La información de las películas se define dentro de la aplicación y se maneja totalmente en memoria mediante un servicio de Angular. La navegación se realiza con rutas y componentes standalone para mantener una estructura clara y funcional.

## Funcionalidades

- Catálogo principal con tarjetas de películas.
- Búsqueda y filtrado por título, director, productor, género y año.
- Vista detallada de cada película.
- Agregar o quitar títulos de la lista de favoritos.
- Página específica para consultar todas las películas favoritas.
- Estado compartido en memoria para todos los componentes.

## Tecnologías principales

- Angular
- TypeScript
- Angular Router
- Reactive Forms
- Components y Services
- Directivas integradas de Angular

## Estructura relevante

```text
src/
├── app/
│   ├── data/
│   ├── layout/
│   ├── pages/
│   ├── shared/
│   ├── app.routes.ts
│   ├── app.ts
│   └── app.html
├── main.ts
├── styles.scss
└── index.html
```

## Ejecutar el proyecto

```bash
cd catalogo_peliculas
npm install
npm start
```

La app queda disponible en:

```text
http://localhost:4200/
```

## Compilar

```bash
npm run build
```

## Alcance

Este proyecto está limitado a la gestión de un catálogo de películas con favoritos en memoria, sin APIs, sin backend y sin almacenamiento persistente en navegador.
