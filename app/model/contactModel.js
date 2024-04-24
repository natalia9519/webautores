import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 80},
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 100 },
    subject: { type: String, required: true, trim: true, lowercase: true, maxlength: 120},
    message: { type: String, required: true, trim: true, lowercase: true, maxlength: 400},
    createdAt: {type: Date, default: Date.now}
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;