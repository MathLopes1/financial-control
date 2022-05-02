import {
  Entity, Column, PrimaryColumn, BeforeUpdate, BeforeInsert,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import { IUser } from "../Interfaces/User/IUser";

    @Entity('usuario')
class UserModel implements IUser {
      constructor(email: string, senha: string, habilitado: string) {
        if (!this.id) {
          this.id = uuid();
        }
        this.email = email;
        this.senha = senha;
        this.habilitado = habilitado;
      }

    @PrimaryColumn()
      public id: string;

    @Column()
    public email: string;

    @Column()
    public senha: string;

    @Column()
    public habilitado: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.senha = bcrypt.hashSync(this.senha, 8);
    }
    }

export default UserModel;
