import { Div, Elem } from "src/models/aliases"

export const repairPopupOpen = () => {
    const windowRepair: Div | null = document.querySelector('.popup-repair-types')

    windowRepair!.style.visibility = 'visible' 

    windowRepair?.addEventListener('click', (e) => {
        if(e.target === windowRepair){
            windowRepair!.style.visibility = 'hidden' 
        }else if((e.target as Elem).closest('.close')){
            windowRepair!.style.visibility = 'hidden'
        } 
    })
}