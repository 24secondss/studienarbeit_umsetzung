const express = require("express")
const app = express()
const cors = require("cors")

const mariadb = require("mariadb");

/**
 * Uses predefined SQL-statement to query database (GET)
 * uses predefined SQL-statement, sends http-response
 */
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

/**
 * Uses predefined SQL-statement to query database (POST)
 * uses predefined SQL-statement, sends http-response
 */
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

/**
 * Defines Frontendhsoting
 */
app.use(express.static('/backend/dist/'));

/**
 * Using Cors for secure communication
 */
app.use(cors());

/**
 * Using express.json for parsing request-body
 */
app.use(express.json());

/**
 * Receives get requests and creates an select SQL-statement
 * uses incoming http-request and response
 */
app.get('/api/:username', function(req, res) {
  let sqlQueryStatement = `SELECT * FROM users WHERE username = '${req.params.username}';`; 
  console.log(sqlQueryStatement)
  queryDatabase_GET(sqlQueryStatement, res);
});

/**
 * Receives post requests and creates an input SQL-statement
 * uses incoming http-request and response
 */
app.post('/api/', function(req, res) {
  console.log(req.body)
  let sqlQueryStatement = `INSERT INTO users VALUES ('${req.body.username}', '${req.body.password}', '${req.body.authAppSecret}', ${req.body.active2FA});`; 
  queryDatabase_POST(sqlQueryStatement, res);
});

/**
 * Opens Backend on Port 3000 for usage
 */
app.listen(3000, () => {
  console.log("App listening on port 3000");
});