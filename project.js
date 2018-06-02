const express = require('express');
const app = express()
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
const mysql = require('mysql');
const setting = require('./config/setup');
const jwt =require('jsonwebtoken')

const db = mysql.createConnection({
    host:'localhost',
    user:'rin',
    password:'rin121412',
    database:'toko'
});
db.connect();
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('ok')
})

app.get('/data/cakes', function(req,res){ //get data from cakes table
    var sql = 'select * from produk where id_kategori = 180501';
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/data/cookies', function(req,res){ //get data from cookies table
    var sql = 'select * from produk where id_kategori = 180503';
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result); 
        res.send(result);
    });
});

app.get('/data/cup', function(request,respond){ //get data from cupcokies table
    var sql = 'select * from produk where id_kategori = 180504';
    db.query(sql, (error, resulted)=>{
        if (error) throw error;
        console.log(resulted);
        respond.send(resulted);
    });
});

app.get('/data/3dcakes', function(request,respond){ //get data from 3dcakes table
    var sql = 'select * from produk where id_kategori = 180502';
    db.query(sql, (error, resulted)=>{
        if (error) throw error;
        console.log(resulted);
        respond.send(resulted);
    });
});

app.get('/data/newcakes', function(request,respond){ //get data from newcakes table
    var sql = 'select * from produk where id_kategori = 180505';
    db.query(sql, (error, resulted)=>{
        if (error) throw error;
        console.log(resulted);
        respond.send(resulted);
    });
});

app.get('/data/:id', function(req,res){ //get spesific data from database (searching)
    var sql = "select * from produk where nama_item like '%"+req.params.id+"%'";
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/boom/cart/:id', function(req, res){
    var query = "select * from addtocart where id_user ='"+req.params.id+"'"; 
    // var sql = 'select * from addtocart';
    // db.query(sql, (err, result)=>{
    db.query(query, (err, result)=> {
        if (err){
            console.log(query);  
        }
        res.send(result);
    });
});

app.post('/data/reg', (req, res)=>{ //register
        var data = {username:req.body.username, fullname:req.body.fullname, email:req.body.email, password:req.body.password};
        var sql = 'insert into user set ?';
        db.query(sql, data, (err, result)=>{
            if (err) throw err;
            console.log(result);
            res.send({
                type:'POST', 
                username:req.body.username,
                fullname:req.body.fullname, 
                email:req.body.email,
                password:req.body.password,
            });
        });
    });

    app.post('/data/log', (req, res)=>{ //login
        var user = req.body.username.toString(); 
        var pass = req.body.password.toString();
        var sql = "select * from user where username ='"+user+"' and password='"+pass+"'";
        db.query(sql, (err, result)=>{
            if (result.length === 0){
                res.status(401).send({success:false, msg:'incorrect password'})
            } else 
            {
                var token = jwt.sign(JSON.stringify(result), setting.JWT_SECRET)
                res.json({success: true, token: token})
            }

            });
        });

app.post('/data/xpost', (req, res)=>{
        var data = {nmb:req.body.nmb, item:req.body.item, price:req.body.price, id_user:req.body.id_user};
        var sql = 'insert into addtocart set ?';
        db.query(sql, data, (err, result)=>{
            if (err) throw err;
            console.log(result);
            res.send({
                type:'POST', 
                nmb:req.body.nmb,
                item:req.body.item, 
                price:req.body.price,
                id_user:req.body.id_user
            });
        });
    });

    app.delete('/boom/:id', (req, res)=>{
            var sql = "delete from addtocart where no ='"+req.params.id+"'";
            db.query(sql, (err, result)=>{
                res.send(result);
            });
        });

    app.post('/trx/checkout', (req, res)=>{ //checkout
            var datatrx = {
                nama:req.body.nama, 
                email:req.body.email, 
                address:req.body.address, 
                city:req.body.city,
                nat:req.body.nat,
                nohp:req.body.nohp,
                namecard:req.body.namecard,
                ccnumber:req.body.ccnumber,
                exprd:req.body.exprd,
                cvvnumber:req.body.cvvnumber,
                exprdyr:req.body.exprdyr,
                id_user:req.body.id_user,   
            };  
            var sql = 'insert into trx set ?';
            db.query(sql, datatrx, (err, result)=>{
                if (err) throw err;
                console.log(result);
                res.send({
                    type:'POST', 
                });
            });
        });


app.listen(7000, ()=>{
    console.log('server @port 7000')
});