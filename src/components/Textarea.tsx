interface TextAreaProps{
    title: string 
    value: any
    change?: (value: any) => void
}

export default function TextArea(props: TextAreaProps){
    return (
        <div className="flex flex-col">
            <label className={`py-2 text-xl font-bold`}>{props.title}</label>
            <textarea 
            value={props.value}
            onChange={e => props.change?.(e.target.value)}
            className={`
                resize-none
                border-2 border-purple-600
                rounded-md
                focus:outline-none
                bg-gray-100
                h-80
            `}></textarea>
        </div>
    )
}