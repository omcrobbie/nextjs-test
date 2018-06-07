import Link from 'next/link'
import Layout from '../components/MyLayout';
import { connect } from 'react-redux'
import React from 'react'
import { startFetchAllShows } from '../store';

export class Shows extends React.Component {
    static async getInitialProps({reduxStore}) {
        await reduxStore.dispatch(startFetchAllShows())
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
                                <Link href={`show?id=${show.id}`}>
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
const mapStateToProps = state => {
    return {
        shows: state.shows
    }
}
export default connect(mapStateToProps)(Shows)