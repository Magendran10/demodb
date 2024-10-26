import mongoose,{ Schema,model } from "mongoose";

const schema = new Schema({
    title: String,
    Hero: String,
});

const Movie = model("Movie",schema);
 export default Movie;

