# Portfolio de Mateo Pérez Quero

Sitio estático con páginas separadas para Al final de la escalera, Lightshores, Bound for the skies, fields and mountains, Bio y Tienda. Cada proyecto abre su propia página con una composición distinta; las tres galerías presentan diez imágenes de gran formato y permiten abrirlas en el visor. El menú es fijo en escritorio y se convierte en una barra superior en móvil. Los iconos de correo e Instagram están al pie del menú.

## Personalizar

1. Los títulos, años y descripciones ya están colocados en `Al final de la escalera.html`, `Lightshores.html` y `Bound for the skies, fields and mountains.html`. `index.html` redirige al primer proyecto porque GitHub Pages necesita un `index.html` como punto de entrada.
2. Las galerías cargan diez imágenes locales cada una: `images/libro-1-01.jpg` a `images/libro-1-10.jpg`, `images/libro-2-01.jpg` a `images/libro-2-10.jpg` y `images/zine-01.jpg` a `images/zine-10.jpg`. Copia las fotos con esos nombres dentro de una carpeta `images/` en la raíz.
3. En `bio.html`, coloca el retrato en `images/retrato.jpg`. La biografía proporcionada ya está incorporada.
4. En `tienda.html`, coloca las cubiertas en `images/libro-1.jpg`, `images/libro-2.jpg` e `images/zine.jpg`. Las tres publicaciones aparecen como disponibles y no se publican precios. Los botones de encargo abren un correo ya dirigido al correo de contacto.
5. El correo y el perfil de Instagram ya están actualizados en todas las páginas HTML.
6. El logo transparente se guarda como `logo-mateo-perez-quero.png`; reemplaza ese archivo por otra versión PNG con el mismo nombre si deseas cambiarlo.

Las tipografías sans serif DM Sans y DM Mono acompañan el carácter retro del logo. Se descargan desde Google Fonts; si se prefiere no depender de un servicio externo, elimina el enlace de Google Fonts de las páginas HTML y se usarán alternativas del sistema.

## Publicar en GitHub Pages

1. Sube los archivos HTML, `styles.css`, `script.js`, el logo y las imágenes al repositorio.
2. Abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, la rama `main` y `/(root)`, y guarda.
4. GitHub mostrará el enlace del sitio al terminar la publicación.

## Páginas

- `index.html`: redirección a la galería inicial; GitHub Pages la necesita como entrada.
- `Al final de la escalera.html`, `Lightshores.html`, `Bound for the skies, fields and mountains.html`: páginas individuales de proyecto.
- `bio.html`: biografía y retrato.
- `tienda.html`: publicaciones y enlaces para encargarlas por correo.
- `styles.css`: diseño, adaptación móvil y mosaico de imágenes.
- `script.js`: rutas y textos alternativos de las 30 fotos de galería y visor ampliado.
