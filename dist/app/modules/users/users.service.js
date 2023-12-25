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
exports.usersServices = void 0;
const users_model_1 = require("../users/users.model");
const createUsersIntoDb = (student) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.usersModel.create(student);
    return result;
});
const getAllUsersIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.usersModel.find();
    return result;
});
exports.usersServices = {
    createUsersIntoDb,
    getAllUsersIntoDB,
};
