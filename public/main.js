fetch("/user").then(res =>{
    return res.json();
}).then(json => {
    console.log(json);
}).catch(err => {
    printError(err);
});