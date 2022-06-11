import Note from "../../core/Note";
import NoteDatabase from "../../core/noteDb";
import firebase from "../config";

export default class NoteCollection implements NoteDatabase {
    
    #converter = {
        toFirestore(note: Note) {
            return {
                title: note.title,
                content: note.content,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Note {
            const data = snapshot.data(options)
            return new Note(data.title, data.content, snapshot.id)
        }
    }
    
    async save(note: Note): Promise<Note>{
        if(note?.id){
            await this.collection().doc(note.id).set(note)
            return note
        }else{
            const docRef = await this.collection().add(note)
            const doc = await docRef.get()
            return doc.data()
        }
    }
    async delete(note: Note): Promise<void>{
        return this.collection().doc(note.id).delete()
    }
    async getAll(): Promise<Note[]>{
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }
    
    private collection() {
        return firebase.firestore().collection('notes').withConverter(this.#converter)
    }
}