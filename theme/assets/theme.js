!function(){"use strict";new class{constructor(){this.accordions=document.querySelectorAll(".js-product-accordion"),this.accordions.forEach((e=>{e.querySelector(".js-product-accordion-trigger").addEventListener("click",(()=>{e.querySelector("details").hasAttribute("open")&&setTimeout((function(){e.querySelector("details").open=!1}),100),this.accordions.forEach((e=>{const t=e.querySelector("details"),o=e.querySelector("summary");t.removeAttribute("open"),o.setAttribute("aria-expanded",!1)}))}))}))}},document.addEventListener("DOMContentLoaded",(()=>{}))}();