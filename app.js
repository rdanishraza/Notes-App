const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.0.0')

//add, remove, read, list the command
//add the note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true
        },
        body: {
            describe: 'adding note!',
            demandOption:true
        }
    },
    handler : function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove a note
yargs.command({
    'command' : 'remove',
    'description' : 'remove a note',
    handler : function(){
        console.log('removing a note!')
    }
})
//read a note
yargs.command({
    'command' : 'read',
    'description' : 'read a note',
    handler : function(){
        console.log('reading a note!')
    }
})

// listing a note
yargs.command({
    'command' : 'list',
    'description' : 'list a note',
    handler : function(){
        console.log('listing a note!')
    }
})
console.log(yargs.argv)

