const imageUrls = ['https://www.care.com/c/wp-content/uploads/sites/2/2021/04/nicolef455-202117012317648905-1080x1080.png',
  'https://i.pinimg.com/originals/5a/0a/b9/5a0ab96a70f570c929089379597aa832.jpg',
  'https://www.flyfishingline.net/wp-content/uploads/2019/11/last-fly-cast.jpg'];
const gallery = document.querySelector('main');
const imageUrlInput = document.querySelector('input');
const addImageButton = document.querySelector('button');
addImageButton.addEventListener('click', function () {

  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});
function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);

  }
}
updateGallery();
