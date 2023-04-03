import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

function createGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    }).join('');
} 

galleryContainer.innerHTML = galleryImages;

let gallery = new SimpleLightbox('.gallery a',{
    captionType: 	'attr',
    captionsData: `alt`,
    captionDelay: 250,
});