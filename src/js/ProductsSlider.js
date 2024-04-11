import Swiper from 'swiper';

class ProductsSlider {
  constructor() {

    this.sliders = document.querySelectorAll('.js-products-slider');

    this.sliders.forEach(productsSlider => {
      let slider = new Swiper(productsSlider, {
        slidesPerView: 4,
        loop: false,
        speed: 500,
        observer: true,
        observeParents: true,
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    });

  }
}

export default new ProductsSlider();