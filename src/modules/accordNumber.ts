export const numAccordion = () => {
    const arrowAccord: HTMLDivElement | null = document.querySelector('.header-contacts__arrow')
    const accordWrapper: HTMLDivElement | null = document.querySelector('.header-contacts__phone-number-accord')
    const linkNumber: HTMLAnchorElement | null = accordWrapper!.querySelector('a')

    let clicker = false

    const changeAccorrdion = (e: Event) => {
        clicker = !clicker

        if(clicker){
            arrowAccord!.style.transform = 'rotate(-90deg)'
            accordWrapper!.style.top = '30px'
            linkNumber!.style.opacity = '1'
        } else{
            arrowAccord!.style.transform = 'rotate(0deg)'
            accordWrapper!.style.top = '0'
            linkNumber!.style.opacity = '0'
        }

    }

    arrowAccord?.addEventListener('click', changeAccorrdion)
}