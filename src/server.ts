import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import issueRouter from './routes/issue.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/issues', issueRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});