export const repairPopupOpen = () => {
    const windowRepair: HTMLDivElement | null = document.querySelector('.popup-repair-types')

    windowRepair!.style.visibility = 'visible' 

    windowRepair?.addEventListener('click', (e) => {
        if(e.target === windowRepair){
            windowRepair!.style.visibility = 'hidden' 
        }
    })
}