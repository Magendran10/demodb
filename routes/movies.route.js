import express from 'express'
import {
    MovieIndex,
    MovieCreate,
    MovieDelete,
    MovieUpadte,
} from "../Controllers/movies.controller.js";

const router = express.Router(); 

router.get('/',MovieIndex);

router.post('/',MovieCreate);

router.put('/:id',MovieUpadte);

router.delete('/:id',MovieDelete);

export default router ;