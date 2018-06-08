import Layout from "../components/MyLayout";
import { connect } from 'react-redux';
import { fetchOneShow } from "../store/shows/show.actions";
const Show = ({show}) => {
    return (
        <Layout>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
        </Layout>
    )
}
Show.getInitialProps = async (ctx) => {
    const {query, reduxStore} = ctx;
    await reduxStore.dispatch(fetchOneShow(query.id))
    return {}   
}
const ms2p = ({show}) => {
    return {
        show: show.currentShow
    }
}
export default connect(ms2p)(Show)