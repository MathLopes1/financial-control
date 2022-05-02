import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
  ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import { IAccount } from "../Interfaces/Account/IAccount";
import GainModel from "./GainModel";
import SpendModel from "./SpendModel";

    @Entity('conta')
class AccountModel implements IAccount {
      constructor(
        nome: string,
        cpf: string,
        data_nascimento: string,
        email: string,
        senha: string,
        ganhos_id: string,
        gastos_id: string,
      ) {
        if (!this.id) {
          this.id = uuid();
        }
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.senha = senha;
        this.ganhos_id = ganhos_id;
        this.gastos_id = gastos_id;
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

    @Column()
    public ganhos_id: string;

    @ManyToOne(() => GainModel)
    @JoinColumn({ name: 'ganhos_id' })
    public gain: GainModel;

    @Column()
    public gastos_id: string;

    @ManyToOne(() => SpendModel)
    @JoinColumn({ name: 'gastos_id' })
    public spend: SpendModel;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.senha = bcrypt.hashSync(this.senha, 8);
    }
    }

export default AccountModel;
