import Navbar from '@/components/Navbar'
import { useEffect } from 'react'

export default function(){
    useEffect(()=>{
        document.querySelector('title').innerText += '|404'
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className='text-9xl tracking-widest text-center italic'>
                404
            </div>
            <div className='text-4xl text-center'>
                看来你走错路了哦
            </div>
            <div className='text-2xl text-center mt-4'>
                <a href="/" className='border-b-4 border-b-rose-600'>点我回首页</a>
            </div>
        </>
    )
}