import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HighMenu from '../../components/HighMenu'
import { useEffect } from 'react'
import KatexBlock from '../../components/KatexBlock'
import '@/assets/css/LearnPage.css'

export default function(){

    useEffect(()=>{
        document.querySelector('title').innerText += '|函数'
    }, [])

    return (
        <>
            <Navbar />
            <div className='w-full px-20'>
                <HighMenu current={1} />
                <div className='title'>
                    函数
                </div>
                <div className='paragraph'>
                    函数的定义有很多种解释，我们只关注函数的本质，函数接受和输出值，将接受的变量和值进行不同的运算变为输出的值
                </div>
                <div className='paragraph'>
                    我们叫接受的值为<span className='strong'>自变量</span>，输出的值为<span className='strong'>因变量</span>
                </div>
                <div className='paragraph'>
                    对于函数命名，我们通常会用英文小写字母和希腊字母命名，例如
                </div>
                <KatexBlock tex={String.raw`y=f(x)`}/>
                <div className='subtitle'>
                    定义域
                </div>
                <div className='paragraph'>
                    定义域指的是函数自变量可以取得值的集合，我们通常会用<KatexBlock tex={String.raw`D_f`} displayMode={false}/>代表定义域
                </div>
                <div className='subtitle'>
                    值域
                </div>
                <div className='paragraph'>
                    值域指的是函数值的范围，我们通常会用<KatexBlock tex={String.raw`R_f`} displayMode={false}/>代表值域
                </div>
                <div className='title'>
                    反函数
                </div>
                <div className='paragraph'>
                    一个函数<KatexBlock tex={String.raw`y=f(x)`} displayMode={false}/>，当我们输入x值会的到y值，如果我们已知y值，想得出x值，就要用到这个函数的反函数
                </div>
                <div className='paragraph'>
                    函数的反函数一般写作<KatexBlock tex={String.raw`f^{-1}`} displayMode={false}/>
                </div>
            </div>
            <Footer />
        </>
    )
}