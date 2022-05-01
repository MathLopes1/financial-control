import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { IAccount } from "../Interfaces/Account/IAccount";

@Entity('conta')
class AccountModel implements IAccount {
  constructor(nome: string, cpf: string, data_nascimento: string, email: string, senha: string) {
    if (!this.id) {
      this.id = uuid();
    }
    this.nome = nome;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
    this.email = email;
    this.senha = senha;
  }

    @PrimaryColumn()
  public id: string;

    @Column()
    public nome: string;

    @Column()
    public cpf: string;

    @Column()
    public data_nascimento: string;

    @Column()
    public email: string;

    @Column()
    public senha: string;

    @CreateDateColumn()
    public created_at: Date;
}

export default AccountModel;
