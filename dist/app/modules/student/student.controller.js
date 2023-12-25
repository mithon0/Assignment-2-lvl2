"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body.student;
        //   will call service function to send this data
        const result = yield student_service_1.studentServices.createStudenIntoDb(student);
        // send response
        res.status(200).json({
            success: true,
            message: 'student is created success',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: true,
            message: 'Something went Wrong',
            Error: err,
        });
    }
});
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentServices.getAllStudentsIntoDB();
        res.status(200).json({
            success: true,
            message: 'get all student succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something Went wrong',
            Error: err,
        });
    }
});
exports.studentController = {
    createStudent,
    getAllStudents,
};
