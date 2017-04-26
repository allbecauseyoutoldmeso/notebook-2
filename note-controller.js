
function changeText() {
  elem = document.getElementsByClassName('app')[0];
  elem.innerHTML = 'Goodbye';
}

(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
  }

  NoteController.prototype.addNotes = function(text) {
    this._noteList.addNote(text);
  };

  NoteController.prototype._makeView = function() {
    this._noteListView = new ListView(this._noteList);
  };

  NoteController.prototype._getHtml = function() {
    return document.getElementsByClassName('app')[0];
  }

  NoteController.prototype.writeHtml = function() {
    this._makeView()
    this._getHtml().innerHTML = this._noteListView.list();
  };

  exports.NoteController = NoteController;
})(this);
