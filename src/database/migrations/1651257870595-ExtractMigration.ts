import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ExtractMigration1651257870595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "extrato",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "conta_id",
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
            name: "fk_conta",
            columnNames: ["conta_id"],
            referencedTableName: "conta",
            referencedColumnNames: ["id"],
          },
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
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("extrato");
  }
}
