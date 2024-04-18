
import { numAccordion } from "./modules/accordNumber";
import { formSend } from "./modules/formSend";
import { maskPhone } from "./modules/helpers/inputMask";
import { menuFunc } from "./modules/menu";
import { privacyPopup } from "./modules/privacyPopup";
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

formSend("feedback1")
formSend("feedback2")
formSend("feedback3")
formSend("feedback4")
formSend("feedback5")
formSend("feedback6")

privacyPopup()

