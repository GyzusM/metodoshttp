const express = require("express");

app.get('/', (req, res)=> {
    res.send('Hola GET')
})

app.post('/',(req, res)=>{
    res.send('Hola POST')
})

app.put('/',(req, res)=>{
    res.send('Hola PUT')
})

app.patch('/',(req, res)=>{
    res.send('Hola PATCH')
})

app.delete('/',(req, res)=>{
    res.send('Hola DELETE')
})