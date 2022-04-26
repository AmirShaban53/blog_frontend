import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        const handleStart = url => (url !== router.asPath) && setLoading(true);
        const handleComplete = url => (url !== router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('hashChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    }, [router])
    return(
        loading && <div className='loader'>
            <Image src="/loading.gif" alt="" width='100' height='100'  />
            <p>loading...</p>
        </div>
    )
}

export default Loader;