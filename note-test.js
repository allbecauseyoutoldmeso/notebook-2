var assert = {
  toEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error('Error, expected' + expected + 'got' + actual);
    } else {
      console.log('yay! your test passed')
    }
  }
};

var check = {
  toInclude: function(container, contained) {
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else {
      throw new Error("Unlucky! " + container + " did not contain " + contained);
    }
  }
};

(function(exports) {

  function testNote() {
    var noteList = new NoteList();
    assert.toEqual(noteList._noteArray.length, 0)
  };

  function testAddNote(){
    var noteList = new NoteList();
    noteList.addNote("Hello");
    assert.toEqual(noteList._noteArray.length, 1)
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
    assert.toEqual(noteController._noteList, noteList);
  };

  function testWriteHtml() {
    var noteController = new NoteController(noteList)
    noteController.addNotes('Bananas')
    noteController.writeHtml()
    assert.toEqual(document.getElementsByClassName('app')[0].innerHTML, '<ul><li><div>note: Bananas</div></li></ul>')
  };

  // testWriteHtml();
  testNewNoteController();
  testViewList();
  testShowText();
  testPrintNote();
  testNote();
  testAddNote();
})(this);
