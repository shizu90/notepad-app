import BodyTitle from "./BodyTitle";

interface CreateNoteProps{
    children: string
}

export default function CreateNote(props: CreateNoteProps){

    return (
        <div className={`flex justify-center items-center`}>
            <div>
                <div className={`
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                    w-44
                    h-44
                    text-center
                    rounded-md
                    cursor-pointer
                    text-white
                    hover:text-fuchsia-200
                `}>
                    <p className={`
                        text-9xl
                        text-center
                        mt-2
                        
                    `}>
                        {props.children}
                    </p>
                </div>
                <BodyTitle>Create a note</BodyTitle>
            </div>
        </div>
    )
}