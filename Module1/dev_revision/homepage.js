const fs=require("fs");
const cheerio=require("cherio");
const requst=require("request");
const request = require("request");


let mainpageipl="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(mainpageipl,function(error,response,data)
{
processlink(data);


});

function processlink(data)
{

let mydocument=cheerio.load(data);
let atagkalink=mydocument(".widget-items.cta-link a").attr('href');
atagkalink=`https:www.espncricinfo.com${atagkalink}`;
console.log(atagkalink);

}