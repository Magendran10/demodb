express = require("express");
const app= express();
const PORT=3000;
app.get('/',(req,res) =>{
    res.json({"msg":"HELLO I AM MAGE"
    });
});
app.get('/movies',() =>{

})

app.post('/movies',() =>{

})

app.put('/movies/:id',() => {

})

app.delete('/movies/:id',() => {

})

app.listen(PORT,() =>{
    console.log(`The server is running at http://localhost:${PORT}`);
} );
 