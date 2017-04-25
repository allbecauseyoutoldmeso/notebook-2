(function(exports) {

  function ListView(noteList) {
    this._noteList = noteList
  }

  ListView.prototype.list = function() {
    string = '<ul>'
    this._noteList.printNote().forEach(function(note) {
    string = (string + "<li><div>note: " + note.showText() + "</div></li>")
    })
    return string + '</ul>'
  }

  exports.ListView = ListView;
})(this);
