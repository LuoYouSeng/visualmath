import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HighMenu from '../../components/HighMenu'
import camera from '@/assets/image/camera.svg'
import key from '@/assets/image/key.svg'
import calculator from '@/assets/image/calculator.svg'
import device_phone from '@/assets/image/device_phone.svg'
import { useEffect } from 'react'

export default function(){

    useEffect(()=>{
        document.querySelector('title').innerText += '|函数'
    }, [])

    return (
        <>
            <Navbar />
            <div className='w-full px-20'>
            <HighMenu current={1} />
            </div>
            <Footer />
        </>
    )
}