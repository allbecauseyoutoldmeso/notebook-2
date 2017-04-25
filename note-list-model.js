(function(exports) {

  function NoteList() {

  }

  NoteList.prototype.addNote = function(string) {
    this._noteArray.push(note = new Note(string));
  }

  NoteList.prototype.printNote = function() {
    return this._noteArray;
  }

  exports.NoteList = NoteList;
})(this);