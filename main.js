import express from "express" 
import movieRoutes from "./routes/movies.route.js"
import ConnectDB from "./lib/db.js";


const app= express();
const PORT=3000;

//connect DB
ConnectDB();


app.get('/',(req,res) =>{
    res.json({"msg":"HELLO I AM MAGE!!"
    });
});

app.use('/movies', movieRoutes)

app.listen(PORT,() =>{
    console.log(`The server is running at http://localhost:${PORT}`);
} );
 