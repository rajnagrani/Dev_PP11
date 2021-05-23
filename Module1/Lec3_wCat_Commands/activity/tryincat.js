let fs=require("fs");
let akadata=fs.readFileSync("./a.txt","utf-8");
//console.log(akadata);
let bkadata=fs.readFileSync("./b.txt","utf-8");
let combined=akadata+"\r\n"+bkadata;
//console.log(combined);
console.log(skakaam(combined));
console.log(bkakaam(combined));
console.log(nkakaam(combined));

function skakaam(file)
{let included=false;
let arr1=file.split('\r\n');
let nayiarray=[];
for(let i=0;i<arr1.length;i++)
{
if(arr1[i]!='')
{
    nayiarray.push(arr1[i]);
    included=false;
}
else if(arr1[i]=='' && included==false)
{
    nayiarray.push(arr1[i]);
    included=true;
}

}
let newfile=nayiarray.join('\r\n');
//console.log(newfile.split("\r\n").length);
return newfile;
}
//b ka kaam

function bkakaam(newfilefroms)
{
let bmf=newfilefroms.split("\r\n");
let i;
let count=1;
for(i=0;i<bmf.length;i++)
{
    if(bmf[i]!='')
    {
        //bmf[i]=count+"."+" "+bmf[i]
        bmf[i]=`${count}.${bmf[i]}`;
        count++;
    }
}
let bflagedfile=bmf.join("\r\n");
return bflagedfile;
}
function nkakaam(file)
{
let i;
let count=1;
let splittedfile=file.split("\r\n");
for(i=0;i<splittedfile.length;i++)
{
    splittedfile[i]=`${count}.${splittedfile[i]}`;
    count++;
}
let nflaggedfile=splittedfile.join("\r\n");
return nflaggedfile;
}
module.exports=
{
    skakaam:skakaam,
    bkakaam:bkakaam,
    nkakaam:nkakaam,
    filemerge:filemerge

}
//console.log(module.exports);
function filemerge(filearr)
{ let filekaamwaali="";
for(let i=0;i<filearr.length;i++)
{let x=filearr[i];
let path='./x';
    if(!fs.existsSync(path))
    {
        console.log("wrong file given as input");
    }
    else
    {     
        data=fs.readFileSync(path,"utf-8");
        if(i==filearr.length-1)
        {
           filekaamwaali=filekaamwaali+data; 
        }
        else
        {
            filekaamwaali=filekaamwaali+data+'\r\n';
        }
    }
}
return filekaamwaali;

}





