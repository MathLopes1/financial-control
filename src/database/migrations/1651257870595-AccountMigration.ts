import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AccountMigration1651257870595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "account",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "gain_id",
            type: "uuid",
          },
          {
            name: "spend_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_user",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_gain",
            columnNames: ["gain_id"],
            referencedTableName: "gain",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_spend",
            columnNames: ["spend_id"],
            referencedTableName: "spend",
            referencedColumnNames: ["id"],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("account");
  }
}
