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
  notes.addNote(argv.title,argv.body)
} else if (command === 'list') {
  console.log("listting alll notes")
} else  if (command === 'read'){
  console.log(" reading note")
} else if (command === 'delete') {
  console.log(' deleteing note')
} else {
  console.log("invalid command")
}
