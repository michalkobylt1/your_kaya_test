class Accordions {
  constructor() {

    this.accordions = document.querySelectorAll('.js-product-accordion');

    this.accordions.forEach(accordion => {
      const accordionTrigger = accordion.querySelector('.js-product-accordion-trigger');

      accordionTrigger.addEventListener('click', () => {
        if (accordion.querySelector('details').hasAttribute('open')) {
          setTimeout(function() {
            // if (!accordion.querySelector('details').classList.contains('product__desc-accordion')) {
              accordion.querySelector('details').open = false;
            // }
          }, 100);          
        }

        this.accordions.forEach(accordion => {
          const details = accordion.querySelector('details');
          const summary = accordion.querySelector('summary');
          // if (!details.classList.contains('product__desc-accordion')) {
            details.removeAttribute('open');
            summary.setAttribute('aria-expanded', false);
          // }
        });

      });

    });

  }
}

export default new Accordions();