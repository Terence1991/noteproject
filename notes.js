console.log('starting notes.js')
const fs = require('fs')

const addNote = (title, body) => {
 let notes = []
 const note = {
   title: title,
   body, body
 }  

 try {
  const notesString = fs.readFileSync('notes-data.json')
  notes = JSON.parse(notesString);
 } catch (e) {

 }
 
 const  duplicateNotes = notes.filter((note) => {
    return note.title === title
 })
if(duplicateNotes.length === 0) {
  notes.push(note)
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
 
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