import {Link} from '../routes'
import Layout from '../components/MyLayout';
import { connect } from 'react-redux'
import React from 'react'
import { fetchAllShows } from '../store/shows/show.actions';

export class Shows extends React.Component {
    static async getInitialProps({reduxStore}) {
        await reduxStore.dispatch(fetchAllShows())
        return {}
    }
    render() {
        const {shows} = this.props;
        return (
            <Layout>
                <h1>Batman TV Shows</h1>
                <ul>
                    {shows.map(({show}) => {
                        return (
                            <li key={show.id}>
                                <Link route='show' params={{id: show.id}}>
                                    <a>{show.name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Layout>

        )
    }
}
const mapStateToProps = ({show}) => {
    return {
        shows: show.shows
    }
}
export default connect(mapStateToProps)(Shows)