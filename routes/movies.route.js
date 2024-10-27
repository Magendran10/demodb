import express from 'express'
import {
    MovieIndex,
    MovieCreate,
    MovieDelete,
    MovieUpadte,
    MovieDetail
} from "../Controllers/movies.controller.js";

const router = express.Router(); 

router.get('/',MovieIndex);

router.get('/:id',MovieDetail);

router.post('/',MovieCreate);

router.put('/:id',MovieUpadte);

router.delete('/:id',MovieDelete);

export default router ;