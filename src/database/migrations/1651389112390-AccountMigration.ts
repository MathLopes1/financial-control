import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AccountMigration1651389112390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "conta",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "data_nascimento",
            type: "varchar",
          },
          {
            name: "usuario_id",
            type: "uuid",
          },
          {
            name: "ganhos_id",
            type: "uuid",
          },
          {
            name: "gastos_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_ganhos",
            columnNames: ["ganhos_id"],
            referencedTableName: "ganhos",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_gastos",
            columnNames: ["gastos_id"],
            referencedTableName: "gastos",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_usuarios",
            columnNames: ["usuario_id"],
            referencedTableName: "usuario",
            referencedColumnNames: ["id"],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("conta");
  }
}
