const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const PORT = 3005;
const cors = require("cors");

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://maks:CYhKcy9PaFiadDl3@cluster0.tpmrg.mongodb.net/myappdb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();
const dbConnection = mongoose.connection;
app.use(cors());

dbConnection.on("error", (err) => console.log(`con err${err}`));
dbConnection.once("open", () => {
  console.log("connected to db");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log("server started!");
});
