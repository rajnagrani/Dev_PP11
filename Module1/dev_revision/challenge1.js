const fs=require("fs");
const cheerio=require("cherio");
const request=require("request");
const link="https://github.com/topics";

request(link,cb);


function cb(error,response,data)
{
    getdetails(data);
}

function getdetails(data)
{
    let mydocument=cheerio.load(data);
    let alldiv=mydocument(".topic-box");
    //console.log(alldiv);
    for(let i=0;i<alldiv.length;i++)
    {
        let atag=mydocument(alldiv[i]).find('a');
        let link=atag.attr('href');
        console.log("https://www.github.com"+link);
        let ptagkadata=atag.find(".f3").text();
        console.log(ptagkadata);



    }







}