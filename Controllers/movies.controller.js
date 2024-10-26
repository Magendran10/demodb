export const MovieIndex = (req,res) =>{
    res.send("list all the movies");
};

export const MovieCreate = (req,res) =>{
    console.log(req.body);
    return res.json(req.body);

};
export const MovieUpadte = (req,res) => {
    res.send("Update the movies");
}; 
export const MovieDelete = (req,res) => {
    res.send("Delete the movies");
};