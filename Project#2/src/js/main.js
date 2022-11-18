import modals from "./modules/modals";
import sliders from "./modules/slider";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    forms();
});