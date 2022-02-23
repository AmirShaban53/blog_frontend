const CommentForm = () => {
    return (
        <div className="my-3">
            <hr />
            <p className='fs-2'>New comment !</p>
            <form >
                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label className='form-label'>name:</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label'>email:</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className="mb-3">
                        <label className='form-label'>comment:</label>
                        <textarea cols="30" rows="10" className='form-control' placeholder='new comment'/>
                </div>
                <div className="mb-3">
                    <label type='submit' className="btn btn-success">comment</label>
                </div>
            </form>
        </div>

    )
}

export default CommentForm;