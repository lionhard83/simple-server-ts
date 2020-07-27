"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const id = "HZ000004";
let ssid, psw;
const app = express_1.default();
app.get('homezero/config', (req, res) => {
    res.json('Hello world');
});
app.post('homezero/config', (req, res) => {
    if (req.query.ssid && req.query.psw) {
        ssid = req.query.ssid;
        psw = req.query.psw;
    }
    res.json({
        id,
        ssid,
        psw,
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log('Server running'); });
