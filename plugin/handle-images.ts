document.addEventListener(
  'DOMContentLoaded',
  function () {
    handleImages();
  },
  false
);

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    handleImages();
  }
}).observe(document, { subtree: true, childList: true });

let options = {
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const element = entry.target;
    const fullSizeImageUrl = element.getAttribute('src');

    if (!element.classList.contains('loaded') && entry.isIntersecting) {
      const imgElement = document.createElement('img');
      imgElement.onload = () => {
        setTimeout(() => {
          const preloadedImage = element.querySelector('.preloaded-image');
          const preloadedImageFadeHack = element.querySelector(
            '.preloaded-image-fade-hack'
          );
          const loadedImage = element.querySelector('.loaded-image');

          loadedImage.setAttribute('src', fullSizeImageUrl);
          loadedImage.classList.add('loaded');
          preloadedImage.classList.add('loaded');
          preloadedImageFadeHack.classList.add('loaded');
        }, 300);
      };
      imgElement.setAttribute('src', fullSizeImageUrl);
      element.classList.add('loaded');
    }
  });
}, options);

function handleImages() {
  setTimeout(() => {
    const imgElements = Array.from(
      document.querySelectorAll(
        'scully-image, scully-blur-image, scully-traced-image, scully-primitives-image, scully-pixels-image'
      )
    ).filter((element) => {
      return !!element.getAttribute('data-markdown');
    });

    imgElements.map((img) => {
      observer.observe(img);
    });

    // iterate remaining images
    // attach intersection observer to images
  }, 1000);
}
