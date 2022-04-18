const AboutPage = () => {
    return (
        <div className="container mt-5 pt-5">
            <section className="row my-5">
                <div className="col text-center">
                    <div className="display-1 fw-bolder ">
                        <p>ABOUT <br /> <span className='fw-light'>US.</span></p>
                    </div>
                </div>
            </section>
            <section className="row">
                <div className="col fs-2">
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sed <br /> veritatis, reiciendis minima vitae magn.</p>
                </div>
            </section>
            <section className="row my-5 py-3">
                <div className="col-6 mx-auto">
                    <img src="/400.png" alt="" className='img-fluid w-100 rounded-circle shadow' />
                </div>
            </section>
            <section className="row">
                <div className="col fs-2 text-end">
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sed <br /> veritatis, reiciendis minima vitae magn.</p>
                </div>
            </section>
            <section className="row">
                <div className="col">
                    <form>
                        <p className="display-3">say hello :)</p>
                        <div className="card mb-5">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label  className="form-label">name :</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">email :</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">message :</label>
                                    <textarea name="" id="" cols="20" rows="5" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-outline-success">send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AboutPage;