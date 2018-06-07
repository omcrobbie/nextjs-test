import fetch from 'isomorphic-unfetch'
export default (url) => {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(url)
        const data = await res.json()
        resolve(data);
    })
}