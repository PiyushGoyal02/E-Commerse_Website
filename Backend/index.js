require('dotenv').config();
const cors = require('cors')
const express = require("express")
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000

// CORS Options
const corsOptions = {
  origin: "http://localhost:3000", 
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Connect to Database
const database = require("./Config/DataBaseConnect");
database.DBConnect();

const authRoute = require("./Routes/AuthRoute")

app.use("/api/v1/signup", authRoute);
app.use("/api/v1/login", authRoute)
app.use("/api/v1/adminLogin", authRoute)


app.get('/', (req, res) => {
   res.send('Hello from the backend!');
});

app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});