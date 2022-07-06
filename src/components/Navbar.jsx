import logo from '@/assets/image/logo.svg'
import '@/assets/css/Navbar.css'

export default function({className}){
    return (
        <div className={`
            w-full sticky top-0 z-10 pb-0.5 bg-gradient-to-r from-rose-600 to-yellow-500
            ${className}
        `}>
            <div className='w-full py-4 px-5 md:px-20 top-0 flex justify-between items-center bg-white z-10'>
                <div>
                    <div>
                        <a href="/" className='flex items-center space-x-4'>
                            <img className='w-12' src={logo} alt="" />
                            <span className='text-4xl border-b-4 border-b-rose-600'>视觉数学</span>
                        </a>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className='nav-item'>
                        <a href="/about">关于</a>
                    </div>
                </div>
            </div>
        </div>
    )
}