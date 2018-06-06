import Layout from "../components/MyLayout";
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
const Show = ({show}) => {
    return (
        <Layout>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
        </Layout>
    )
}
// Show.getInitialProps = async function({query}) {
//     const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`)
//     const show = await res.json()
//     console.log(`Fetched: ${show.name}`)
//     return { show }
// }
export default Show