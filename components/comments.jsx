import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import CommentForm from "./commentForm";
import Comment from "./comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    const router = useRouter();
    const URL = process.env.NEXT_PUBLIC_URL;
    const ID = router.query.postId;

    const getComments = async () => {
        try {
            const comments =await axios.get(`${URL}/posts/${ID}/comment`);
            if(comments.data.length >= 1)setComments(comments.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getComments();
    }, [])
    return (
        <>
            <hr />
            <p className="fs-1 fw-bolder">comments</p>
            {comments.length >= 1 ?
            comments.map(comment => {
                return <Comment key={comment.id} {...comment}/>
            }):
                <p>no comments yet!</p>
            }
            <CommentForm getComments={getComments}/>
        </>
    )
}

export default Comments;