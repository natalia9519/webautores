import Event from "../model/eventModel.js";

//Controlador agregar nuevo libro
export const eventCreate = async (req, res) => {
    const { author, title, places, description, date } = req.body;
    try {
        const existingEventname = await Event.findOne({ title: title })
        if (existingEventname) {
            res.status(400).json({ message: "este evento ya está registrado" })
        }
        const credentials = new Event({
            author: author,
            title: title,
            places: places,
            description: description,
            date: date,

        })
        await credentials.save()
        res.status(200).json({ message: "Evento registrado" })
    } catch (error) {
        res.status(500).json({ message: "ha habido algun error" })
    }
}

// Controlador para mostrar todos los registros
export const getAllEvents = async (req, res) => {
    try {
        const event = await Event.find({});
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para mostrar un único registro por su ID
export const getEventById = async (req, res) => {
    const id  = req.params.id;
    console.log(id)
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener el evento", error });
    }
}

// Controlador para actualizar un registro por su ID
export const updateEventById = async (req, res) => {
    const id  = req.params.id;
    const { author, title, places, description, date } = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, { author, title, places, description, date }, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json({ message: "Evento actualizado exitosamente", updatedEvent });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar el evento", error });
    }
}

// Controlador para eliminar un registro por su ID
export const deleteEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json({ message: "Evento eliminado exitosamente", deletedEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}