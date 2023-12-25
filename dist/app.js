"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = require("./app/modules/users/users.router");
const app = (0, express_1.default)();
// perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// console.log(process.cwd())
app.use('/api', users_router_1.userRouter);
const getAController = (req, res) => {
    const a = 'server running';
    res.send(a);
};
app.get('/', getAController);
exports.default = app;
