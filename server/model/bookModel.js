import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    pages: { type: Number, required: true },
    editorial: { type: String, required: true },
    publicationyear: { type: Number, required: true },
    ISBN: { type: Number, required: true },
    image: { type: String, required: true },
}, { collection: "books" });

const Book = mongoose.model('Book', bookSchema);

export default Book;