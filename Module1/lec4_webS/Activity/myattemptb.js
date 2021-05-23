let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";
const fs=require("fs");
const cheerio=require("cherio");
const request=require("request");

request(matchLink,cb);

function cb(response,error,data)
{
    findbatsman(data);
}
function findbatsman(data)
{
    let highestsixhittername;
    let highestsixes;
    let srofhsh;
let mydocument=cheerio.load(data);
let bothtables=mydocument(".table.batsman");
for(let i=0;i<bothtables.length;i++)
{

    let tablerows=mydocument(bothtables[i]).find("tbody tr");

    for(let j=0;j<(tablerows.length-1);j=j+2)
    {  
      
       let alltds=mydocument(tablerows[j]).find("td");
       if(i==0 && j==0)
       {
        highestsixhittername=mydocument(alltds[0]).find("a").text();
        highestsixes=mydocument(alltds[6]).text();
         srofhsh=mydocument(alltds[7]).text();
       }
       else{
             let currentsixhittername=mydocument(alltds[0]).find("a").text();
             let currentsixes=mydocument(alltds[6]).text();
             let currentsr=mydocument(alltds[7]).text();
             if(currentsixes>highestsixes)
             {
                 highestsixhittername=currentsixhittername;
                 highestsixes=currentsixes;
                 srofhsh=currentsr;
              

             }
             else if(currentsixes==highestsixes && currentsr>srofhsh)
             {
                highestsixhittername=currentsixhittername;
                highestsixes=currentsixes;
                srofhsh=currentsr;
             
             }
            
            }
        }
    }
    console.log("Btasman with most sixes"+highestsixhittername);
    console.log("highest no of sixe  "+highestsixes);
    console.log("sr of highest six hitter "+srofhsh);



}
