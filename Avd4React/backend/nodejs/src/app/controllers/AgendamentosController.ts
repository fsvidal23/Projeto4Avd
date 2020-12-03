/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { getRepository } from 'typeorm';
import Agendamentos from '../models/Agendamentos';
import Medicos from '../models/Medicos';
// import { startOfHour, parseISO } from 'date-fns';

interface Request {
  data: Date;
  nomePaciente: string;
  nomeMedico: string;
  horario: string;
}

class AgendamentosController {
  public async store({
    data,
    nomePaciente,
    nomeMedico,
    horario,
  }: Request): Promise<Agendamentos> {
    const agendamentosRepository = getRepository(Agendamentos);
    const encontrarExameMesmoHorario = await agendamentosRepository.findOne({
      where: { horario },
    });

    if (encontrarExameMesmoHorario) {
      throw new Error('Paciente já cadastrado neste horário!');
    }
    const medicosRepository = getRepository(Medicos);
    const medico = await medicosRepository.find();
    let especialidadeMedico;
    medico.map(x => {
      if (x.nome === nomeMedico) {
        especialidadeMedico = x.especialidade;
      }
    });
    const realizaEx = agendamentosRepository.create({
      data,
      nomePaciente,
      nomeMedico,
      especialidade: especialidadeMedico,
      horario,
    });

    await agendamentosRepository.save(realizaEx);
    return realizaEx;
  }
}

export default AgendamentosController;
