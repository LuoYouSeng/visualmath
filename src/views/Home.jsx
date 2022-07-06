import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import jumbotron from '@/assets/image/jumbotron.png'
import { useEffect } from 'react'

export default function(){
    useEffect(()=>{
        document.querySelector('title').innerText += '|首页'
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className='md:px-20 transform'>
                <img src={jumbotron} alt="" />
                <div className='md:text-8xl mx-4 text-4xl font-medium transform -translate-y-10'>
                    <span className='md:mr-10'>通过图像、交互方式呈现数学内容</span>
                    <a href="/learn" className='bg-gradient-to-r text-transparent bg-clip-text from-rose-600 to-yellow-500 border-l-8 border-l-rose-600 font-bold group'>
                        前往
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-10 h-10 mb-1.5 md:w-32 md:h-32 md:mb-4 transition transform md:group-hover:translate-x-10" viewBox="0 0 20 20" fill="#facc15">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div className='flex flex-col md:flex-row mt-8 md:mt-24 md:space-x-10'>
                    <div className='md:w-1/2 break-words'>
                        <div className='text-4xl md:text-6xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-rose-600 to-yellow-500 border-l-8 border-l-rose-600'>
                            视觉化的意义
                        </div>
                        <p className='text-2xl md:text-4xl leading-loose mt-4'>
                            通过视觉化可以更好的理解不同的数学内容，也可以更好的将不同数学知识相连
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src="https://sdfsdf.dev/600x400.jpg" alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse mt-8 md:mt-24'>
                    <div className='md:w-1/2 break-words'>
                        <div className='text-4xl md:text-6xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-rose-600 to-yellow-500 border-l-8 border-l-rose-600'>
                            交互设计
                        </div>
                        <p className='text-2xl md:text-4xl leading-loose mt-4'>
                            自己调整参数，观察结果并总结规律，更有利于探索数学
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 mr-10'>
                        <img src="https://sdfsdf.dev/600x400.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='md:mt-24 w-full py-10 flex justify-center'>
                <a href="/learn" className='bg-gradient-to-r text-transparent bg-clip-text from-rose-600 to-yellow-500 text-6xl border-b-4 border-b-rose-600 group'>
                    开始学习
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-24 h-24 mb-2 transition transform group-hover:translate-x-10" viewBox="0 0 20 20" fill="#facc15">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <Footer/>
        </>
    )
}