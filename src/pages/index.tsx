import MainSection from '../components/MainSection'
import Layout from '../components/Layout'
import CreateNote from '../components/CreateNote'
import NoteTable from '../components/NoteTable'
import Note from '../core/Note'

export default function Home() {

  const array = [
    new Note('Note number 1', 'This is the note number 1', 1),
    new Note('Note number 2', 'This is the note number 2', 2),
    new Note('Note number 3', 'This is the note number 3', 3),
    new Note('Note number 4', 'This is the note number 4', 4),
    new Note('Note number 5', 'This is the note number 5', 5),
    new Note('Note number 6', 'This is the note number 6', 6),
  ]

  function editNote(note: Note){
    console.log(note.title)
  }

  function deleteNote(note: Note){
    console.log(note.content)
  }

  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout title='Notepadder'>
        <MainSection>
          <CreateNote>+</CreateNote>
          <NoteTable notes={array} selectedNote={editNote} deletedNote={deleteNote}></NoteTable>
        </MainSection>
      </Layout>
    </div>
  )
}
