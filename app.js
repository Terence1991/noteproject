console.log("Starting app")

const fs = require("fs");
const notes = require("./notes.js")
const _ = require("lodash")
const yargs = require('yargs')

const argv = yargs.argv;
const command = process.argv[2]
console.log("command:" , command)
console.log("process:", process.argv)
console.log("this is yargs", argv)

if(command === 'add') {
  console.log("adding new note")
  const note = notes.addNote(argv.title,argv.body)
  if (note) {
    console.log("note created")
    console.log("---------")
    console.log("title:" , note.title)
    console.log("Body:" , note.body)
  } else {
    console.log("note title taken")
  }
} else if (command === 'list') {
  console.log("listting alll notes")
  notes.getAll()
} else  if (command === 'read'){
  console.log("reading note")
  notes.read(argv.title)
} else if (command === 'delete') {
  console.log(' deleteing note')
  const noteRemoved = notes.deleteNote(argv.title)
  var message = noteRemoved ? "note was remeoved" : " note not found"
  console.log(message);
} else {
  console.log("invalid command")
}
