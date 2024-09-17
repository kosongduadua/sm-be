import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});