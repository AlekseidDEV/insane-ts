import { Elem } from "src/models/aliases"

export const rennderMessage = (status: number) => {
    const modalsAjax = document.querySelectorAll('.modal_ajax')

    switch(status){
        case 2:
            (modalsAjax[status] as Elem).style.visibility = 'visible'
            break
        case 1:
            (modalsAjax[status] as Elem).style.visibility = 'visible'
            break
        case 0:
            (modalsAjax[status] as Elem).style.visibility = 'visible'
            break
    }

    modalsAjax.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target === modal){
                (modal as Elem).style.visibility = 'hidden'
            } else if((e.target as Elem).matches('.close_ajax')){
                (modal as Elem).style.visibility = 'hidden'
            }
        })
    })
}