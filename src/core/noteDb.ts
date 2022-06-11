import Note from './Note'

export default interface NoteDatabase {
    save(note: Note): Promise<Note>
    delete(note: Note): Promise<void>
    getAll(): Promise<Note[]>
}