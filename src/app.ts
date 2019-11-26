import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json('Hello world');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log('Server runngin')});