class NoteService {
  static async getAllNote() {
    return [{ title: "Buy Raw Chicken", status: true, amount: 2, price: 300000 }]
  }
}

export { NoteService }