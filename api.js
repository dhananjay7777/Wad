// npm init
// npm install express

const express=require('express');
const app = express();
const port=3000;

const students=[
    {id:1,name:'sanket'},
    {id:2,name:'mayank'},
    {id:3,name:'akash'}  
]

app.get('/students',(req,res)=>
{
    res.send(students) // dont use write  //fetch all data. localhost:3000/students
    res.end();
})

app.get('/students/:id',(req,res)=>  //fetching data according to id //localhost:3000/students/1
{

    const student=students.find(c=>c.id===parseInt(req.params.id));
    res.send(student) // dont use write
    res.end();
})

app.get('/home',(req,res)=> //open another page
{
    res.write('<h1>THis is my home page</h1>')  //localhost:3000/home
    res.end();
})

app.get('/no',(req,res)=>  //fetch only text //localhost:3000/no
{
    res.write('THis is not html')
    res.end();
})

app.listen(port,()=>{console.log('server listening')})

//open terminal and type npm init and press enter and at last type yes
//then npm install express
//then type node api.js
//then type localhost:3000/students in console in chrome 