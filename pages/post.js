import Layout from "../components/MyLayout";
import { setCurrentPost } from "../store";
import { connect } from 'react-redux'

const Post = ({post}) => {
    return (
        <Layout>
            <h1>{post.t}</h1>
            <p>{post.c}</p>
        </Layout>
    )
}
Post.getInitialProps = async ({reduxStore, query}) => {
    reduxStore.dispatch(setCurrentPost(query.id))
    return {}
}
const ms2p = state => {
    return {
        post: state.posts[state.currentPost]
    }
}
export default connect(ms2p)(Post)