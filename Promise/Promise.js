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

//then方法的返回结果是Promise对象，对象状态有回调函数执行结果决定

p.then((value) => {
    console.log(value.toString());
}).catch((reason) => {
    console.log("01xx");
});