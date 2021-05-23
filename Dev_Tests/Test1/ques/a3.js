let data=[
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
  ];
console.log(rainDance(data));


function rainDance(data)
{let avg,sum;
let newarr=[];
let obj;
for(let i=0;i<data.length;i++)
{
avg=0;
 sum=0;
for(let j=0;j<data[i].rainfall.length;j++)
{
sum+=data[i].rainfall[j];
}
avg=sum/(data[i].rainfall.length);
obj={
    name:data[i].name,
    avgRainfall:avg
}
newarr.push(obj);


}

return newarr;



}