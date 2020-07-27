import express from 'express';
const id = "HZ000004";
let ssid: string = '', pwd: string = '';
const app = express();

app.post('/homezero/config', (req, res) => {
    console.log('req.query:', req.query);
    if (req.query.ssid && req.query.pwd) {
        ssid = req.query.ssid;
        pwd = req.query.pwd;
    }
    res.json({ id, ssid, pwd });
});

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log('Server running') });