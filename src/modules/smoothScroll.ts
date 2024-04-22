
import { repairTable } from "./repairTable"

export const smoothScroll = (id: string) => {
    if(id){
        document.getElementById(id.slice(1))?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } else{
        repairTable()
    }
}