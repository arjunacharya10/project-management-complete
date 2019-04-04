const express = require('express');
const bc = require('bcrypt');
const bp = require('body-parser');
const cors = require('cors');
const saltRounds = 10;

const app = express();

const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'arjun',
        password: 'Kamalakshi1998',
        database: 'project_management'
    }
});

app.use(cors());
app.use(bp.json());


app.post('/register',(req,res)=>{
    
    const body = req.body;
    var hash = bc.hashSync(body.password,saltRounds);
    console.log(hash);
    db('student').insert({
        usn: body.id,
        email: body.email,
        name: body.name,
        password: hash,
        
    }).then(result =>{
        res.json('success');
    })
    .catch(err =>{
        console.log(err);
        res.status(400).json(err.sqlMessage);
    })
});

app.post('/signin',(req,res)=>{
    const body = req.body;
    console.log(body);
    db.select('uid','name','email','password').from('student').where('email','=',body.email)
    .then(student =>{
        console.log(student);
        if(bc.compareSync(body.password, student[0].password)){
            res.json({
                id: student[0].uid,
                status: 'success',
                name:student[0].name,
                email: student[0].email,
            });
        }
        else{
            res.status(400).json({status: 'faile2'});
        }
    })
    .catch(err=>{
        res.status(400).json({status: 'failed1'});
    })
});


app.get('/',(req,res)=>{
    res.json('Success!');
})

app.post('/bug-create',(req,res)=>{
    var body = req.body;
    console.log(body);
    db('bugs').insert({

        bugtitle:body.bugtitle,
        bugtext: body.bugtext,
        bugstatus: body.bugstatus,
        
    })
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    });
})

app.get('/get-bugs',(req,res)=>{
    db.select('*').from('bugs')
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Running!!");
})


