import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

class ProductsSlider {
  constructor() {

    this.sliders = document.querySelectorAll('.js-products-slider');

    this.sliders.forEach(productsSlider => {
      let slider = new Swiper(productsSlider, {
        slidesPerView: 1.33,
        loop: false,
        speed: 500,
        observer: true,
        observeParents: true,
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2.5
          },
          1200: {
            slidesPerView: 4.55
          }
        },
      });

    });

  }
}

export default new ProductsSlider();