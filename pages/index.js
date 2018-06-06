import Link from 'next/link'
import Header from '../components/header';
import Layout from '../components/MyLayout';
import React from 'react'
import { fetchAllShows } from '../store';
import { connect } from 'react-redux';

class Index extends React.Component {
    static getInitialProps({reduxStore, req}) {
        reduxStore.dispatch(fetchAllShows);
        return {}
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {data.map(post => {
                        return (
                            <li key={post.id}>
                                <Link href={`posts/${post.id}`} >
                                    <a>{post.title}</a>
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
        data: state.posts
    }
}
export default connect(mapStateToProps)(Index)