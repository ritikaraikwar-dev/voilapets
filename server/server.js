const express = require('express');
const PORT = 4000;
const dbConnect = require('./config/dbConnect');
const route = require('./routes/route')
const app = express();
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
 
app.use(session({
  secret: 'voilapets@1234',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/voilapets' }),
  cookie: { secure: false }
})) 

app.get('/', (req, res) => {
  console.log('Current session ID:', req.sessionID);
  res.send('Session ID is ' + req.sessionID);
});

 
dbConnect();

app.use(express.json());
app.use(cors(
    {
         origin: 'http://localhost:3000',
  credentials: true,
    }
));

app.use('/voilapets',route);


app.listen(PORT,()=>{
    console.log("server start");
});

app.get('/',(req,res)=>{
    res.send("hello how ae you");
});