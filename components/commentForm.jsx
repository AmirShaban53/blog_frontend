import axios from 'axios';
import {useRouter} from 'next/router';
import { useState } from 'react';

const CommentForm = ({getComments}) => {
    const URL = process.env.NEXT_PUBLIC_URL;

    const[comment, setComment] = useState({name:'',comment:''});
    const router = useRouter();
    const id = router.query.postId;
    const handleComment = (changes) => {
        setComment(prevState => {return{...prevState, ...changes}})
    }
    const handleSubmitComment = async(e) => {
        try {
            e.preventDefault();
            await axios.post(`${URL}/posts/${id}/comment`, comment);
            console.log('new comment created');
            getComments();
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <div className="my-3">
            <hr />
            <p className='fs-2'>New comment !</p>
            <form onSubmit={e=>handleSubmitComment(e)}>
                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label className='form-label'>name:</label>
                        <input 
                            type="text" 
                            className='form-control' 
                            value = {comment.name}
                            onChange={e=> handleComment({name: e.target.value})}
                        />
                    </div>
                </div>
                <div className="mb-3">
                        <label className='form-label'>comment:</label>
                        <textarea 
                            cols="25" 
                            rows="7" 
                            className='form-control' 
                            placeholder='new comment'
                            value={comment.comment}
                            onChange={e=>handleComment({comment: e.target.value})}
                        />
                </div>
                <div className="mb-3">
                    <button type='submit' className="btn btn-success">comment</button>
                </div>
            </form>
        </div>

    )
}

export default CommentForm;