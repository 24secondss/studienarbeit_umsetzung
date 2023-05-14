const express = require("express")
const app = express()
const cors = require("cors")

const mariadb = require("mariadb");

async function queryDatabase(statement, response) {
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
            response.json({
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

app.use(express.static('/backend/dist/'));
app.use(cors());

app.get('/:username', function(req, res) {
    let sqlQueryStatement = `SELECT * FROM users WHERE username = '${req.params.username}';`; 
    console.log(sqlQueryStatement)
    queryDatabase(sqlQueryStatement, res);
  });

app.listen(3000, () => {
    console.log("App listening on port 3000");
  });