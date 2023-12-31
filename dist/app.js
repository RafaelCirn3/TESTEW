"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bauduccoRoutes_1 = __importDefault(require("./routes/bauduccoRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/api/produtos', bauduccoRoutes_1.default);
app.listen(port, () => {
    console.log(`Hosteando nessa porta :D :  ${port}`);
});
