const express = require("express");
const cors =require("cors");
const { error } = require("console");
const Pool = require('pg').Pool

const app = express();//initializing express
app.use(express.json());
app.use(cors());
const pool = new Pool({
    "previewLimit": 50,
  "server": "localhost",
  "port": 5432,
  "driver": "PostgreSQL",
  "name": "nodepractice",
  "database": "nodepractice",
  "username": "postgres",
  "password": ""
})

const port = process.env.PORT || 8000;

app.get("/", (req, res) =>{
    res.status(200).send("Server has started");
})

app.get("/tasks", (req, res) =>{
    pool.query('SELECT * FROM tasks', (error, results) => {
        if(error){
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results.rows)
    });
});

app.post("/add", async(req, res) =>{
    const {task, completed} = req.body
    
    pool.query('INSERT INTO tasks (task, completed) VALUES ($1,$2)', [task, completed], error,results => {
        if(error){
            console.error(error);
            return res.status(500).json({error: 'Internal server error'});
        }
        res.status(200).json(results.rows)
    });

})

app.delete("/delete:id", async(req, res) =>{
    const id = parseInt(req.params.id, 1);
    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid task ID" });
    }
    try{
        pool.query('DELETE FROM tasks WHERE id = $1', [id], error,results =>{
        if(error){
            console.error(error);
            return res.status(201).json({message: 'Task deleted successfully'})
       
        }
    })
    } catch (error){
        console.error(error);
        return res.status(500).json({message: 'Failed to delete'});

    }

    
});

app.listen(port, () =>{
    console.log(`Server started at${port}.`);
})

