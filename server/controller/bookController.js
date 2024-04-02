import Book from "../model/bookModel.js";

//Controlador agregar nuevo libro
export const bookCreate = async (req, res) => {
    const { author, title, pages, editorial, publicationyear, ISBN } = req.body;
    try {
        const existingBookname = await Book.findOne({ title: title })
        if (existingBookname) {
            res.status(400).json({ message: "este libro ya está registrado" })
        }
        const credentials = new Book({
            author: author,
            title: title,
            pages: pages,
            editorial: editorial,
            publicationyear: publicationyear,
            ISBN: ISBN,

        })
        await credentials.save()
        res.status(200).json({ message: "Libro registrado" })
    } catch (error) {
        res.status(500).json({ message: "ha habido algun error" })
    }
}

// Controlador para mostrar todos los registros
export const getAllBooks = async (req, res) => {
    try {
        const book = await Book.find({});
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para mostrar un único registro por su ID
export const getBookById = async (req, res) => {
    const id  = req.params.id;
    console.log(id)
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener el libro", error });
    }
}

// Controlador para actualizar un registro por su ID
export const updateBookById = async (req, res) => {
    const id  = req.params.id;
    const { author, title, pages, editorial, publicationyear, ISBN } = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { author, title, pages, editorial, publicationyear, ISBN }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.status(200).json({ message: "Libro actualizado exitosamente", updatedBook });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar el libro", error });
    }
}

// Controlador para eliminar un registro por su ID
export const deleteBookById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json({ message: "Libro eliminado exitosamente", deletedBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}