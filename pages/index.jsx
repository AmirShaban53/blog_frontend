import Hero from "../components/hero";
import Link from "next/link";
import Head from "next/head";
import Image from "next/dist/client/image";

const HomePage = () => {
    return (
        <>
            <Head>
                <title>NAOMI | HOME</title>
                <meta name="description" content="Read blog posts on topics like fashion, photography, tradition and many others written but Naomi Jessica a professional photographer and up-coming junior writer" />
            </Head>
            <Hero>
                <div className='container d-flex align-items-center text-light h-100'>
                    <div>
                        <h2>Hey, am <span className="">Jessica Naomi</span></h2>
                        <p className="fs-4 fw-lighter fst-italic">and welcome to my blog.</p>
                    </div>
                </div>
            </Hero>
            <div className='container mt-5'>
                <section className="row mb-5 pt-5">
                    <div className="col text-center">
                        <p className="display-4  fw-bold">the Naomi blog.</p>
                    </div>
                </section>
                <section className="row mb-5 pt-5">
                    <div className="col-md-4">
                        <img src="/layer02.jpg" alt="man in classy suit" className='img-fluid shadow' layout="fill"/>
                    </div>
                    <div className="col-md-7">
                        <p className="fs-2 fw-bolder">Fashion and traidition</p>
                        <p className="fs-3 fst-italic">
                            Find interesting posts on fashion and trditional practices affects it amongest everyone. In one way or the other, fashion not only complements life but as well my be their entire life-style. 
                        </p>
                    </div>
                </section>
                <section className="row mb-5 pt-5">
                    <div className="col-md-6">
                        <p className="fs-2 fw-bolder mb-3 ">photography.</p>
                        <p className="fs-3 fst-italic">
                            The best part about photography is that no one tells you how to interpret it. You look at am image and get your own story out of it, deferent from the person right next to you.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="/layer14.jpg" alt="profile of a woman with a yellow background" className='img-fluid shadow' layout="fill"/>
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
                            <img src="/layer03.jpg" alt="" className="card-img-top" layout="fill"/>
                           
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/layer11.jpg" alt="" className="card-img-top" layout="fill"/>
                          
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="/layer07.jpg" alt="" className="card-img-top" layout="fill"/>
                            
                        </div>
                    </div>
                </div>
                <section className="row my-5 pt-3 ">
                    <div className="col text-center">
                        <p className='display-1 fw-bolder'>looking for more!</p>
                        <p className='fs-3 text-muted fw-lighter fst-italic'>have a look t your favourite content.</p>
                        <Link href='/posts'><button className="btn btn-info w-25 fs-4"> posts</button></Link>
                    </div>

                </section>
            </div>
        </>
    )
}

export default HomePage;