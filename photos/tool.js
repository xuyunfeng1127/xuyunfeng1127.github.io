<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css">"use strict";
var fs = require("fs");
var path = "./photos/";
fs.readdir(path, function (err, files) {
    if (err) {
        return;
    }
    var arr = [];
    (function iterator(index) {
        if (index == files.length) {
            fs.writeFile("./source/photos/data.json", JSON.stringify(arr, null, "\t"));
            console.log('get img success!');
            return;
        }
        fs.stat(path + files[index], function (err, stats) {
            if (err) {
                return;
            }