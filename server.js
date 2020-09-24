import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import path from 'path';
import debugLib from 'debug';
import homeRouter from './routes/homeRouter';
import tasksRouter from './routes/tasksRouter';

const app = express();
const debug = debugLib('app:server');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);
app.use('/tasks', tasksRouter);

app.listen(port, () => debug(`App running on: ${chalk.blue(`http://localhost:${port}`)}`));
