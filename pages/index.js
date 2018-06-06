import Link from 'next/link'
import Header from '../components/header';
import Layout from '../components/MyLayout';
const data = require('../fixtures');



const PostLink = (props) => (
    <li>
        <Link as={`/posts/${props.id}`} href={`post?title=${props.title}&content=${props.content}`} >
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {data.map(post => <PostLink title={post.t} content={post.c} key={post.t} id={post.id}/>)}
        </ul>
    </Layout>
)