document.querySelectorAll('#year').forEach(node => { node.textContent = new Date().getFullYear(); });

// Cambia estas imágenes de muestra por los archivos del fotógrafo. Cada proyecto muestra diez fotos.
const imageSets = {
  'libro-1': [
      ['images/libro-1-01.jpg', '01'], ['images/libro-1-02.jpg', '02'], ['images/libro-1-03.jpg', '03'], ['images/libro-1-04.jpg', '04'], ['images/libro-1-05.jpg', '05'], ['images/libro-1-06.jpg', '06'], ['images/libro-1-07.jpg', '07'], ['images/libro-1-08.jpg', '08'], ['images/libro-1-09.jpg', '09'], ['images/libro-1-10.jpg', '10']
  ],
  'libro-2': [
      ['images/libro-2-01.jpg', '01'], ['images/libro-2-02.jpg', '02'], ['images/libro-2-03.jpg', '03'], ['images/libro-2-04.jpg', '04'], ['images/libro-2-05.jpg', '05'], ['images/libro-2-06.jpg', '06'], ['images/libro-2-07.jpg', '07'], ['images/libro-2-08.jpg', '08'], ['images/libro-2-09.jpg', '09'], ['images/libro-2-10.jpg','10']
  ],
  zine: [
      ['images/zine-01.jpg', '01'], ['images/zine-02.jpg', '02'], ['images/zine-03.jpg', '03'], ['images/zine-04.jpg', '04'], ['images/zine-05.jpg', '05'], ['images/zine-06.jpg', '06'], ['images/zine-07.jpg', '07'], ['images/zine-08.jpg', '08'], ['images/zine-09.jpg', '09'], ['images/zine-10.jpg', '10']
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
