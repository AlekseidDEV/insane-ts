export const rennderMessage = (status: number) => {
    const modalsAjax = document.querySelectorAll('.modal_ajax')

    switch(status){
        case 2:
            (modalsAjax[status] as HTMLElement).style.display = 'flex'
            break
        case 1:
            (modalsAjax[status] as HTMLElement).style.display = 'flex'
            break
        case 0:
            (modalsAjax[status] as HTMLElement).style.display = 'flex'
            break
    }

    modalsAjax.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target === modal){
                (modal as HTMLElement).style.display = 'none'
            } else if((e.target as HTMLElement).matches('.close_message')){
                (modal as HTMLElement).style.display = 'none'
            }
        })
    })
}