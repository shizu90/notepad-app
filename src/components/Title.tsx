export default function Title(props) {
    return (
        <div>
            <h1 className={`text-xl 
                text-white 
                bg-slate-900 
                font-bold 
                rounded-t-md 
                pl-6
                pt-1
                pb-1`}>
                {props.children}
            </h1>
            <hr></hr>
        </div>
    )
}