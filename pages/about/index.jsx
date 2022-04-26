import Head from 'next/head';
const AboutPage = () => {
    return (
        <>
            <Head>
                <title>NAOMI | ABOUT</title>
                <meta name="description" content="learn about Naomi Jessica herself, a photographer, writer and now a junior blogger. Read interesting stories about her and learn all sorts of new and fasinating things"/>
            </Head>
            <div className="container-fluid p-0 ">
                <div className="container mt-5 pt-5">
                    <section className="row my-5">
                        <div className="col text-center">
                            <div className="display-1 fw-bolder ">
                                <p>ABOUT <br /> <span className='fw-light'>me.</span></p>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col fs-3 text-center">
                            <p>hey, am Naomi Jessica a photographer and junior writer. Am so in love with story telling and that is why I started this blog to share my stories, travels and experiences</p>
                        </div>
                    </section>
                    <section className="row my-5 py-3">
                        <div className="col-6 mx-auto">
                            <img src="/layer16.jpg" alt="a woman 'naomi' self portrait" className='img-fluid w-100 rounded-circle shadow' />
                        </div>
                    </section>
                    <section className="row">
                        <div className="col fs-3 text-center">
                            <p>want to get the latest in fashion and photography, <br />
                            then you are in the right place.</p> 
                        </div>
                    </section>
                    <section className="row">
                        <div className="col fs-4 mt-5">
                            <p className="fw-bolder">contact</p>
                            <div className="mb3">
                                <p>tel:     +555 345 0745</p>
                                <p>email:   naomijessica10@hotmail.com</p>
                                <p>address: James Canray street, Kenya</p>
                            </div>
                        </div>
                    </section>
                </div>
                <img src="/layer18.png" alt="two women with flower crowns" width='100%'/>
            </div>
        </>
    )
}
export default AboutPage;