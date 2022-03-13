const mongoose = require('mongoose');

async function connect() {

   try {
      await mongoose.connect('mongodb+srv://mohit1904:orkut123@todo-tdd.kadqx.mongodb.net/todo-tdd?retryWrites=true&w=majority', 
      {
         useNewUrlParser: true
      })
   } catch (error) {
      console.error("Error connecting to mongodb");
      console.error(error);
   }
   
} 

module.exports = { connect };