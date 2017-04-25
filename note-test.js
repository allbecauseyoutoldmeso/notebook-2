// var note = require("./note-model").note;
(function(exports) {
  function testNote() {
    var note = new Note();

    if (note._noteArray.length !== 0) {
      throw new Error("Notes array is not empty");
    } else {
      console.log("testNote passes!");
    }
  };

  function testAddNote(){
    var note = new Note();
    note.addNote("Hello");

    if (note._noteArray[note._noteArray.length-1] !== "Hello") {
      throw new Error("It does not add notes to the array");
    } else {
      console.log("testAddNote passes!");
    }
  };

  function testPrintNote() {
    var note = new Note();
    note.addNote("Hello");

    if (note.printNote().includes("Hello")) {
      console.log("testPrintNote passes!")
    } else {
      throw new Error("print note does not include the note")
    }
  };

  testPrintNote();
  testNote();
  testAddNote();
})(this);


