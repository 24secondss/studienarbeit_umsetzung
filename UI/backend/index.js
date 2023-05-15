const express = require("express")
const app = express()
const cors = require("cors")

const mariadb = require("mariadb");

async function queryDatabase_GET(statement, response) {
  try {
    console.log("Beginn Connection");
    mariadb.createConnection({
      host: "mariaDB",
      port: "3306", 
      user: "root", 
      password: "root",
      database: "userDB"
    })
    .then(conn => {
      console.log("connected ! connection id is " + conn.threadId);
      console.log("Started Query with: " + statement);
      conn.query(statement)
      .then(res => {
        console.log("Query Result");
        console.log(res);
        response.send({
          status: 200,
          "queryResult": res,
          message: "Query completed"
        })
      })
      .catch(err => {
        console.log("Query failed due to error:" + err);
      });
    })
    .catch(err => {
      console.log("not connected due to error: " + err);
    });
  } catch (err) {
    throw(err);
  } 
}

async function queryDatabase_POST(statement, response) {
  try {
    console.log("Beginn Connection");
    mariadb.createConnection({
      host: "mariaDB",
      port: "3306", 
      user: "root", 
      password: "root",
      database: "userDB"
    })
    .then(conn => {
      console.log("connected ! connection id is " + conn.threadId);
      console.log("Started Query with: " + statement);
      conn.query(statement)
      .then(res => {
        console.log("Query Result");
        console.log(res);
        response.send({
          status: 200,
          // "test": {res},               ==> Query failed due to error:TypeError: Do not know how to serialize a BigInt
          message: "Query completed"
        })
      })
      .catch(err => {
        console.log("Query failed due to error:" + err);
      });
    })
    .catch(err => {
      console.log("not connected due to error: " + err);
    });
  } catch (err) {
    throw(err);
  } 
}

app.use(express.static('/backend/dist/'));
app.use(cors());
app.use(express.json());

app.get('/:username', function(req, res) {
  let sqlQueryStatement = `SELECT * FROM users WHERE username = '${req.params.username}';`; 
  console.log(sqlQueryStatement)
  queryDatabase_GET(sqlQueryStatement, res);
});

app.post('/', function(req, res) {
  console.log(req.body)
  let sqlQueryStatement = `INSERT INTO users VALUES ('${req.body.username}', '${req.body.password}', '${req.body.authAppSecret}', ${req.body.active2FA});`; 
  queryDatabase_POST(sqlQueryStatement, res);
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});