import { Link } from '../routes'
import Layout from '../components/MyLayout';
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Index extends React.Component {
    static get propTypes() {
        return {
            data: PropTypes.array
        }
    }
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
const mapStateToProps = state => {
    return {
        data: state.posts
    }
}
export default connect(mapStateToProps)(Index)