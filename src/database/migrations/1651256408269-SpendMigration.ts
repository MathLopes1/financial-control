import {
  MigrationInterface, QueryRunner, Table,
} from "typeorm";

export class SpendMigration1651256408269 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "spend",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "entretenimento",
            type: "float",
          },
          {
            name: "alimentacao",
            type: "float",
          },
          {
            name: "educacao",
            type: "float",
          },
          {
            name: "saude ",
            type: "float",
          },
          {
            name: "transporte",
            type: "float",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('spend');
  }
}
