import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchPictureBySearch } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";

const inputForm = document.querySelector('input[name="search"]');
const allImages = document.querySelector('.gallery-list');
const form = document.querySelector('.form-image-search');
const loader = document.querySelector('.loader');
form.addEventListener("submit", performSearch);

function performSearch(event) {
   event.preventDefault();
  loader.classList.remove('is-hidden');
   const search = inputForm.value.trim();
   console.log(search);
   allImages.innerHTML = "";
   if (search === '') {
      event.target.reset();
      
loader.classList.add('is-hidden');
   }
   else {
      
      fetchPictureBySearch(search)
         .then((imagesData) => {
            if (imagesData.total === 0) {
               iziToast.info({
                  position: 'topRight',
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                  color: 'red',
                  timeout: 3000,
               });
               event.target.reset();
            }
            const searchedGallery = createGallery(imagesData.hits);
            allImages.innerHTML = searchedGallery;
            let newGallery = new SimpleLightbox('.gallery-list a', { captionsData: 'alt', captionDelay: 250 });
            newGallery.refresh();
          
         })
         .catch((error) => console.log(error))
         .finally(() => {
            event.target.reset();
          loader.classList.add('is-hidden');

         });
   }
}
            
            