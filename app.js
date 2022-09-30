//express
const express=require('express');

//EJS
const expressLayout=require('express-ejs-layouts');

const app= express();

app.use(expressLayout);
app.set('view engine','ejs');


//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

const PORT=process.env.PORT ||5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
