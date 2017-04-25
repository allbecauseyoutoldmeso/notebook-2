      var noteList = new NoteList();
      var noteController = new NoteController(noteList);

      noteController.addNotes('this is a note');
      noteController.makeView();
