import express  from "express";
import { eventCreate, getAllEvents, getEventById, updateEventById, deleteEventById} from "../controller/eventController.js";
const router = express.Router()

router.post("/create", eventCreate)
router.get('/events', getAllEvents)
router.get('/:id', getEventById)
router.put('/:id', updateEventById)
router.delete('/:id', deleteEventById)


export default router;