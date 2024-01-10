const express = require('express');
const app = express();
const conn = require('./router/connect');
const cors = require('cors');
var jwt = require('jsonwebtoken');
var SECRET = 'my_secret';
const port = process.env.PORT || 5500



app.use(cors());
app.use(express.json());



app.get('/show',async (req ,res)=>{
    conn.query("SELECT * FROM employee",(err , result)=>{
        if (err) throw err

        res.json(result.rows)

    })
   
})

app.post('/insert', async (req, res)=>{
    const {id ,fname ,lname ,address , gender , age ,tel} = req.body
    // console.log(req.body)
    try {
        const value = [id ,fname ,lname ,address , gender , age ,tel]
        conn.query('INSERT INTO employee (id , fname ,lname ,address ,gender ,age ,tel) VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7)',value ,(error , result)=>{
            if (error) throw error
            res.json({msg:'insert successfully',status:200})

        })
        

        

    }catch(err) {
        console.log(err)
    }
})


app.post('/editdb',(req ,res)=>{
    const {id ,fname ,lname ,address , gender , age ,tel} = req.body
    const value = [fname ,lname ,address , gender , age ,tel , id]
    conn.query('UPDATE employee SET fname = $1 , lname = $2 ,  address = $3 ,  gender = $4   , age = $5  , tel = $6 WHERE id = $7 ',value ,(error , result)=>{
        if (error) throw error
        res.json({msg:"update successfully"})
        
    })
    
})

app.get('/edit/:id',(req ,res)=>{
    const id = req.params.id
    conn.query('SELECT * FROM employee where id = $1 ',[id] ,(error , result)=>{
        if (error) throw error
        res.json(result.rows)

    })
    
})


app.get('/delete/:id',(req ,res)=>{
    const id = req.params.id
    conn.query('DELETE FROM employee where id = $1 ',[id] ,(error , result)=>{
        if (error) throw error
        res.json({msg:'delete successfully'})

    })
    
})


app.post('/login',(req, res)=>{
    let {username , password } = req.body
    // console.log(req.body)
    try {
        conn.query('SELECT * FROM "user" WHERE username = $1 AND password = $2 ',[username ,password],(err ,result)=>{
            if (err) throw err;
            // console.log(result.rowCount)
            if (result.rowCount > 0) {

                const token = jwt.sign({username:username } , SECRET ,{expiresIn:'1h'})
                res.json({msg:'login successfully',stats:200,token})
            }else {
                res.json({msg:'no user',stats:200})

            }
        })
       
    }catch(err) {
        res.json({msg:'error',stats:200})
    }

    
})


app.post('/authen',(req, res)=>{
    const token = req.headers.authorization.split(" ")[1]
    // res.json(token)
    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) {
            res.json({msg:'error',code:err.message})

        }else {

            res.json({msg: "success",code:decoded})
        }
      });
})









app.listen(port,(err)=>{
    console.log('server runing on port '+port)
})