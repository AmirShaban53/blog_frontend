import Hero from "../components/hero";
import BlogCard from "../components/blogCard";

const HomePage = () => {
    return (
        <>
            <Hero>
                <div className='container d-flex align-items-center text-center text-light h-100'>
                    <div>
                        <h2>what a wonderful world!</h2>
                        <p>this and that</p>
                    </div>
                </div>
            </Hero>
            <div className='container mt-5'>
                <section className="row mb-5 pt-5">
                    <div className="col text-center">
                        <p className="display-3  fw-bolder">Lorem ipsum dolor sit amet.</p>
                        <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae. <br /> Lorem ipsum dolor sit amet.</p>
                    </div>
                </section>
                <section className="row mb-5 pt-5">
                    <div className="col-6 ">
                        <img src="/400.png" alt="" className='img-fluid shadow'/>
                    </div>
                    <div className="col-6">
                        <p className="fs-2 fw-bolder">Lorem, ipsum dolor.</p>
                        <p className="fs-3 fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo in voluptatum sint voluptates temporibus omnis beatae, error minima commodi quisquam ipsa quibusdam odio repellendus adipisci? Quod veritatis ad quo at?</p>
                    </div>
                </section>
                <section className="row mb-5 pt-5">
                    <div className="col-6">
                        <p className="fs-2 fw-bolder">Lorem, ipsum dolor.</p>
                        <p className="fs-3 fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo in voluptatum sint voluptates temporibus omnis beatae, error minima commodi quisquam ipsa quibusdam odio repellendus adipisci? Quod veritatis ad quo at?</p>
                    </div>
                    <div className="col-6">
                        <img src="/400.png" alt="" className='img-fluid shadow'/>
                    </div>
                </section>
            </div>
            <div className="container-fluid">
                <section className="row back-drop mb-5">
                    
                </section>
            </div>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-4">
                        <div className="card">
                            <img src="/400.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit.</p>
                                <a href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/400.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit.</p>
                                <a href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/400.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit.</p>
                                <a href="/">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row my-5 pt-3 ">
                    <div className="col text-center">
                        <p className='display-1 fw-bolder'>call to action</p>
                        <p className='fs-3 text-muted fw-lighter fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <button className="btn btn-info w-25  fs-4">posts</button>
                    </div>

                </section>
            </div>
        </>
    )
}

export default HomePage;