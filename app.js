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
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/vendor', require('./routes/vendor'));
app.use('/admin', require('./routes/admin'));
app.use('/chat', require('./routes/chat'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));