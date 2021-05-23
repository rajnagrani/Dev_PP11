//Aim is to find highest wicket taker 
//will do it
//did it

let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

const fs=require("fs");

const cheerio=require("cherio");

const request=require("request");

const { match } = require("assert");

request(matchlink,cb);

function cb(error,response,data)
{

    finddetails(data);
}

function finddetails(data)
{ let highestWicketTakenName;
  let economyOfHighestWicketTaker;
  let   highestWicketTaken;
let mydocument=cheerio.load(data);
let bothBowlingTables=mydocument('.table.bowler');
for(let i=0;i<bothBowlingTables.length;i++)
{
    let Tablerows=mydocument(bothBowlingTables[i]).find("tbody tr");
    
    for(let j=0;j<Tablerows.length;j++)
    {
        let alltds=mydocument(Tablerows[j]).find("td");
         if(i==0 && j==0)
         {
             highestWicketTakenName=mydocument(alltds[0]).find("a").text();
             highestWicketTaken=mydocument(alltds[4]).text();
             economyOfHighestWicketTaker=mydocument(alltds[5]).text();
          }
    else
    {

          
          let currentname=mydocument(alltds[0]).find("a").text();
          let currentWickets=mydocument(alltds[4]).text();
          let currenteconomy=mydocument(alltds[5]).text();
          if(currentWickets>highestWicketTaken)
          {
              highestWicketTakenName=currentname;
              highestWicketTaken=currentWickets;
              economyOfHighestWicketTaker=currenteconomy;

          }
          else if(currentWickets==highestWicketTaken && currenteconomy<economyOfHighestWicketTaker)
          {
              
            highestWicketTakenName=currentname;
            highestWicketTaken=currentWickets;
            economyOfHighestWicketTaker=currenteconomy;

          }
        




    }

}
}
console.log("highest wicket taker's name "+highestWicketTakenName);
console.log("highest wicket taken "+highestWicketTaken);
console.log("best economy "+economyOfHighestWicketTaker);







}