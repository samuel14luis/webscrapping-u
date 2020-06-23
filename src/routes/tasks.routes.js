var {Router} = require('express');
const router = Router();

//Database Connection
var connect = require('../database/database')

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.send('Tareas..')
})

router.post('/', async (req, res) => {
    const db = await connect();
    res.json('Tarea creada')
})

module.exports = router;