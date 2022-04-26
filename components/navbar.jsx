import Link from 'next/link';
import classes from '../styles/navbar.module.css';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';


const Navbar = () => {
    const [darkNav, setDarkNav] = useState(false);
    const router = useRouter();
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
                if(window.scrollY > 100){setDarkNav(true);}
                else{setDarkNav(false);}
        })
        
        return () => {
            window.removeEventListener('scroll', ()=>{console.log('done')})
        };
    }, []);
    return (
        <nav className={`navbar navbar-expand-md navbar-dark ${darkNav ?  'bg-dark' : classes.blur} position-fixed top-0 w-100`}>
            <div className="container">
                <Link Link href='/'  className="navbar-brand"><a className='nav-item text-light fw-bolder fs-2'>NAOMI</a></Link>
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
                    <ul className="navbar-nav ms-auto text-center  px-3 fs-5">
                        <li className="nav-item m-2"><Link href='/' ><a className="nav-link text-light">home</a></Link></li>
                        <li className="nav-item m-2"><Link href='/posts' ><a className="nav-link">posts</a></Link></li>
                        <li className="nav-item m-2"><Link href='/about' ><a className="nav-link">about</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;