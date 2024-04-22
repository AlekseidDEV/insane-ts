import { Div, Elem } from "src/models/aliases"

export const openPopup = (popup: string, closeIcon: string) => {
    const popupBlock: Div | null = document.querySelector(popup)

    popupBlock!.style.visibility = 'visible'
    

    popupBlock!.addEventListener('click', (e) => {
        if(e.target === popupBlock){
            popupBlock!.style.visibility = 'hidden'
        } else if((e.target as Elem).closest(closeIcon)){
            popupBlock!.style.visibility = 'hidden'
        }
    })
}