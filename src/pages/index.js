import { Link } from '../routes'
import Layout from '../components/MyLayout';
import React from 'react'
import { connect } from 'react-redux'

export class Index extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {data.map((post, idx) => {
                        return (
                            <li key={post.id}>
                                <Link route='post' params={{id:idx}} >
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
const mapStateToProps = ({post}) => {
    return {
        data: post.posts
    }
}
export default connect(mapStateToProps)(Index)