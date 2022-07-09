import katex from 'katex'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function({tex, className, displayMode, fleqn}){
    
    const block = useRef()

    useEffect(()=>{
        katex.render(tex, block.current, {
            displayMode: displayMode == undefined ? true : displayMode,
            fleqn: fleqn == undefined ? false : fleqn,
            strict: false
        })
    }, [tex])

    return (
        <>
            {displayMode ?
                <div className={`py-2 text-2xl ${className}`} ref={block}></div>
                :
                <span className={`text-2xl ${className == undefined ? '' : className}`} ref={block}></span>
            }
        </>
    )
}