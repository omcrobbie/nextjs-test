import Layout from "../components/MyLayout";
import { setCurrentPost } from "../store/posts/post.actions";
import { connect } from 'react-redux'

export const Post = ({post}) => {
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
const ms2p = ({post}) => {
    return {
        post: post.posts[post.currentPost]
    }
}
export default connect(ms2p)(Post)