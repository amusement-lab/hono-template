import { type Note, type Notes } from './note.entity.ts'

const noteArray: Notes = [
  { id: '1', title: "Buy Raw Chicken", status: true, amount: 2, price: 300000 },
  { id: '2', title: "Buy Eggs", status: false, amount: 10, price: 50000 },
  { id: '3', title: "Buy Banana", status: true, amount: 1, price: 2 },
  { id: '4', title: "Buy Milk", status: false, amount: 5, price: 30000 },
]

class NoteService {
  static async getAllNote() {
    return noteArray
  }

  static async getNoteById(id: string) {
    const note = noteArray.find((note) => note.id === id)
    if (!note) throw new Error('Note not found')
    return note
  }

  static async createNote(note: Note) {
    const newNote = { ...note, id: Math.random().toString() }
    noteArray.push(newNote)
    return newNote
  }
}

export { NoteService }