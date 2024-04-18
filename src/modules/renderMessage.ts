export const rennderMessage = (status: number) => {
    const modalsAjax = document.querySelectorAll('.modal_ajax')

    switch(status){
        case 2:
            (modalsAjax[status] as HTMLElement).style.visibility = 'visible'
            break
        case 1:
            (modalsAjax[status] as HTMLElement).style.visibility = 'visible'
            break
        case 0:
            (modalsAjax[status] as HTMLElement).style.visibility = 'visible'
            break
    }

    modalsAjax.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target === modal){
                (modal as HTMLElement).style.visibility = 'hidden'
            } else if((e.target as HTMLElement).matches('.close_ajax')){
                (modal as HTMLElement).style.visibility = 'hidden'
            }
        })
    })
}