const fs = require('fs');

// fs.readFile('./resources/01.text', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

//Promise封装
const p = new Promise((res, rej) => {
    fs.readFile('./resources/01.text', (err, data) => {
        if (err) rej(err);
        res(data);
    });
})
p.then((value) => {
console.log(value.toString());
}, (reason) => {
console.log("01xx");
});