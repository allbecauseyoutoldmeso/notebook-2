(function(exports) {

  function Note() {
    this._noteArray = [];
  }

  Note.prototype.addNote = function(string) {
    this._noteArray.push(string);
  }

  Note.prototype.printNote = function() {
    return this._noteArray;
  }

  exports.Note = Note;
})(this);