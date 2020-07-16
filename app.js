const express = require('express'); 
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

// Express
const app = express();

// cors middleware
app.use(cors()); 
app.use(express.json());

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs'); 

// Bodyparser
app.use(express.urlencoded({ extended: false}));

// Static content
app.use( express.static( __dirname + "/public" ) );

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));