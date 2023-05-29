const fs = require('fs');

//Read file1.txt
fs.readFile('file1.txt','utf8',(err,file1Data)=>{
    if(err) throw err;

    //read file2.txt
    fs.readFile('file2.txt','utf8',(err,file2Data)=>{
        if(err) throw err;

        //Combine
        const combineData = file1Data + " " + file2Data;

        //write data to file3.txt
        fs.writeFile('file3.txt',combineData,(err)=>{
            if(err) throw err;
            console.log('Data save to file3 successfully!');
        
        fs.readFile('file3.txt','utf8',(err,data)=>{
            if(err) throw err;
            console.log(data);
        });
    });
    });
});