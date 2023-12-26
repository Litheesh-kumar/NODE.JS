const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6583a58454c527fa1b182081')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
.connect('mongodb+srv://litheesh:litheesh@cluster1.brdyjhg.mongodb.net/shop?retryWrites=true&w=majority')
.then((result)=>{
  User.findOne()
  .then(user =>{
    if(!user){
      const user = new User({
        name: 'litheesh',
        email: 'kumarlitheesh8@gmail.com',
        cart: {
          items:[]
        }
      })
      user.save();
    }
    app.listen(3000);
  }) 
}) 
.catch(err =>{
  console.log(err);
}); 
