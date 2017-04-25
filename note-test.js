// var note = require("./note-model").note;
var assert = {
  toEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error('Error, expected' + expected + 'got' + actual);
    } else {
      console.log('yay! your test passed')
    }
  }
};

(function(exports) {
  function testNote() {
    var note = new NoteList();
    assert.toEqual(note._noteArray.length, 0)
  };

  function testAddNote(){
    var noteList = new NoteList();
    noteList.addNote("Hello");
    assert.toEqual(noteList._noteArray[0].showText(), "Hello")
  };

  function testPrintNote() {
    var note = new NoteList();
    note.addNote("Hello");
    assert.toEqual(note.printNote()[0].showText(), "Hello")
  };

  function testShowText() {
    var note = new Note("Hello");
    assert.toEqual(note.showText(), "Hello")
  };

  function testViewList() {
    var noteList = new NoteList();
    noteList.addNote("Hello");
    var viewList = new ListView(noteList);
    if(viewList.list() === '<ul><li><div>note: Hello</div></li></ul>') {
      console.log('testViewList passes!')
    } else {
      throw new Error("testViewList did not pass.")
    }

  };

  testViewList();
  testShowText();
  testPrintNote();
  testNote();
  testAddNote();
})(this);
<<<<<<< HEAD



=======
>>>>>>> 1312bff2a49a1c4baf6761969836ef2fa097ddea
