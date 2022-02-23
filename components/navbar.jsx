import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark position-fixed top-0 w-100'>
            <div className="container">
                <Link Link href='/'  className="navbar-brand"><a className='nav-item fw-bolder text-light fs-2'>HELLO</a></Link>
                <label 
                    type='button'
                    className='navbar-toggler'
                    data-bs-toggle='collapse'
                    data-bs-target='#mobileNav'
                    aria-controls='mobileNav'
                    aria-expanded='false'
                    aria-label='toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </label>
                <div className="collapse navbar-collapse" id="mobileNav">
                    <ul className="navbar-nav ms-auto text-center px-3 fs-5">
                        <li className="nav-item m-2"><Link href='/' ><a className="nav-link">home</a></Link></li>
                        <li className="nav-item m-2"><Link href='/posts' ><a className="nav-link">posts</a></Link></li>
                        <li className="nav-item m-2"><Link href='/about' ><a className="nav-link">about</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;