const express = require("express")
const connection = require("./database");
const session = require("express-session");
const app = express();

app.use(express.static("public"))
app.use(express.static("uploads"))
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");

app.use(session({
    cookie :{
        maxAge : 2 * 60 * 60 * 1000,
        secure : false,
        httpOnly : true
    },
    store  : new session.MemoryStore(),
    saveUninitialized : true,
    resave : false,
    secret : "secretValue"
}))

//Sistem Register
app.get("/register", (req,res) => {
    res.render("register", {title: "register",isLogin : false});
})

app.post("/register", (req,res) =>{
    const nameRegister = req.body.nameRegister;
    const emailRegister = req.body.emailRegister;
    const passwordRegister = req.body.passwordRegister;
    
    if((nameRegister == "") || (emailRegister == "") || (passwordRegister == "")){
        req.session.message = {
            type : "danger",
            message : "Please fullfill register"
        }
        res.redirect("/register");
        return;
    }
    else{
        const query = `INSERT INTO users_tb(email,username,password) VALUES ("${emailRegister}", "${nameRegister}", "${passwordRegister}")`
            connection.query(query,(err,results)=>{
            if (err) throw err;
            req.session.message = {
                type : "success",
                message : "Data successfully to add"
            }
            console.log("Data successfully to add")
        })
        res.redirect("/login");
    }

})

//Sistem Login
app.get("/login", (req,res) => {
    res.render("login", {title: "login",isLogin : false});
})

app.post("/login",(req,res) =>{
   const email = req.body.email;
   const password = req.body.password;

   if ((email === "") || (password === "")){
       req.session.message = {
           type : "danger",
           message : "Please fullfill input"
       }
       res.redirect("/login");
       return;
   }
   else{
       const query = "SELECT * FROM users_tb";
       connection.query(query,(err,results) => {
           if (err) throw err;
           for(let i = 0 ; i < results.length ; i++){
               if((results[i].email == email) && (results[i].password == password) ) {
                    req.session.message = {
                        type : "success",
                        message : "Login Success"
                    }
                    req.session.isLogin = true;
                    req.session.name = results[i].username;
                    res.redirect("/")
                    return;               
                }
               else{
                req.session.message = {
                    type : "danger",
                    message : "Login Fail"
                }
                req.session.isLogin = false;
               }
           }
           res.redirect("/login")          
       })   
   }
  
})

//Tampilan Index
app.get("/", (req,res) => {
    const query = `SELECT*FROM collections_tb WHERE user_id = "${req.session.name}"`
    connection.query(query, (err,results) => {
    if (err) throw err;
    console.log(results)
    res.render("index", {title: "Ticket", isLogin : req.session.isLogin, results:results ,username : req.session.name});
    })
})

//addCollections
app.get("/add-collections", (req,res) => {    
    res.render("AddCollections", {title: "Add Collections", isLogin : req.session.isLogin ,username : req.session.name});   
})

app.post("/add-collections-success" ,(req,res) =>{
    const name = req.body.name;
    const id = req.session.name;
    console.log(id)
    const query = `INSERT INTO collections_tb(name,user_id) VALUES ("${name}", "${id}")`
        connection.query(query,(err,results)=>{
        if (err) throw err;
        req.session.message = {
             type : "success",
             message : "Data successfully to add"
        }
         console.log("Data successfully to add")
        })

    res.redirect("/");
})

//updateCollections
app.get("/edit-collections/:id",(req,res)=> {
    const id = req.params.id;
    const query = `SELECT * FROM collections_tb WHERE id = ${id}`;
    connection.query(query, (err,results) => {
        if (err) throw err;
        console.log(results);
        res.render("editCollections",{title:"Edit Collections", isLogin: req.session.isLogin, results:results, username : req.session.name})
       })
})
app.post("/edit-collections-success",(req,res) => {
    const name = req.body.name;
    const id = req.body.id
    const query = `UPDATE collections_tb SET name = "${name}" WHERE id = ${id} `;
    connection.query(query,(err,results) => {
      if (err) throw err;
      console.log(results);
    })
    res.redirect("/")
})

//deleteCollections
app.get("/delete-collections/:id",(req,res) => {
    const id = req.params.id;
    console.log(id);
    const query = `DELETE FROM collections_tb WHERE id=${id}`;
    connection.query(query, (err,results) => {
      if (err) throw err;
      console.log(results);
      res.redirect("/")
    }) 
  })

//Tampilan task
app.get("/task/:name",(req,res) => {
    const name = req.params.name;
    console.log(name);
    const query = `SELECT * FROM tasks_tb WHERE collections_id = "${name}"`
    connection.query(query, (err,results) => {
      if (err) throw err;
      console.log(results);
      res.render("task", {title: "Task", isLogin : req.session.isLogin, results : results,username : req.session.name, name:name})
    }) 
  })

//adding task
app.post("/add-task",(req,res) => {
    const name = req.body.taskName;
    const id = req.body.id;
    console.log(id)
    const query = `INSERT INTO tasks_tb(name,is_done,collections_id) VALUES ("${name}","white","${id}")`
        connection.query(query,(err,results)=>{
        if (err) throw err;
        req.session.message = {
             type : "success",
             message : "Data successfully to add"
        }
         console.log("Data successfully to add")
        })

    res.redirect(`/task/${id}`);
   
  })
  
//update task
app.get("/is-done/:id",(req,res) => {
    const id = req.params.id;
    const query = `UPDATE tasks_tb SET is_done = "green" WHERE id = ${id} `;
    connection.query(query,(err,results) => {
      if (err) throw err;
      console.log(results);
    })
    res.redirect("/")
})

//delete task
app.get("/delete-task/:id",(req,res) => {
    const id = req.params.id;
    const query = `DELETE FROM tasks_tb WHERE id=${id}`;
    connection.query(query, (err,results) => {
      if (err) throw err;
      console.log(results);
     })
     res.redirect("/");
})







const port = 5001;
app.listen(port, () => {
    console.log("server running on port: "+port)
})

