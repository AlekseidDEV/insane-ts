import {Div, Elem } from "src/models/aliases"
import { repairTable } from "./repairTable"

export const repairSliderMob = (leftArrow: string, rightArrow: string) => {
    const navCarousel: Div | null = document.querySelector('.nav-wrap-repair')
    const listRepair: Div | null =  navCarousel!.querySelector('.nav-list-repair')
    const btns = navCarousel!.querySelectorAll('button')
    const linkPrice = document.querySelector('.link-list-repair.desktop-hide')

    let count = 0
    let countWidth = 0

    const heandleNext: IntersectionObserverCallback = (entries, observer) => {
         entries.forEach((entry) => {
            if(!entry.isIntersecting){
                let currentWidth = btns[count].clientWidth

                countWidth += currentWidth + 10
        
                listRepair!.style.transform = `translate(${-countWidth}px, 0px)`

                count++
    
                observer.unobserve(entry.target)
            } else{
                listRepair!.style.transform = `translate(0px, 0px)`
                countWidth = 0
                count = 0
                observer.unobserve(entry.target)
            }
        })
    }

    const heandlePrev: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting){
                let currentWidth = btns[count].clientWidth

                countWidth += -currentWidth + -10

                listRepair!.style.transform = `translate(${-countWidth}px, 0px)`

                count--
    
                observer.unobserve(entry.target)
            } else{
                countWidth = 0
                count = 0
                observer.unobserve(entry.target)
            }
        })
    }

    const observerNext = new IntersectionObserver(heandleNext, {
        rootMargin: "50px",
        threshold: 0.9
    })

    const observerPrev = new IntersectionObserver(heandlePrev, {
        rootMargin: "50px",
        threshold: 0.9
    })

    navCarousel?.addEventListener('click', (e: Event) => {
        if((e.target as Elem).matches(leftArrow)){
            observerPrev.observe(btns[0])
        } else if((e.target as Elem).matches(rightArrow)){
            observerNext.observe(btns[btns.length - 1])
        }
    })
    linkPrice?.addEventListener('click', () => {
        repairTable()
    })
}