const express = require('express');
const path = require('path');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes  = require("./routes/htmlRoutes");

const PORT = process.env.port || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'Develop', 'public')));


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () =>{
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
