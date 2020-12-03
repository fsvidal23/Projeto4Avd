import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import routes from './routes';
import './database';

const app = express();
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//   }),
// );

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  console.log('Servidor Rodando!');
});
