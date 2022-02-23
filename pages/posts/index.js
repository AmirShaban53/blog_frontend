import axios from "axios";
import {useState} from "react";


import BlogCard from "../../components/blogCard";

const URL = process.env.NEXT_PUBLIC_URL;
const PostsPage = (props) => {
    const [posts, setPosts] = useState(props.posts);
 
   
    return (
        <>
            <div className='container mt-5 pt-5'>
                <h1>posts page !</h1>
                {posts.map(post => {return <BlogCard key={post.id} {...post}/>})}

            </div>
            
        </>
    )
}

export const getStaticProps = async() => {
    const posts = await axios.get(`${URL}/posts`);
    return {
        props: {
            posts: posts.data
        },
        revalidate: 1
    }
}

export default PostsPage;