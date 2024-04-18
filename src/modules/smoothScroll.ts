import {repairPopupOpen } from "./repairPopupOpen"

export const smoothScroll = (id: string) => {
    if(id){
        document.getElementById(id.slice(1))?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } else{
        repairPopupOpen()
    }
}