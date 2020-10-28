// Rota = conjunto de tudo
// Recurso = orfanato

// Métodos HTTP = GET, POST, DELETE, PUT
// GET =  Busca informação
// POST = Criando uma informação
// PUT = Editando Informação
// DLETE = Apagar informação

// Parâmetros
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)
import express, { Router } from 'express';
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import path from 'path'
import errorHandler from './errors/handler';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);



app.listen(3333);

