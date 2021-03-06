
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, required: true, unique: true },
    createdOn: { type: Date, required: true, default: Date.now },
    updatedOn: { type: Date, required: true, default: Date.now },
    email: { type: String, required: true, unique: true, lowercase: true },
    status: { type: String, required: true, enum: ["ACTIVE", "INACTIVE", "INVIDED"], default: 'INVIDED' },
    gender: { type: String, required: true, enum: ["MALE", "FEMALE"] },
    password: { type: String, required: true, trim: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role", }],
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }
});

module.exports = mongoose.model('User', User);