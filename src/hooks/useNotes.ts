import Note from "../core/Note"
import {useEffect, useState} from 'react'
import NoteCollection from "../server/database/noteCollection"
import useShow from "./useShow"

export default function useNotes() {
    const repo: NoteCollection = new NoteCollection()

    const {mainShowed, formShowed, showForm, showMain} = useShow()

    const [notes, setNotes] = useState<Note[]>([])
    const [note, setNote] = useState<Note>(Note.empty())

    useEffect(() => {
        getAllNotes()
    }, [])

    function getAllNotes() {
        repo.getAll().then((notes) => {
        setNotes(notes)
        showMain()
        })
    }

    function editNote(note: Note){
        setNote(note)
        showForm()
    }

    async function deleteNote(note: Note){
        await repo.delete(note)
        getAllNotes()
    }

    function newNote(){
        setNote(Note.empty())
        showForm()
    }

    async function saveNote(note: Note){
        await repo.save(note)
        showMain()
        getAllNotes()
    }

    return {
        note,
        notes,
        newNote,
        saveNote,
        deleteNote,
        getAllNotes,
        editNote,
        mainShowed,
        showMain
    }

}