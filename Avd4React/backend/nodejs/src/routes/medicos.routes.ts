import { Router } from 'express';
import { getRepository } from 'typeorm';

import MedicosController from '../app/controllers/MedicosController';
import Medicos from '../app/models/Medicos';

const medicosRouter = Router();

medicosRouter.post('/', async (request, response) => {
  try {
    const { nome, especialidade } = request.body;

    const medicosController = new MedicosController();

    const medico = await medicosController.store({
      nome,
      especialidade,
    });

    return response.json(medico);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

medicosRouter.get('/', async (request, response) => {
  const medicosRepository = getRepository(Medicos);
  const medico = await medicosRepository.find();
  return response.json(medico);
});

medicosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const medicosRepository = getRepository(Medicos);
  const medico = await medicosRepository.findOne(id);
  return response.json(medico);
});

medicosRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const medicosRepository = getRepository(Medicos);
  await medicosRepository.delete(id);
  return response.send('Médico removido com sucesso!');
});

export default medicosRouter;
