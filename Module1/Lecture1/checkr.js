let values=[1,23,45,67];
//console.log(values);
values.push("raju");
//console.log(values);
function ab()
{
    console.log("Hello from ab");
}
values.push(ab);
console.log(values);
let obj=
{
    name:"raj nagrani",
    age:21,
    hobbies:["gym","cricket",{
        nickname:"raju",
        weakness:["batta","wb"]
    }
]
};
console.log(obj.hobbies[2].weakness[1]);
console.log(obj);
obj.age=22;
console.log(obj)







