"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/api", userRouter);
userRouter.get("/users", (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "Data Found",
        error: {
            code: 200,
            description: "Get data",
        },
    });
});
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.post("/", (req, res) => { });
exports.default = app;
