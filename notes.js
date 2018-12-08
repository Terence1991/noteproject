console.log('starting notes.js')
const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
   } catch (e) {
   return []
   }
}

const saveNotes = (notes) => {
fs.writeFileSync('notes-data.json', JSON.stringify(notes))


}

const addNote = (title, body) => {
 let notes = fetchNotes()
 const note = {
   title: title,
   body, body
 }  

 
 
 const  duplicateNotes = notes.filter((note) => {
    return note.title === title
 })
if(duplicateNotes.length === 0) {
  notes.push(note)
  saveNotes(notes)
  return note
}
 
}

const getAll = (title, body) => {
  return fetchNotes();
}

const read = (title, body) => {
  var notes = fetchNotes()
  const  filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]

}

const deleteNote = (title) => {
  console.log("delelting notes", title)
  const notes = fetchNotes();
  ///
  const  filteredNotes = notes.filter((note) =>  note.title !== title)
    saveNotes(filteredNotes)
    
  return notes.length !== filteredNotes.length 
}

const logNote = (note) => {
  console.log("--------")
  console.log(`title: ${note.title}`)
  console.log(`body'; ${note.body}`)
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  read: read,
  deleteNote: deleteNote,
  logNote: logNote
}