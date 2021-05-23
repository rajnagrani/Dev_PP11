const fs=require("fs");
const cheerio=require("cherio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");
// console.log(htmlKaData); // we have stringified html file !!!

// html file is loaded in cheerio
let myDocument = cheerio.load(htmlKaData);

// document.querySelector("h1");

let h1KaData = myDocument("h1").text();
// console.log(h1Element); element => cheerio => object form me data
console.log(h1KaData);
