import { getRepository } from 'typeorm';

import Pacientes from '../models/Pacientes';

interface Request {
  nome: string;
}

class PacientesController {
  public async store({ nome }: Request): Promise<Pacientes> {
    const pacienteRepository = getRepository(Pacientes);

    const verificaPacienteExiste = await pacienteRepository.findOne({
      where: { nome },
    });

    if (verificaPacienteExiste) {
      throw new Error('Paciente já cadastrado!');
    }

    const paciente = pacienteRepository.create({
      nome,
    });

    await pacienteRepository.save(paciente);
    return paciente;
  }
}

export default PacientesController;
