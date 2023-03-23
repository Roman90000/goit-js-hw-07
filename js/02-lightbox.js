import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItemsImages = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryItemsImages);

gallery.addEventListener('click', openImgBigFoto);

function openImgBigFoto(e) {
    e.preventDefault();

    new SimpleLightbox('.gallery__item a');
};
