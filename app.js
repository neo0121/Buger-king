const express = require('express')
const path = require("path");
const fs = require("fs")
const connection =require('./src/data/connection')
const reservationForm = require("./src/model/form")
const formsubmit = require("./src/model/form2")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,"public",'html', "index.html"))
})  
app.get('/ABOUT.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,"public",'html', "About.html"))
}) 

app.post('/form',async(req, res)=>{
    try {
        const data =  await reservationForm.create(req.body);   
        res.status(201).json(`thank you so much your order has been take place date ${req.body.date} on ${req.body.time} and number of people you register is ${req.body.numberofpeople}`)

    } catch (error) {
        res.status(400).send('member not field');
    }
})

app.get('/menu.html', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "public", "html","Menu.html"))
})


app.post('/formsubmison',async(req, res)=>{
    try {
        const data2 =  await formsubmit.create(req.body);   
        res.status(201).json(`dear ${req.body.name1} thank you for your feedback `)

    } catch (error) {
        res.status(400).send("data didnot find");
    }
})
    
// app.get('/getAllOrder' , async (req,res)=>{
//     try{
//     const data = await reservationForm.find();
//     res.sendFile(path.resolve(__dirname ,"public",'html', "reservation.html"))
//     res.send();
//     console.log(data);
//     res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// });

app.listen(PORT, ()=>{
    console.log(`listing in port ${PORT}`);
})