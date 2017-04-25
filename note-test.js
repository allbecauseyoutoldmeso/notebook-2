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
    assert.toEqual(viewList.list(), '<ul><li><div>note: Hello</div></li></ul>')
  };

  function testNewNoteController() {
    function NoteListDouble() {};
    var noteList = new NoteListDouble();
    var noteController = new NoteController(noteList);
    assert.toEqual(noteController.noteList, noteList);
  };

  // function testWriteHtml() {
  //   function NoteListDouble() {};
  //   function ListViewDouble() {};
  //   ListViewDouble.prototype = {
  //     list: '<ul><li><div>note: Hello</div></li></ul>'
  //
  //   };
  //   var noteList = new NoteListDouble();
  //   var noteListView = new ListViewDouble();
  //   var noteController = new NoteController(noteList)
  //   assert.toEqual(noteController.noteListView.list, '<ul><li><div>note: Hello</div></li></ul>')
  // };

  // testWriteHtml();
  testNewNoteController();
  testViewList();
  testShowText();
  testPrintNote();
  testNote();
  testAddNote();
})(this);
