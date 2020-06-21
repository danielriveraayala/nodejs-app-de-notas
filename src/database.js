const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

//const MONGODB_URI = `mongodb://localhost/note_app`;
const MONGODB_URI = 'mongodb+srv://notas_app:zdPino8UwE4FPqPZ@cluster0-qknyu.mongodb.net/note_app?retryWrites=true&w=majority';
//zdPino8UwE4FPqPZ
//notas_app
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error("Error: "+err));
