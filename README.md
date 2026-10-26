# Portfolio de Mateo Pérez Quero

Sitio estático con páginas separadas para Al final de la escalera, Lightshores, Bound for the fields, skies and mountains, Bio y Venta de libros. Cada proyecto abre su propia página y presenta diez imágenes en una composición editorial de gran formato; al pulsar una imagen se abre el visor. El menú es fijo en escritorio y se convierte en una barra superior en móvil. Los iconos de correo e Instagram están al pie del menú.

## Personalizar

1. Los títulos, años y descripción facilitados ya están colocados en `index.html`, `libro-2.html` y `zine.html`.
2. Las galerías se generan desde los tres grupos de `imageSets` en `script.js`. Cada imagen tiene el formato `[identificador o ruta, texto alternativo]`. Puedes sustituir un identificador de Unsplash por una ruta local como `images/libro-1-01.jpg`; si el texto comienza por `photo-`, se carga desde Unsplash y, si no, se usa como ruta local. Cada grupo contiene diez imágenes.
3. En `bio.html`, reemplaza la imagen de muestra por el retrato de Mateo. La biografía proporcionada ya está incorporada.
4. En `venta.html`, cambia las imágenes y los detalles de edición. Las tres publicaciones aparecen como disponibles y no se publican precios. Los botones de encargo abren un correo ya dirigido al correo de contacto.
5. Sustituye `correo@ejemplo.com` por la dirección real y cambia `https://instagram.com/` por el perfil de Instagram correcto en las páginas HTML.
6. El logo transparente se guarda como `logo-mateo-perez-quero.png`; reemplaza ese archivo por otra versión PNG con el mismo nombre si deseas cambiarlo.

Las tipografías sans serif DM Sans y DM Mono acompañan el carácter retro del logo. Se descargan desde Google Fonts; si se prefiere no depender de un servicio externo, elimina el enlace de Google Fonts de las páginas HTML y se usarán alternativas del sistema.

## Publicar en GitHub Pages

1. Sube los archivos HTML, `styles.css`, `script.js`, el logo y las imágenes al repositorio.
2. Abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, la rama `main` y `/(root)`, y guarda.
4. GitHub mostrará el enlace del sitio al terminar la publicación.

## Páginas

- `index.html`, `libro-2.html`, `zine.html`: páginas individuales de proyecto; el sitio abre directamente en Al final de la escalera.
- `bio.html`: biografía y retrato.
- `venta.html`: publicaciones y enlaces para encargarlas por correo.
- `styles.css`: diseño, adaptación móvil y mosaico de imágenes.
- `script.js`: contenido de muestra de las galerías y visor ampliado.
