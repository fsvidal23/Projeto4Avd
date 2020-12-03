import { getRepository } from 'typeorm';

import Medicos from '../models/Medicos';

interface Request {
  nome: string;
  especialidade: string;
}

class MedicosController {
  public async store({ nome, especialidade }: Request): Promise<Medicos> {
    const medicosRepository = getRepository(Medicos);

    const verificaNomeExiste = await medicosRepository.findOne({
      where: { nome },
    });

    if (verificaNomeExiste) {
      throw new Error('Nome já cadastrado!');
    }

    const medico = medicosRepository.create({
      nome,
      especialidade,
    });

    await medicosRepository.save(medico);
    return medico;
  }
}

export default MedicosController;
