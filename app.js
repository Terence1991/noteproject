console.log("Starting app")

const fs = require("fs");
const notes = require("./notes.js")
const _ = require("lodash")
const yargs = require('yargs')
const title  = { describe: 'title of note', demmand: true, alias: "t"}
const body = { describe: "content of body", demmand: true, allias: "q" }

const argv = yargs
.command('add', 'add a new note', {
title: title,
body: body,
})
.command("read", "reading all notes", {})
.command("list", "listing all notes", {
  title: title,
})
.command("delete", "remove note", {
  title: title

})
.help()
.argv;
const command = process.argv[2]
console.log("command:" , command)
console.log("process:", process.argv)
console.log("this is yargs", argv)

if(command === 'add') {
  console.log("adding new note")
  const note = notes.addNote(argv.title,argv.body)
  if (note) {
    console.log("note created")
    notes.logNote(note)
    // console.log("---------")
    // console.log("title:" , note.title)
    // console.log("Body:" , note.body)
  } else {
    console.log("note title taken")
  }
} else if (command === 'list') {
  const allNotes = notes.getAll()
  console.log(allNotes)
  console.log(`printing all notes ${allNotes.length}`)
  allNotes.forEach((note) => notes.logNote(note))
  notes.getAll()
} else  if (command === 'read'){
  console.log("reading note")
  const note = notes.read(argv.title)
  if (note) {
    console.log("note read")
    notes.logNote(notes)
    // console.log("--------")
    // console.log(`title: ${note.title}`)
    // console.log(`body'; ${note.body}`)
  } else {
  console.log('Note not found');
  }
} else if (command === 'delete') {
  console.log(' deleteing note')
  const noteRemoved = notes.deleteNote(argv.title)
  var message = noteRemoved ? "note was remeoved" : " note not found"
  console.log(message);
} else {
  console.log("invalid command")
}
