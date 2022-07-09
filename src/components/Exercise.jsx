import { useEffect } from "react"
import { useState } from "react"
import KatexBlock from "./KatexBlock"

export default function({exercises}) {
    
    const [question, setQuestion] = useState(null)
    const [index, setIndex] = useState(0)
    const [select, setSelect] = useState(-1)
    const [confirm, setConfirm] = useState(false)
    const [buttonText, setButtonText] = useState('确定')

    useEffect(()=>{
        setQuestion(exercises.questions[index])
    }, [])

    const handleClick = ()=>{
        if(!confirm){
            if(index == exercises.questions.length - 1) {
                setButtonText('完成')
            }else{
                setButtonText('下一题')
            }
            setConfirm(true)
        }else if(index < exercises.questions.length - 1) {
            setButtonText('确定')
            setQuestion(exercises.questions[index + 1])
            setIndex(1 + index)
            setSelect(-1)
            setConfirm(false)
        }
    }

    return (
        <div className="bg-white p-5 border border-slate-300">
            {question != null &&
                <>
                    <div className="text-4xl">
                        <span className="mr-4">{index + 1}/{exercises.questions.length}</span>
                        <KatexBlock tex={question.title} displayMode={false} />
                    </div>
                    {
                        question.choices.map((choice, index)=>{
                            return (
                                <div
                                    className={`
                                        transition-all
                                        ${index == select ? 'pl-3' : ''}
                                        ${confirm ? (choice.answer ? 'bg-green-400' : 'bg-red-400') : 'bg-yellow-400'}
                                        ${choice.answer && select != index && confirm ? 'pl-3 bg-green-400' : ''}
                                    `}
                                    onClick={()=>{if(!confirm){setSelect(index)}}}
                                >
                                    <div className={`
                                        py-2 bg-white border my-4 text-2xl cursor-pointer transition-all
                                        ${index == select ? 'pl-3' : 'pl-6'}
                                    `}>
                                        <KatexBlock tex={choice.text} displayMode={false} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
            <button
                className={`
                    px-4 py-2 bg-gradient-to-r from-rose-500 to-yellow-500 text-white text-2xl
                `}
                onClick={handleClick}
            >
                {buttonText}
            </button>
        </div>
    )
}