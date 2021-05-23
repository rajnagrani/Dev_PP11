let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const fs=require("fs");
const cheerio=require("cherio");
const request=require("request");
 
request(matchlink,cb);

function cb(error,response,data)
{
    console.log(data);
    //fs.writeFileSync('./match2.html',data);
    //req(data);
}

