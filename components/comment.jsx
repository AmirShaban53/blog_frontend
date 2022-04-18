import * as Icon from '@material-ui/icons';
const Comment = ({comment, name, createdAt}) => {
    const date = createdAt.split('T')[0];
    return (
        <div className='card m-2 rounded-0'>
            <div className="container">
                <div className='row'>
                    <div className="col-2 col-md-1 p-2">
                        <Icon.AccountCircle className=' comment w-100'/>
                    </div>
                    <div className="col-10 col-md-11 py-2">
                        <div className='mb-2'>
                            <p className='fw-bold mb-0'>{name}</p>
                            <p className=' text-muted'>{date}</p>
                        
                        </div>
                        <p className='fst-italic'>{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;