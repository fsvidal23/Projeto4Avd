import { Router } from 'express';
import { getRepository } from 'typeorm';

import FuncionariosController from '../app/controllers/PacientesController';
import Funcionarios from '../app/models/Pacientes';

const funcionariosRouter = Router();

funcionariosRouter.post('/', async (request, response) => {
  try {
    const { nome } = request.body;

    const funcionariosController = new FuncionariosController();

    const funcionario = await funcionariosController.store({
      nome,
    });

    return response.json(funcionario);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

funcionariosRouter.get('/', async (request, response) => {
  const funcionariosRepository = getRepository(Funcionarios);
  const funcionario = await funcionariosRepository.find();
  return response.json(funcionario);
});

funcionariosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const funcionariosRepository = getRepository(Funcionarios);
  const funcionario = await funcionariosRepository.findOne(id);
  return response.json(funcionario);
});

funcionariosRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const funcionariosRepository = getRepository(Funcionarios);
  await funcionariosRepository.delete(id);
  return response.send('Funcionário removido com sucesso!');
});

export default funcionariosRouter;
