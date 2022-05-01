import {
  Entity, Column, PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { ISpend } from "../Interfaces/Spend/ISpend";

    @Entity('gastos')
class SpendModel implements ISpend {
      constructor(
        entretenimento: number,
        alimentacao: number,
        educacao: number,
        saude: number,
        transporte: number,
      ) {
        if (!this.id) {
          this.id = uuid();
        }
        this.entretenimento = entretenimento;
        this.alimentacao = alimentacao;
        this.educacao = educacao;
        this.saude = saude;
        this.transporte = transporte;
      }

        @PrimaryColumn()
      public id: string;

        @Column()
        public entretenimento: number;

        @Column()
        public alimentacao: number;

        @Column()
        public educacao: number;

        @Column()
        public saude: number;

        @Column()
        public transporte: number;
    }

export default SpendModel;
