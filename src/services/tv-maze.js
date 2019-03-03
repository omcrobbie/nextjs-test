import fetch from 'isomorphic-unfetch'

export const fetchOneShow = async id => {
    const res = await fetch(`/api/oneShow/${id}`)
    const show = await res.json()
    console.log(`Fetched: ${show.name}`)
    return show;
} 
export const fetchAllShows = async () => {
    const res = await fetch('/api/allShows')
    const data = await res.json()
    console.log(`Show data fetched. Count: ${data.length} `)
    return data
}