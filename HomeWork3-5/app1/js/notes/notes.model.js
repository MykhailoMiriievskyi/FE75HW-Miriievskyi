class NotesModel {
  constructor() {}

  getNotes(cb) {
    // Make http call to the server;
    //Делаем запрос на сервер и если запрос 
    //успешен получаем ответ с сервера который
    //записывается в res. res передаем в колбек 
    //функцию
    $.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {
        cb(res);
      })
  }

  addNote(noteBody, cb) {
    // Make http call to the server to send new note;
    let newNote = {
      body: noteBody
    }

    $.post('https://jsonplaceholder.typicode.com/posts', newNote)
      .then(function(res) {
        cb(res);
      })
  }
}