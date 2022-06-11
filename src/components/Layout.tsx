import Title from '../components/Title'

interface LayoutProps{
    title: string
    children: any
}

export default function Layout(props: LayoutProps){

    return (
        <div className={`
            mt-9 mb-9
            flex flex-col w-2/3
            bg-white rounded-md
        `}>
            <Title>{props.title}</Title>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
    )
}