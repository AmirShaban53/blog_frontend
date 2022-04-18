import axios from 'axios';
import HTMLParser from 'html-react-parser';

import Comments from '../../components/comments';

const URL = process.env.NEXT_PUBLIC_URL;
const PostPage = ({post}) => {
    const imageURL = `${URL}/${post.image_URL}`
    return (
        <>
            <div className='container mt-5 pt-5'>
                <h1>{post.title}</h1>
                <div>
                    author: <span className='fw-bolder'>{post.author}</span> 
                </div>
                <img src={imageURL} className='img-fluid'/>
                <div>{HTMLParser(post.content) }</div>
                <br/>
                <Comments/>
            </div>
        </>
    )
}

export const getStaticPaths = async() => {
    const posts = await axios.get(`${URL}/posts/`)

    return {
        fallback: 'blocking',
        paths: posts.data.map(post=>{return {params: {postId: post.id}}}),
        // paths: [{params: {postId: 'id1'}}]
            
        
    }
}

export const getStaticProps = async(context) => {
    
    const post = await axios.get(`${URL}/posts/${context.params.postId}`)
    return {
        props: {
            post: post.data
        }
   
    }
}

export default PostPage;