// Set up the express app
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const XLSX = require('xlsx');

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'build')))
// Handle React routing, return all requests to React app
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

});

const PORT = process.env.PORT || 5000;

app.get("/get-worksheet", (req, res) => {
    // read from a XLS file
    let workbook = XLSX.readFile('data.txt');

    // get first sheet
    let first_sheet_name = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[first_sheet_name];
    let range = XLSX.utils.decode_range(worksheet['!ref']); // get the range
    let response = [];
    for (var R = range.s.r; R <= range.e.r; ++R) {
        let x = 1;
        let obj = {}
        for (var C = range.s.c; C <= range.e.c; ++C) {
            let cellref = XLSX.utils.encode_cell({ c: C, r: R }); // construct A1 reference for cell
            if (!worksheet[cellref])
                continue; // if cell doesn't exist, move on
            let cell = worksheet[cellref];
            if (x == 1) {
                obj["sno"] = cell.w
                x++;
            }
            else if (x == 2) {
                obj["date"] = cell.w
                x++;
            }
            else {
                obj["weight"] = cell.w
                x = 1;
            }
        }
        if (Object.keys(obj).length !== 0)
            response.push(obj)
    };
    response.splice(0, 1)
    res.send({ "data": response });
})

app.post("/add-weight", (req, res) => {
    // read from a XLS file
    var wb = XLSX.utils.book_new();
    let workbook = XLSX.readFile('data.txt');
    let ws = XLSX.utils.sheet_add_aoa(workbook.Sheets[workbook.SheetNames[0]], [[req.body.sno, req.body.date, req.body.weight]], { origin: -1 });
    workbook.Sheets[workbook.SheetNames[0]] = ws;
    XLSX.writeFile(workbook, 'data.xlsx');
    res.send({ "message": "Data added successfully" });
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});