import Input from './Input'
import TextArea from './Textarea'
import Button from './Button'
import Note from '../core/Note'
import {useState} from 'react'

interface NoteFormProps{
    note?: Note
    noteChanged?: (note: Note) => void
    cancelled?: () => void
}

export default function NoteForm(props: NoteFormProps){
    const id = props.note?.id
    const [title, setTitle] = useState(props.note?.title ?? 'Untitled')
    const [content, setContent] = useState(props.note?.content ?? 'No content')
    return (
        <div>
            <Input title='Title' value={title} inputType = "input" change={setTitle}></Input>
            <TextArea title='Content' value={content} change={setContent}></TextArea>
            <div className={`
                flex
                justify-end
                mt-6
            `}>    
                <Button text='Cancel' onClick={props.cancelled}></Button>
                <Button text='Submit' color='green' onClick={() => props.noteChanged?.(new Note(title, content, id))}></Button>
            </div>
        </div>
    )
}