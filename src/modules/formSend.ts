import { DataForm } from "src/models/dataForm"
import { rennderMessage } from "./renderMessage"

export const formSend = (id: string) => {
    const form = document.getElementById(id)
    const allInputs = form!.querySelectorAll('input')
    const checkbox: HTMLFormElement | null = form!.querySelector('input[type="checkbox"]')

    const formSendServer = (data: DataForm) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    const isFromValue = (inputs: NodeList) => {
        let succes = false
        succes = Array.from(inputs).every((input) => {
            if((input as HTMLInputElement).value === '' && (input as HTMLInputElement).type !== 'checkbox'){
                return false
            } else{
                return true
            }
        })

        return succes
    }

    const dataPreporation = (form: HTMLFormElement) => {
        const formData = new FormData(form)
        const dataBody: DataForm = {}

        formData.forEach((value, key) => {
            dataBody[key] = value
        })

        if(isFromValue(allInputs) && checkbox!.checked){
            formSendServer(dataBody)
                .then(() => {
                    allInputs.forEach((input) => {
                        input.value = ''
                    })
                    checkbox!.checked = false
                    rennderMessage(0)
                })
                .catch(() => rennderMessage(2))
        } else{
            rennderMessage(1)
        }
    }


    form!.addEventListener('submit', (e) => {
        e.preventDefault()
        dataPreporation(e.target as HTMLFormElement)
    })
}