import mongoose,{ Schema,model } from "mongoose";

const schema = new Schema({
    title: {
        type:String,
        required:true,
        unique:true},
    Hero: {
        type:String,
        required:true,}
});

const Movie = model("Movie",schema);
 export default Movie;

