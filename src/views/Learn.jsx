import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import Card from '../components/Card'

export default function(){
    useEffect(()=>{
        document.querySelector('title').innerText += '|学习'
    }, [])
    return (
        <>
            <Navbar />
            <div className='px-52'>
                <Card title="高中" text="包括初等函数、平面向量基础、基础数列、基础几何等" link="/high/set"></Card>
                <Card title="大学" text="包括高等数学、线性代数、复变函数及其应用" link="/university/limit"></Card>
                <Card title="应用" text="从其他科目中寻找数学的身影" link="/practice/"></Card>
            </div>
            <Footer />
        </>
    )
}