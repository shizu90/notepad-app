interface ButtonProps{
    text: string
    color?: 'green' | 'blue' | 'red' | 'purple'
    onClick?: () => void 
}

export default function Button(props: ButtonProps){
    const color = props.color ?? 'blue'

    return (
        <button 
        className={`
            text-xl
            text-white
            rounded-md
            bg-gradient-to-r
            from-${color}-400
            to-${color}-700           
            p-2
            mr-2
        `}
        onClick={props.onClick}>{props.text}</button>
    )
}