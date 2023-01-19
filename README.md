
# Prueba Podcast Inditex (Zara)

Prueba técnica que carga 100 podcast de itunes y los renderiza en pantalla con sus fichas.

Las fichas son clicables y, mediante router en cliente se navega a la página con los Detalles del podcast. Pudiendo hacer uso del buscador de podcast para filtrar en tiempo real por título o autor.


La vista con los detalles del Podcast (episodios y reproducción) No ha sido concluida por falta de tiempo, pero sí se puede acceder a su la Url dinámica que contendría la vista donde se renderiza el ID del podcast pasado por el Router.
 El buscador/filtrador de la Home también es funcional.

## Requisitos
node v16.13.1

## Instalación

Clonar el repositorio público:
https://github.com/barleby/inditex-podcast.git

ejecutar en la consola:
```bash
npm install
```

## Scripts

Arranque en local con dev-server de webpack. 
```bash
npm run start
```
Port 3000 por defecto. http://localhost:3000/


Generar archivos de build minificados:
```bash
npm run build
```
Se crea la carpeta build con los assets.

## Author

- José Alberto Torres. Paradigma Digital

