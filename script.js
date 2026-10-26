document.querySelectorAll('#year').forEach(node => { node.textContent = new Date().getFullYear(); });

// Cambia estas imágenes de muestra por los archivos del fotógrafo. Cada proyecto muestra diez fotos.
const imageSets = {
  'libro-1': [
    ['photo-1470252649378-9c29740c9fa8','Luz de amanecer en un paisaje brumoso'],['photo-1518837695005-2083093ee35b','Mar y cielo en tonos apagados'],['photo-1470770841072-f978cf4d019e','Lago rodeado de montañas'],['photo-1500530855697-b586d89ba3ee','Figura contemplando el paisaje'],['photo-1472214103451-9374bd1c798e','Colinas verdes bajo las nubes'],['photo-1519681393784-d120267933ba','Montaña bajo un cielo nocturno'],['photo-1501785888041-af3ef285b470','Valle y lago desde la montaña'],['photo-1500534623283-312aade485b7','Paisaje abierto bajo una luz suave'],['photo-1464822759023-fed622ff2c3b','Cordillera recortada contra el cielo'],['photo-1500534314209-a25ddb2bd429','Dunas de arena al atardecer']
  ],
  'libro-2': [
    ['photo-1441974231531-c6227db76b6e','Luz entre los árboles del bosque'],['photo-1472396961693-142e6e269027','Ciervo en un claro del bosque'],['photo-1448375240586-882707db888b','Troncos altos en un bosque'],['photo-1500534623283-312aade485b7','Paisaje natural abierto'],['photo-1511497584788-876760111969','Ramas y luz entre hojas'],['photo-1473448912268-2022ce9509d8','Camino que se adentra en un bosque'],['photo-1500530855697-b586d89ba3ee','Silueta frente al horizonte'],['photo-1470252649378-9c29740c9fa8','Amanecer sobre el paisaje'],['photo-1470770841072-f978cf4d019e','Agua quieta entre montañas'],['photo-1501785888041-af3ef285b470','Vista desde una ladera']
  ],
  zine: [
    ['photo-1519608487953-e999c86e7455','Cielo nocturno en azul profundo'],['photo-1500534314209-a25ddb2bd429','Dunas bajo el sol'],['photo-1464822759023-fed622ff2c3b','Montañas al horizonte'],['photo-1500534623283-312aade485b7','Paisaje abierto'],['photo-1518837695005-2083093ee35b','Mar en calma'],['photo-1501785888041-af3ef285b470','Lago desde la montaña'],['photo-1472214103451-9374bd1c798e','Llanuras verdes'],['photo-1500530855697-b586d89ba3ee','Figura en un paisaje amplio'],['photo-1470252649378-9c29740c9fa8','Luz cálida entre la niebla'],['photo-1470770841072-f978cf4d019e','Reflejo en el lago']
  ]
};

const gallery = document.querySelector('#project-gallery');
if (gallery) {
  const projectId = document.querySelector('.project-page').dataset.project;
  const images = imageSets[projectId] || [];
  gallery.innerHTML = images.map(([id, alt], index) => {
    const isUnsplashId = id.startsWith('photo-');
    const thumb = isUnsplashId ? `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85` : id;
    const full = isUnsplashId ? `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=92` : id;
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
