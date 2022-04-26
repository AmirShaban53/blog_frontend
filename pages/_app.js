import { useEffect } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/navbar';
import Loader from '../components/loader';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])
  return (
    <>
      <Loader/>
      <Navbar/>
      <Component {...pageProps} />
      {/* <footer className='p-5 bg-dark'>
          <div className='text-center text-light'>this is the footer and that</div>
      </footer> */}
    </>
  )
}

export default MyApp
