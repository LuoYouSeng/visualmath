export default function({title, text, link}){
    return (
        <div className="p-0.5 pr-3 my-10 bg-gradient-to-r from-rose-600 to-yellow-500 cursor-pointer transition-all hover:pb-3"
            onClick={()=>{
                location.href = link
            }}
        >
            <div className="bg-white p-10">
                <div className="text-4xl font-medium">
                    {title}
                </div>
                <div className="text-2xl mt-4">
                    {text}
                </div>
            </div>
        </div>
    )
}