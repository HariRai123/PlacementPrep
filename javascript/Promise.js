const loadData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data loaded successfully")
    },2000)
});

loadData.then((message)=>{
    console.log(message)
})