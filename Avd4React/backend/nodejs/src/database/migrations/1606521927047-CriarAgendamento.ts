import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CriarAgendamento1606521927047
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'agendamentos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'data',
            type: 'timestamp with time zone',
          },
          {
            name: 'nomePaciente',
            type: 'varchar',
          },
          {
            name: 'nomeMedico',
            type: 'varchar',
          },
          {
            name: 'especialidade',
            type: 'varchar',
          },
          {
            name: 'horario',
            type: 'time without time zone',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('agendamentos', [
      new TableForeignKey({
        columnNames: ['nomePaciente'],
        referencedColumnNames: ['nome'],
        referencedTableName: 'pacientes',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['nomeMedico'],
        referencedColumnNames: ['nome'],
        referencedTableName: 'medicos',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('agendamentos');
  }
}
