import Note from "../core/Note";
import BodyTitle from './BodyTitle'
import {IconTrash, IconEdit} from './Icons'

interface NoteTableProps{
    notes: Note[]
    selectedNote?: (note: Note) => void
    deletedNote?: (note: Note) => void 
}

export default function NoteTable(props: NoteTableProps){

    function renderHeader() {
        return (
            <tr className={`
                text-xl
                text-white
            `}>
                <td className={`
                    border-r-2
                    text-left
                    w-80
                    font-bold
                    pl-2
                `}>Title</td>
                <td className={`
                    w-44
                    text-left
                    font-bold
                    pl-2
                `}>Id</td>
            </tr> 
        )
    }

    function renderNoteData(){
        return props.notes?.map(note => (
        <tr key = {note.id} className={`
            text-xl
            hover:bg-purple-200
            border-b-2
            border-purple-200
        `}>
            <td className={`
                pl-2
            `}>
                {note.title}
            </td>
            <td className={`
                pl-2
            `}>
                {note.id.slice(0,5)}
            </td>
            {renderAction(note)}
        </tr>))
    }

    function renderAction(note: Note){
        return (
            <td className={`flex`}>
                {props.selectedNote ? (
                    <button className={`text-green-200 hover:text-green-600`} onClick={() => props.selectedNote?.(note)}>{IconEdit}</button>
                ) : false}
                {props.deletedNote ? (
                    <button className={`text-red-200 hover:text-red-600`} onClick={() => props.deletedNote?.(note)}>{IconTrash}</button>  
                ) : false}
            </td>
        )
    }

    return (
        <div className={`mt-9 md:mt-0`}>
            <BodyTitle>Created notes</BodyTitle>
            <table className={`
                w-26
                ml-9
                mr-9
                md:w-96
                md:m-0
                text-black
            `}>
                <thead className={`
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                `}>
                    {renderHeader()}
                </thead>
                <tbody>
                    {renderNoteData()} 
                </tbody>  
            </table>
        </div>
    )
}