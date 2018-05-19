const mongoose = require('mongoose');
const List = mongoose.model('lists');

module.exports = app => {

  //get all restaurants
  app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send({ message: 'Welcome' });
  });

  //get all restaurants
  app.get('/restaurants', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    List.find({})
    .then(response => {
      if(response){
        res.send(response);
      }else{
        res.send({ "error": "Nothing found" });
      }
    })
  });

  //get restaurants by category
  app.get('/restaurants/:c', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    List.find({ category: req.params.c })
    .then(response => {
      if(response){
        res.send(response);
      }else{
        res.send({ "error": "Nothing found" });
      }
    })
  });
}
