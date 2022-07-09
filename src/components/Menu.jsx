import { useState } from "react"
import '@/assets/css/Menu.css'

export default function({items, current}){
    let [isOpen, toggleOpen] = useState(false)
    
    function handleClick(){
        toggleOpen(!isOpen)
    }

    return (
        <div className="w-full mt-2">
            <div className="border border-slate-300 bg-white px-10 py-2 flex justify-between items-center" onClick={handleClick}>
                <span className="text-2xl font-medium">菜单</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`
                    h-5 w-5 transform transition-all
                    ${!isOpen ? '-rotate-180' : 'rotate-0'}
                `} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <div className={`
                    bg-white border border-t-0 border-slate-300 overflow-hidden
                    ${isOpen ? 'open-animation' : 'max-h-0 border-b-0'}
                `}
            >
                {items.map((item, index)=>{
                    return (
                        <a className={`
                            w-full text-2xl px-10 py-2 border-t from-rose-600 to-yellow-500 inline-block
                            ${index == current ? 'bg-gradient-to-r text-white' : 'hover:bg-slate-100'}
                        `} href={item.link}>
                            {item.text}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}