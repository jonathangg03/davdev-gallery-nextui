# Davdev Gallery

Una aplicación web de galería, donde subes una foto, y puedes ver todas las
fotos que se han subido al sitio. Las imagenes se guardan en Cloudinary.

[![Miriio](https://dav-dev.com/assets/projects/miriio.jpg "Miriio")](https://dav-dev.com/assets/projects/miriio.jpg "Miriio")

## Backend

El backend de este sitio lo puedes ver en este
[repositorio](https://github.com/jonathangg03/davdev-gallery-nextui-backend "repositorio").

## Instrucciones de uso

- Al ingresar, cuando el sitio cargue, veremos las imagenes que se han subido.
- Podemos eliminarlas, o verlas en tamaño completa dando click en el botón
  respectivo.
- Para añadir una nueva imagen, click en el botón de "Añadir..." ingresamos un
  nombre y descripción, luego confirmamos. Así almacenaremos la imagen.
- Cuando está se termine de subir, la podremos ver junto con las demás.

## Tecnologías usadas

- JavaScript.
- React.js.
- Next.js.
- Node.js.
- Express.js.
- Cloudinary.
- Heroku.
- NextUI.
- MongoDB.
- Vercel.

## Correr aplicación en local

- Debes clonar este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Las variables de entorno de desarrollo están en el archivo ".env.development",
  ahí tendremos la dirección de la API REST corriendo en local, y el entorno en
  el que estamos, "development" en nuestro caso.
- Iniciar el proyecto con el comando "npm run dev".
- Tenemos que tener el backend corriendo en el puerto 3001 (o el que hayamos
  definido en las variables de entorno), para ello, ver el
  [repositorio](https://github.com/jonathangg03/social-media-backend "repositorio").
