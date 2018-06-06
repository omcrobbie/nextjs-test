import Layout from "../components/MyLayout";
import { withRouter } from 'next/router';

const Post = (props) => {
    const { router } = props;
    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>{router.query.content}</p>
        </Layout>
    )
}
export default withRouter(Post)