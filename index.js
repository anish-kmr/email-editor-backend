const express = require("express");
const cors = require("cors");
const db = require('./db');
const bodyParser = require("body-parser");
const templateRoutes = require('./routes/template.routes')
const authRoutes = require('./routes/auth.routes')
const { main } = require('./routes/routes.json');



const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(cors());


//routes
app.use(main.template,templateRoutes)
app.use(main.auth,authRoutes)

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log("Server started at port ", PORT);
});
