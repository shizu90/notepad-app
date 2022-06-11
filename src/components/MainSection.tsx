interface MainSectionProps {
    children: any
}

export default function MainSection(props: MainSectionProps) {

    return (
        <div className={`
            md:flex
            block
            justify-around
            mt-16
            mb-9
        `}>
            {props.children}
        </div>
    )
}