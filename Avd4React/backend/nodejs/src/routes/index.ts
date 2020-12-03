import { Router } from 'express';

import medicos from './medicos.routes';
import pacientes from './pacientes.routes';
import agendamentos from './agendamentos.routes';

const routes = Router();

routes.use('/medicos', medicos);
routes.use('/pacientes', pacientes);
routes.use('/agendamentos', agendamentos);

export default routes;
