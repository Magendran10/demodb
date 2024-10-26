import express from 'express'

const router = express.Router(); 

router.get('/',(req,res) =>{
    res.send("list all the movies");
})

router.post('/',(req,res) =>{
    res.send("Create the movies");

})

router.put('/:id',(req,res) => {
    res.send("Update the movies");
})

router.delete('/:id',(req,res) => {
    res.send("Delete the movies");
})

export default router ;