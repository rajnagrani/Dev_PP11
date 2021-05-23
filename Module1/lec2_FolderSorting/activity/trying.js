let fs=require('fs');
let extensionobj=require('./util');
let dfolderkapath='./Downloads';
let files=fs.readdirSync(dfolderkapath);
//console.log(files);
for(let i=0;i<files.length;i++)
{
    fsort(files[i]);

}
function getextension(file)
{
    file=file.split(".");
    return file[1];
}
function cncf(extension)
{
let nayefolderkapath;
for(let key in extensionobj)
{
    let ea=extensionobj[key];
    if(ea.includes(extension))
    {
        nayefolderkapath=dfolderkapath+"/"+key;
        break;
    }
}
let exist=fs.existsSync(nayefolderkapath);
if(!exist)
{
    fs.mkdirSync(nayefolderkapath);
}
return nayefolderkapath;



}
function move(file,nayefolderkapath)
{
    let inipath=dfolderkapath+"/"+file;
    let finalpath=nayefolderkapath+"/"+file;
    fs.copyFileSync(inipath,finalpath);
}
function fsort(file)
{
    let extension=getextension(file);
   let nayefolderkapath= cncf(extension);
   move(file,nayefolderkapath);

}