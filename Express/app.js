const express=require('express');
const app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><p>This is Home page</p>');
});
app.get('/results',(req,res)=>{
    res.send('<h1>Result</h1><p>Results Will be anounced soon!</p>');
});
app.listen(port,()=>{
    console.log('server is running on http:/localhost/5000');
});