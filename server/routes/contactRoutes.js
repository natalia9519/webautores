import express  from "express";
import { contactCreate, getAllContact, getContactById, updateContactById, deleteContactById} from "../controller/contactController.js";
const router = express.Router()

router.post("/create", contactCreate)
router.get('/contact', getAllContact)
router.get('/:id', getContactById)
router.put('/:id', updateContactById)
router.delete('/:id', deleteContactById)


export default router;