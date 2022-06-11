interface InputProps{
    title: string
    inputType?: 'input' | 'textarea'
    value: any
    readOnly?: boolean
    change?: (value: any) => void
}

export default function Input(props: InputProps){
    
    return (
        <div className={`flex flex-col`}>
            <label className={`py-2 text-xl font-bold`}>{props.title}</label>
            <input 
                type={props.inputType ?? "text"}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.change?.(e.target.value)}
                
                className={`
                    border-2 border-purple-600
                    rounded-md
                    p-2
                    focus:outline-none
                    bg-gray-100
                `}
            >
            </input>
        </div>
    )
}