import express  from "express";
import { bookCreate, getAllBooks, getBookById, updateBookById, deleteBookById} from "../controller/bookController.js";
const router = express.Router()

router.post("/create", bookCreate)
router.get('/books', getAllBooks)
router.get('/:id', getBookById)
router.put('/:id', updateBookById)
router.delete('/:id', deleteBookById)


export default router;