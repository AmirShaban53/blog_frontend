import HTMLParser from "html-react-parser";
import Link from "next/link";
import classes from '../styles/blogCard.module.css';

const BlogCard = ({id,title, discription, aurthor, content, createdAt}) => {
    const date = createdAt.split('T')[0];

    return (
        <div className='card mb-3'>
            <div className="position-relative">
                <img src="/1080.webp" className="card-img-top" />
                <p className={`${classes.date} bg-info text-light`}>{date}</p>

            </div>
            <div className="card-body">
                <div className="card-title">
                    <h2>{title}</h2>
                    <p><span className='text-muted'>aurthor:</span> <span className='fw-bolder'>{aurthor}</span></p>
                </div>
                <div className='card-text'>{ discription || ''}</div>
                <Link href={`/posts/${id}`} ><a className='btn btn-primary'>read more</a></Link>
            </div>
        </div>
    )
}



export default BlogCard;