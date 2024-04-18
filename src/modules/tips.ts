export const tips = () => {
    const wrapperTips: HTMLDivElement | null = document.querySelector('.tips-wrapper')

    let stateVisible = false

    const isVisibleTips = (target: HTMLDivElement | null, text: HTMLDivElement | null, childElem: HTMLDivElement | null) => {
        const row: HTMLElement | null = childElem!.parentElement

        let rect = target!.getBoundingClientRect()
        

        if(rect.y < 0){
            target!.style.cssText = `
            transform: rotate(180deg);
            padding-top: 30px;
            top: 150px;
            `
            text!.style.transform = 'rotate(-180deg)'
            row!.style.zIndex = "100"
        } else{
            target?.removeAttribute('style')
            text?.removeAttribute('style')
            row?.removeAttribute('style')
        }
    }

    const openTips = (target: HTMLDivElement | null) => {
        const numberItem = target!.querySelector('span')
        const tip: HTMLDivElement | null = document.querySelector(`.formula-item-popup-${numberItem?.textContent}`)
        const textTip = tip!.querySelector('div')

        stateVisible = !stateVisible

        isVisibleTips(tip, textTip, target) 

        if(stateVisible){
            target?.classList.add('active-item')
        } else{
            target?.classList.remove('active-item')
        }
    }
    
    wrapperTips?.addEventListener('mouseover', (e) => {
        if((e.target as HTMLElement).closest('.formula-item__icon')){
            openTips((e.target as HTMLDivElement).closest('.formula-item'))
        }
    })
    wrapperTips?.addEventListener('mouseout', (e) => {
        if((e.target as HTMLElement).closest('.formula-item__icon')){
            openTips((e.target as HTMLDivElement).closest('.formula-item'))
        }
    })
}