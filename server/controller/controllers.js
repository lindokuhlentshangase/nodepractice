import pool from '../db/db.js'

async function getTasks(req,res) {
    pool.query('SELECT * FROM tasks', (error, results) => {
        if(error){
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results.rows)
    });
}

// pp.get("/", (req, res) =>{
//     res.status(200).send("Server has started");
// })



const addTask = async(req, res) =>{
    const {id,task} = req.body
    
    pool.query('INSERT INTO tasks (task, completed) VALUES ($1,$2,$3)', [id, task, completed], error,results => {
        if(error){
            console.error(error);
            return res.status(500).json({error: 'Internal server error'});
        }
        res.status(200).json(results.rows)
    });
};


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





export {getTasks}