const fs=require('fs')
console.log('start');
fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    fs.readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }

        const second=result
        fs.writeFile('./content/result-async.txt','Fuck you',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting the next one');
