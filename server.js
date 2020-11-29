const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

//The "sync" part means that this is Sequelize taking the models
// and connecting them to associated database tables. 
//If it doesn't find a table, it'll create it!
// if it were set to true, 
//it would drop and re-create all of the database tables on startup


