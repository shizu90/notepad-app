export default function BodyTitle(props){
    return (
        <h1 className={`
            text-center
            text-2xl
            font-bold
        `}>
            {props.children}
        </h1>
    )
}