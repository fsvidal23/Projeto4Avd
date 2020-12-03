import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Pacientes from './Pacientes';
import Medicos from './Medicos';

@Entity('agendamentos')
class Agendamentos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('time with time zone')
  data: Date;

  @Column()
  nomePaciente: string;

  @ManyToOne(() => Pacientes)
  @JoinColumn({ name: 'nomePaciente' })
  nomePac: Pacientes;

  @Column()
  nomeMedico: string;

  @ManyToOne(() => Medicos)
  @JoinColumn({ name: 'nomeMedico' })
  nomeMed: Medicos;

  @Column()
  especialidade: string;

  @Column()
  horario: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Agendamentos;
