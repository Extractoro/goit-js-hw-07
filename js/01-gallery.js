import { galleryItems } from './gallery-items.js';
/* Change code below this line
1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

2) Реализация делегирования на div.gallery и получение url большого изображения.

3) Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

4) Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

5) Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox. */

const galleryContainer = document.querySelector('.gallery')
const imageRef = document.querySelectorAll('.gallery__image')
const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
        `;
    }).join('')
}

galleryContainer.addEventListener('click', onPictureClick)

function onPictureClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery__image')) return

    imageRef.src = evt.target.dataset.source

    const instance = basicLightbox.create(`
    <img src="${imageRef.src}" alt="${imageRef.alt}">
`)
    instance.show()

    if (instance.visible()) {
        galleryContainer.addEventListener('keydown', onEscPress)
    }

    function onEscPress(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }

    }

}