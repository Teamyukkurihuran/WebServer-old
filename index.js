'use strict';
const express = require('express');
const app = express();
app.use(express.static('public'));

// app.use(express.static('public/applications'));
// app.use(express.static('public/css'));
// app.use(express.static('public/error'));
// app.use(express.static('public/images'));
// app.use(express.static('public/js'));
// app.use(express.static('public/sitemap'));

app.use((req, res,next)=>{
   res.status(404).sendFile(__dirname + '/public/assets/404.html');
});

app.listen(8001, ()=> {
  console.log('サーバー起動完了');
});