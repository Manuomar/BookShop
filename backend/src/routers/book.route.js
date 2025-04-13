import express from 'express';
import { getBook } from '../controllers/book.controller.js';

const router = express.Router();

router.get('/',getBook);
// http://localhost:3000/book/ 

// example
// route.get('/new,controller);
// http://localhost:3000/book/new

export default router;