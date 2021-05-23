let fs=require("fs");
let {skakaam,filemerge}=require('./util.js')
let hamarearguments=process.argv.slice(2);

//console.log(hamarearguments);
let flags=[];
let files=[];
let i;
for(i=0;i<hamarearguments.length;i++)
{
    if(hamarearguments[i][0]=='-')
    {
        flags.append(hamarearguments[i]);
    }
    else{
        files.append(hamarearguments[i]);
    }
}
let mainfile=filemerge(files);

if (flags.includes("-s")) {
    // filesData updated if s flag is present !
    filesData = applySFlag(filesData);
  }
  
  // console.log(filesData);
  
  // when both -b and -n flags are present
  if (flags.includes("-b") && flags.includes("-n")) {
    if (flags.indexOf("-b") < flags.indexOf("-n")) {
      // apply b flag
      filesData = applyBFlag(filesData);
    } else {
      // apply n flag
      filesData = applyNFlag(filesData);
    }
  }
  // only -b flag is present
  else if (flags.includes("-b")) {
    // apply b flag
    filesData = applyBFlag(filesData);
  }
  // only -n flag is present
  else if (flags.includes("-n")) {
    // apply n flag
    filesData = applyNFlag(filesData);
  }
  

