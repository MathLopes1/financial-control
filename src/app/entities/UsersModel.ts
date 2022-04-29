import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { IUser } from "../Interfaces/Users/IUser";

@Entity('users')
class UserModel implements IUser {
  constructor(nome: string, data_nascimento: string, email: string, senha: string) {
    if (!this.id) {
      this.id = uuid();
    }
    this.nome = nome;
    this.data_nascimento = data_nascimento;
    this.email = email;
    this.senha = senha;
  }

    @PrimaryColumn()
  public id: string;

    @Column()
    public nome: string;

    @Column()
    public data_nascimento: string;

    @Column()
    public email: string;

    @Column()
    public senha: string;

    @CreateDateColumn()
    public created_at: Date;
}

export default UserModel;
