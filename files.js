const fs = require("fs"); // fs mathi badhu thase tethi import kari che

//reading files

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//             console.log(data.toString())
// })
// console.log('last line')  //aa line pela print thashe jenu reason che ke upar ni readfile karva time lage jethi aa run thai jay tetala time mamn

//write files----------------------

// fs.writeFile('./docs/blog1.txt','hello hemal',()=>{ // blog 1 ma hello vivek hatu aeni jagyaae hello hemal avi gayu ama (filelocation,shu lakhvvanu che ,function) aa rite thay che
//     console.log('file was written')
// })
// fs.writeFile('./docs/blog2.txt', 'new file created hello vivek ',()=>{
//     console.log("blog 2 created")  // navo blog 2 create thashe file
// })

//create directories--------------------------
// if (!fs.existsSync("./assets")) {
//   // existsSync aetale ke ae check karshe ke folder exist che ke nahi jo ae nahi hoy to create thashe nahi to code run nahi thay

//   fs.mkdir("./assets", (err) => {
//     //make directories che asset nam nu folder banshe
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     //remove directories jenathi folder delete thashe-------------------
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted"); // aa pura code no meaning che ke jo folder hoy to delete karo jo na hoy to create karo je fs.rmdir,fs.mkdir thi thay che aek var run karo to create thay aek var run karo to remove thai jashe. 
//   });
// }

//deleting files ------------------------------

if(fs.existsSync('./docs/deleteme.txt')){    //jo deleteme.txt hoy exist to ae file ne delete kari do fs.unlink no use kari ne
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}
  //