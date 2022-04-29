import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
export class Category {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

    @PrimaryColumn()
      id: string;

    @Column()
      Name: string;

    @Column()
      data_nascimento: string;

    @Column()
      email: string;

    @Column()
      senha: string;

    @CreateDateColumn()
      created_at: Date;
}
