document.querySelectorAll('#year').forEach(node => { node.textContent = new Date().getFullYear(); });

// Cada ruta local corresponde a una foto del proyecto. Mantén diez imágenes por galería.
const imageSets = {
  'libro-1': [['images/libro-1-01.jpg','Carta de despedida'],['images/libro-1-02.jpg','Escalera hacia la luz'],['images/libro-1-03.jpg','Habitación en silencio'],['images/libro-1-04.jpg','Paisaje tras la lluvia'],['images/libro-1-05.jpg','Luz sobre una pared'],['images/libro-1-06.jpg','Camino entre sombras'],['images/libro-1-07.jpg','Retrato de un recuerdo'],['images/libro-1-08.jpg','Ventana abierta'],['images/libro-1-09.jpg','Última carta'],['images/libro-1-10.jpg','Umbral de luz']],
  'libro-2': [['images/libro-2-01.jpg','Luz de costa'],['images/libro-2-02.jpg','Mar en calma'],['images/libro-2-03.jpg','Paseo junto al agua'],['images/libro-2-04.jpg','Refugio junto al mar'],['images/libro-2-05.jpg','Cuaderno de viaje'],['images/libro-2-06.jpg','Orilla iluminada'],['images/libro-2-07.jpg','Tarde de verano'],['images/libro-2-08.jpg','Cielo sobre la costa'],['images/libro-2-09.jpg','Un instante feliz'],['images/libro-2-10.jpg','La última luz']],
  'zine': [['images/zine-01.jpg','Campo abierto'],['images/zine-02.jpg','Nubes sobre las montañas'],['images/zine-03.jpg','Camino en el bosque'],['images/zine-04.jpg','Ladera bajo el cielo'],['images/zine-05.jpg','Árboles y horizonte'],['images/zine-06.jpg','Pradera en silencio'],['images/zine-07.jpg','Montañas lejanas'],['images/zine-08.jpg','Luz entre las ramas'],['images/zine-09.jpg','Paisaje de ensueño'],['images/zine-10.jpg','Cielo y campo']]
};

const gallery = document.querySelector('#project-gallery');
if (gallery) {
  const projectId = document.querySelector('.project-page').dataset.project;
  const images = imageSets[projectId] || [];
  gallery.innerHTML = images.map(([id, alt], index) => {
    const thumb = id;
    const full = id;
    return `<button class="photo" data-full="${full}" aria-label="Ampliar foto ${index + 1}: ${alt}"><img src="${thumb}" alt="${alt}" ${index > 1 ? 'loading="lazy"' : 'fetchpriority="high"'}><span class="photo-index">${String(index + 1).padStart(2,'0')}</span></button>`;
  }).join('');
}

const dialog = document.querySelector('.lightbox');
if (dialog) {
  const lightboxImage = dialog.querySelector('figure img');
  const lightboxCaption = dialog.querySelector('figcaption');
  const lightboxCount = dialog.querySelector('.lightbox-count');
  let activePhotos = [];
  let activeIndex = 0;

  function showPhoto(index) {
    activeIndex = (index + activePhotos.length) % activePhotos.length;
    const button = activePhotos[activeIndex];
    const image = button.querySelector('img');
    lightboxImage.src = button.dataset.full || image.src;
    lightboxImage.alt = image.alt;
    const project = button.closest('.project-page');
    const projectName = project?.querySelector('h1')?.textContent || button.closest('.product')?.querySelector('h2')?.textContent || 'Fotografía';
    const number = button.querySelector('.photo-index')?.textContent || String(activeIndex + 1).padStart(2, '0');
    lightboxCaption.textContent = `${projectName} · ${number}`;
    if (lightboxCount) lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(activePhotos.length).padStart(2, '0')}`;
  }

  document.querySelectorAll('.photo').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.project-page') || button.closest('.product');
      activePhotos = [...group.querySelectorAll('.photo')];
      showPhoto(activePhotos.indexOf(button));
      dialog.showModal();
    });
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  const previous = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  if (previous) previous.addEventListener('click', () => showPhoto(activeIndex - 1));
  if (next) next.addEventListener('click', () => showPhoto(activeIndex + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' && previous) showPhoto(activeIndex - 1);
    if (event.key === 'ArrowRight' && next) showPhoto(activeIndex + 1);
  });
}
