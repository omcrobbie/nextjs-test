import Link from 'next/link'
import Layout from '../components/MyLayout';
import React from 'react'
import { connect } from 'react-redux';

class Index extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {data.map((post, idx) => {
                        return (
                            <li key={post.id}>
                                <Link href={`post?id=${idx}`} >
                                    <a>{post.t}</a>
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