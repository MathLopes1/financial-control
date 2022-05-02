import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserMigration1651389112386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuario',
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "senha",
            type: "varchar",
          },
          {
            name: "habilitado",
            type: "varchar",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
