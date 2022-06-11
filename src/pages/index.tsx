import MainSection from '../components/MainSection'
import Layout from '../components/Layout'
import CreateNote from '../components/CreateNote'
import NoteTable from '../components/NoteTable'
import Note from '../core/Note'
import NoteForm from '../components/NoteForm'
import { useEffect, useState } from 'react'
import NoteCollection from '../server/database/noteCollection'


export default function Home() {
  const repo: NoteCollection = new NoteCollection()

  const [show, setShow] = useState<'main' | 'form'>('main')
  const [notes, setNotes] = useState<Note[]>([])
  const [note, setNote] = useState<Note>(Note.empty())

  useEffect(() => {
    getAllNotes()
  }, [])

  function getAllNotes() {
    repo.getAll().then((notes) => {
      setNotes(notes)
      setShow('main')
    })
  }

  function editNote(note: Note){
    setNote(note)
    setShow('form')
  }

  async function deleteNote(note: Note){
    await repo.delete(note)
    getAllNotes()
  }

  function newNote(){
    setNote(Note.empty())
    setShow('form')
  }

  async function saveNote(note: Note){
    await repo.save(note)
    getAllNotes()
  }
  //<MainSection>
  //<CreateNote>+</CreateNote>
  //<NoteTable notes={array} selectedNote={editNote} deletedNote={deleteNote}></NoteTable>
  //</MainSection>
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout title='Notepadder'>
        {show === 'main' ? (
          <MainSection>
            <CreateNote onClick={newNote}>+</CreateNote>
            <NoteTable notes={notes} selectedNote={editNote} deletedNote={deleteNote}></NoteTable>
          </MainSection>
        ) : (
          <NoteForm note={note} cancelled={() => setShow('main')} noteChanged={saveNote}></NoteForm>
        )}
      </Layout>
    </div>
  )
}
