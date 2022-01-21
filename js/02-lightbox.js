import { galleryItems } from './gallery-items.js';
/* Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
Используй готовый код из первого задания.

Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.

Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения. */

const galleryContainer = document.querySelector('.gallery')
const imageRef = document.querySelectorAll('.gallery__image')
const imageLink = document.querySelectorAll('.gallery__link')
const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('')
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
})

console.log(lightbox)