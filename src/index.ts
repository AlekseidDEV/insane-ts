
import { numAccordion } from "./modules/accordNumber";
import { maskPhone } from "./modules/helpers/inputMask";
import { menuFunc } from "./modules/menu";
import { smoothScroll } from "./modules/smoothScroll";

numAccordion()

if(window.innerWidth > 576){
    menuFunc("translate3d(0px, 0px, 0px)", "translate3d(645px, 0px, 0px)")
} else{
    menuFunc("translate3d(0px, 0px, 0px)", "translate3d(0px, 750px, 0px)")
}

document.querySelector('.button-footer')?.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll((e.target as HTMLAnchorElement).hash)
})

maskPhone('input[name="phone"]')