// var note = require("./note-model").note;
(function(exports) {
  function testNote() {
    var note = new NoteList();

    if (note._noteArray.length !== 0) {
      throw new Error("Notes array is not empty");
    } else {
      console.log("testNote passes!");
    }
  };

  function testAddNote(){
    var noteList = new NoteList();
    noteList.addNote("Hello");

    if (noteList._noteArray[0].showText() !== "Hello") {
      throw new Error("It does not add notes to the array");
    } else {
      console.log("testAddNote passes!");
    }
  };

  function testPrintNote() {
    var note = new NoteList();
    note.addNote("Hello");

    if (note.printNote()[0].showText() === ("Hello")) {
      console.log("testPrintNote passes!")
    } else {
      throw new Error("print note does not include the note")
    }
  };

  function testShowText() {
    var note = new Note("Hello");

    if (note.showText() === "Hello") {
      console.log("testShowText passes!")
    } else {
      throw new Error("showText does not show the text of the note");
    }
  };

  testShowText();
  testPrintNote();
  testNote();
  testAddNote();
})(this);


