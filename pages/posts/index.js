import axios from "axios";
import {useState} from "react";

import Head from 'next/head';

import BlogCard from "../../components/blogCard";

const URL = process.env.NEXT_PUBLIC_URL;
const PostsPage = (props) => {
    const [posts, setPosts] = useState(props.posts);
 
   
    return (
        <>
            <Head>
                <title>NAOMI | POSTS</title>
                <meta name="description" content="Read blog posts on topics like fashion, photography, tradition and many others written but Naomi Jessica a professional photographer and up-coming junior writer"/>
            </Head>
            <div className='container mt-5 pt-5'>
                <h1>blog posts</h1>
                <div className='row'>
                    {posts.map(post => {return <BlogCard key={post.id} {...post}/>})}
                </div>
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
        revalidate: 50
    }
}

export default PostsPage;