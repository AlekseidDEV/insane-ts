export const getDataTable = (searchUrl: string) => {
    let urlHost = "http://localhost:1808/"

    return fetch(urlHost + searchUrl).then((res) => res.json())
}