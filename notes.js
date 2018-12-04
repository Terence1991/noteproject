console.log('starting notes.js')

const addNote = (title, body) => {

  console.log("adding note", title, body)
}

const getAll = (title, body) => {
console.log("getting all notes",)
}

const read = (title, body) => {
  console.log("reading notes", title)
}

const deleteNote = (title, body) => {
  console.log("delelting notes", title)
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  read: read,
  deleteNote: deleteNote
}