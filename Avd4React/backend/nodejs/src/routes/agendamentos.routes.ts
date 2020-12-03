import { Router } from 'express';
import { getRepository } from 'typeorm';
import RealizacaoExamesController from '../app/controllers/AgendamentosController';
import RealizacaoExames from '../app/models/Agendamentos';

const realizacaoExamesRouter = Router();

realizacaoExamesRouter.post('/', async (request, response) => {
  try {
    const { data, nomePaciente, nomeMedico, horario } = request.body;
    const realizacaoExamesController = new RealizacaoExamesController();

    const realizaEx = await realizacaoExamesController.store({
      data,
      nomePaciente,
      nomeMedico,
      horario,
    });

    return response.json(realizaEx);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

realizacaoExamesRouter.get('/', async (request, response) => {
  const realizaRepository = getRepository(RealizacaoExames);
  const realizaEx = await realizaRepository.find();
  return response.json(realizaEx);
});

realizacaoExamesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const realizaRepository = getRepository(RealizacaoExames);
  const realizaEx = await realizaRepository.findOne(id);
  return response.json(realizaEx);
});

realizacaoExamesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const realiizaRepository = getRepository(RealizacaoExames);
  await realiizaRepository.delete(id);
  return response.send('Exame realizado removido com sucesso!');
});

export default realizacaoExamesRouter;
