const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    certificateID: { type: String, required: true },
    name: { type: String, required: true },
    course: { type: String, required: true },
    issueDate: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Issued'],  // Ensure 'Issued' is included here
        required: true 
    }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
