const mongoose = require("mongoose");
const MONGO_DB_NAME = "heroku_vcj52z56";
const PROD_MONGO_URL = `mongodb://${MONGO_DB_NAME}:kelio373qnlk4inq00gf55l6i0@ds143039.mlab.com:43039/${MONGO_DB_NAME}`;

mongoose.connect(PROD_MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: MONGO_DB_NAME
});

mongoose.connection.on("open", err => {
  if (err) console.log("Error connecting to our mongo database");
  console.log("Connected to mongo database successfully");
});

module.exports = mongoose;
