import Contact from "../model/contactModel.js";
import validator from "validator";

// Controlador para agregar un nuevo mensaje de contacto
export const contactCreate = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    // Validar los campos del formulario de contacto
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Por favor completa todos los campos del formulario" });
    }

    // Validar el formato y longitud de los campos
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Por favor ingresa un email válido" });
    }
    if (!validator.isLength(name, { max: 80 })) {
      return res.status(400).json({ message: "El nombre no puede exceder los 80 caracteres" });
    }
    if (!validator.isLength(subject, { max: 120 })) {
      return res.status(400).json({ message: "El asunto no puede exceder los 120 caracteres" });
    }
    if (!validator.isLength(message, { max: 400 })) {
      return res.status(400).json({ message: "El mensaje no puede exceder los 400 caracteres" });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();
    res.status(200).json({ message: "Mensaje de contacto registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error al procesar el mensaje de contacto", error });
  }
}

// Controlador para mostrar todos los mensajes de contacto
export const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controlador para mostrar un único mensaje de contacto por su ID
export const getContactById = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Mensaje de contacto no encontrado" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error al obtener el mensaje de contacto", error });
  }
}

// Controlador para actualizar un mensaje de contacto por su ID
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, subject, message } = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, subject, message }, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: "Mensaje de contacto no encontrado" });
    }
    res.status(200).json({ message: "Mensaje de contacto actualizado exitosamente", updatedContact });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error al actualizar el mensaje de contacto", error });
  }
}

// Controlador para eliminar un mensaje de contacto por su ID
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Mensaje de contacto no encontrado" });
    }
    res.status(200).json({ message: "Mensaje de contacto eliminado exitosamente", deletedContact });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error al eliminar el mensaje de contacto", error });
  }
}