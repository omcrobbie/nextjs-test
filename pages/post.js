import Layout from "../components/MyLayout";

export default (props) => (
    <Layout>
        <h1>{props.url.query.title}</h1>
        <p>{props.url.query.content}</p>
    </Layout>
)