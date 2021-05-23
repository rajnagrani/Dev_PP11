const fs1=require("fs");
const ch=require("cherio");

let htkd=fs1.readFileSync("./index.html","utf-8");
//console.log(htkd);

let dom=ch.load(htkd);
//console.log(dom.text());
console.log(dom('p')["1"].text());






