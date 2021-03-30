const fs = require('fs');
let dir1 = './MyFunnyFolder';
let dir2 = './What';



if(!fs.existsSync(dir1)){
    fs.mkdir(dir1, {recursive: true}, (err)=>{
        if(err) throw err;
    })
}

if(!fs.existsSync(dir2)){

    fs.mkdir(dir2, {recursive: true}, (err)=>{
        if(err) throw err;
    })

    fs.writeFile('./What/isThis.txt', "", 'utf-8', (err) => {
        if (err) throw err
        console.log('file written')
})
}