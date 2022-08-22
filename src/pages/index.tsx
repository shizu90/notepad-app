import MainSection from '../components/MainSection'
import Layout from '../components/Layout'
import CreateNote from '../components/CreateNote'
import NoteTable from '../components/NoteTable'
import NoteForm from '../components/NoteForm'
import useNotes from '../hooks/useNotes'

export default function Home() {
  const {
    editNote, 
    deleteNote, 
    note, 
    notes, 
    newNote, 
    saveNote, 
    mainShowed, 
    showMain
  } = useNotes()

  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <head>
        <title>Notepadder</title>
      </head>
      <Layout title='Notepadder'>
        {mainShowed ? (
          <MainSection>
            <CreateNote onClick={newNote}>+</CreateNote>
            <NoteTable notes={notes} selectedNote={editNote} deletedNote={deleteNote}></NoteTable>
          </MainSection>
        ) : (
          <NoteForm note={note} cancelled={showMain} noteChanged={saveNote}></NoteForm>
        )}
      </Layout>
    </div>
  )
}
