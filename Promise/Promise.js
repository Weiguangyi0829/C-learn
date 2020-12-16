const fs = require('fs');

// fs.readFile('./resources/01.text', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

//Promise封装
const p = new Promise((resove, reject) => {
    fs.readFile('./resources/01.text', (err, data) => {
        if (err) reject(err);
        resove(data);
    });
})
p.then((value) => {
    console.log(value.toString());
}).catch((reason) => {
    console.log("01xx");
});