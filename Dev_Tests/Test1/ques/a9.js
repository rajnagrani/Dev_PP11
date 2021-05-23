let str="Horse riding";

console.log(spoon(str));


function spoon(str)
{
let arr=str.split(" ");
let t;
t=arr[0][0];
console.log(t);
arr[0][0]=arr[1][0];

let spstr=arr.join(" ");
return spstr;




}