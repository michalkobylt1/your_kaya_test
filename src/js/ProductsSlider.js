import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

class ProductsSlider {
  constructor() {

    this.sliders = document.querySelectorAll('.js-products-slider');

    this.sliders.forEach(productsSlider => {
      const slidesPerViewDesktop = productsSlider.getAttribute('data-items-count');
      const slidesPerViewMobile = productsSlider.getAttribute('data-items-count-mobile');

      let slider = new Swiper(productsSlider, {
        slidesPerView: slidesPerViewMobile ? slidesPerViewMobile : 1.33,
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
            slidesPerView: slidesPerViewDesktop ? slidesPerViewDesktop / 2 : 2.5
          },
          1200: {
            slidesPerView: slidesPerViewDesktop ? slidesPerViewDesktop : 4.55
          }
        },
      });

    });

  }
}

export default new ProductsSlider();