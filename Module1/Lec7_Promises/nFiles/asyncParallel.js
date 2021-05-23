let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];
const fs=require("fs");

for(let i=0;i<files.length;i++)
{
let pb=fs.promises.readFile(files[i]);
pb.then(function(data)
{

    console.log(data+"");
});


}
console.log("i am a man on a mission,i need no permission ")