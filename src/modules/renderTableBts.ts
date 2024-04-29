import { Div } from "src/models/aliases";
import { DataTabel } from "src/models/dataTable";

export const renderTableBtns = (data: DataTabel[]) => {
    const uniqueKeyType: Set<string> = new Set()
    const navBlock: Div | null = document.querySelector('.nav-list-popup-repair')

    const renderBtn = (typeArr: string[]) => {
        navBlock!.innerHTML = ''

        for(let i = 0; i <= typeArr.length - 1; i++){
            const newBtn = document.createElement('button')

            if(i === 0){
                newBtn.classList.add('button_o', 'popup-repair-types-nav__item', 'active_o')
                newBtn.textContent = typeArr[i]
            } else{
                newBtn.classList.add('button_o', 'popup-repair-types-nav__item')
                newBtn.textContent = typeArr[i]
            }
            
            navBlock?.append(newBtn)
        }
    }

    data.forEach((obj) => {
        uniqueKeyType.add(obj.type)
    })

    renderBtn([...uniqueKeyType])
}