import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/MyLayout';

const Shows = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => {
                return (
                    <li key={show.id}>
                        <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
)

// Shows.getInitialProps = async function(){
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     console.log(`Show data fetched. Count: ${data.length} `)
//     return {
//         shows: data
//     }
// }
export default Shows