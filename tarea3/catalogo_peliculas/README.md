# MovieVerse

Aplicación web desarrollada con Angular para consultar un catálogo de películas, explorar detalles y gestionar una lista de favoritos sin utilizar servicios externos ni persistencia en navegador.

## Descripción

MovieVerse es un proyecto de catálogo cinematográfico con una navegación sencilla y una interfaz orientada a la exploración. La aplicación muestra una colección de películas hardcodeadas en memoria, permite filtrar por varios criterios y ofrece una vista dedicada para revisar los títulos marcados como favoritos.

## Funcionalidades

- Visualización de una colección de películas en la vista principal.
- Filtros por título, director, productor, género y año.
- Navegación por detalle individual de cada película.
- Toggle de favoritos para agregar o quitar títulos de la lista.
- Vista de favoritos con acceso directo al detalle y eliminación instantánea.
- Estado global gestionado con un servicio de Angular.
- Routing con navegación entre páginas sin recargar el navegador.

## Tecnologías

- Angular 22
- TypeScript
- Routing de Angular
- Reactive Forms
- Servicios e in-memory state
- Componentes standalone

## Estructura del proyecto

```text
src/
├── app/
│   ├── data/
│   ├── layout/
│   ├── pages/
│   ├── shared/
│   ├── app.config.ts
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.scss
│   └── app.ts
├── index.html
├── main.ts
└── styles.scss
```

## Cómo ejecutar

1. Instala las dependencias:

```bash
npm install
```

2. Inicia la aplicación en modo desarrollo:

```bash
npm start
```

3. Abre la URL local en el navegador:

```text
http://localhost:4200/
```

## Compilar para producción

```bash
npm run build
```

## Alcance

Este proyecto cumple con el alcance solicitado para un catálogo de películas con favoritos en memoria: no se usa backend, ni API ni almacenamiento local; la información se mantiene únicamente mientras la aplicación está ejecutándose.
