import {
  Entity, Column, PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { IGain } from "../Interfaces/Gain/IGain";

  @Entity('ganhos')
class GainModel implements IGain {
    constructor(total_ganhos: number) {
      if (!this.id) {
        this.id = uuid();
      }
      this.total_ganhos = total_ganhos;
    }

      @PrimaryColumn()
    public id: string;

      @Column()
      public total_ganhos: number;
  }

export default GainModel;
