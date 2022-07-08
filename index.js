import express from 'express'
import get from './rest/getCompany.js'
import getCompany from './rest/getCompany.js'
import getTodos from './rest/getTodos.js'
import dotenv from 'dotenv';
import postCompany from './rest/postCompany.js';

dotenv.config();

const app=express()

app.use(express.json())
app.get('/company',getCompany)
app.get('/todos',getTodos)
app.get('/postcompany',postCompany)

app.listen(`${process.env.PORT}`,()=>{
    console.log(`My app is running at ${process.env.PORT}`)
})

