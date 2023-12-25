"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: {
        firstname: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'Female'],
            message: '{VALUE} is not supported please inser a value from male and female',
        },
    },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true, maxlength: 20 },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+'],
            message: '{VALUE} is not supported',
        },
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNo: { type: String, required: true },
    },
    localGaurdian: {
        name: { type: String },
        occupation: { type: String },
        contactNo: { type: String },
    },
    profileImg: { type: String, required: true },
    isActive: ['active', 'blocked'],
});
exports.studentModel = (0, mongoose_1.model)('student', studentSchema);
