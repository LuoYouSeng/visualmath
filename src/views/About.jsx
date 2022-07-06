import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function(){
    useEffect(()=>{
        document.querySelector('title').innerText += '|关于'
    }, [])
    return (
        <>
            <Navbar />
            123
            <Footer />
        </>
    )
}