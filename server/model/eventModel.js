import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    places: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
}, { collection: "events" });

const Event = mongoose.model('Event', eventSchema);

export default Event;