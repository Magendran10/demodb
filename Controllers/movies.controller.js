import Movie from "../models/movie.model.js";
export const MovieIndex = (req,res) =>{
    res.send("list all the movies");
};

export const MovieCreate = async (req,res) =>{
    console.log(req.body);

    const newMovie = new Movie({
        title: req.body.title,
        Hero: req.body.Hero,
    });
     try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
     }catch(error){
        return res.status(400).json({message:error.message});
     }
};
export const MovieUpadte = (req,res) => {
    res.send("Update the movies");
}; 
export const MovieDelete = (req,res) => {
    res.send("Delete the movies");
};