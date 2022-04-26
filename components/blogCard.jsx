import HTMLParser from "html-react-parser";
import Link from "next/link";
import classes from '../styles/blogCard.module.css';

const URL = process.env.NEXT_PUBLIC_URL;
const BlogCard = ({id,title, description, author, image_URL, createdAt}) => {
    const date = createdAt.split('T')[0];
    const imageURL = `${URL}/${image_URL}`
    
    return (
        <div className='col-12 col-sm-10 col-md-8 card mx-2 mb-3 p-0 shadow'>
            <div className="position-relative">
                <div className= {classes.imageHeight}>
                    <img src={imageURL} className={`card-img-top my-0`} />
                </div>
                <p className={`${classes.date} bg-info text-light`}>{date}</p>

            </div>
            <div className="card-body">
                <div className="card-title">
                    <h2>{title}</h2>
                    <p><span className='text-muted'>author:</span> <span className='fw-bolder'>{author}</span></p>
                </div>
                <div className='card-text'>{ description || ''}</div>
                <Link href={`/posts/${id}`} ><a className='btn btn-primary'>read more</a></Link>
            </div>
        </div>
    )
}



export default BlogCard;