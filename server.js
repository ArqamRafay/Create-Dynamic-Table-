const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// const db = require("./app/models");
// // db.sequelize.sync();
// db.sequelize.sync().then(() => {
//     console.log("All models were synchronized successfully.");
//     console.log("Drop and re-sync db.");
// }, { logging: false });

var corsOptions = { origin: "http://localhost:8081" };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// cALL FROM POST MEN
// {"Table Name1": ["tblUser", {"ColumnName1":"userId", "ColumnDataType": "string"},{"ColumnName2":"userId", "ColumnDataType": "string"}],

// "Table Name2": "tbluser2"
//  }
// Generating a Token
app.post('/createTable', (req, res) => {
    // console.log(req.body['Table Name1'])
    // console.log("Table Name")
    // console.log(req.body['Table Name1'][0])  // Table Name
    // console.log("COlumn Name")
    // console.log(req.body['Table Name1'][1]) // Table column name 1 and data type
    // console.log(req.body['Table Name1'][2])

    const TableName = req.body['Table Name1'][0]
    let ColumnName = []
    for (let index = 1; index < req.body['Table Name1'].length; index++) {
        ColumnName.push(req.body['Table Name1'][index])
        // console.log(req.body['Table Name1'][index])
    }
    console.log(ColumnName)

    return res.status(200).json({ "token": "Result" });
})


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});