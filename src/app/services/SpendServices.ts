import { getRepository } from "typeorm";

import Spend from "../entities/SpendModel";
import NotFound from "../Errors/errorsHttp/NotFound";
import { ISpend } from "../Interfaces/Spend/ISpend";
import { ISpendRepository } from "../Interfaces/Spend/ISpendRepository";
import { ISpendService } from "../Interfaces/Spend/ISpendService";
import SpendRepository from "../repositories/SpendRepository";

class SpendService implements ISpendService {
  private spendRepository: ISpendRepository;

  constructor() {
    this.spendRepository = new SpendRepository();
  }

  async create({
    entretenimento,
    alimentacao,
    educacao,
    saude,
    transporte,
  }): Promise<ISpend> {
    const newGain:ISpend = await this.spendRepository.create(
      entretenimento,
      alimentacao,
      educacao,
      saude,
      transporte,
    );
    return newGain;
  }

  async find(): Promise<ISpend | ISpend[]> {
    const findSpend = await this.spendRepository.find();
    return findSpend;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Spend);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Spend -> ${id}, does not exists!`);
    }

    await this.spendRepository.updated(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Spend);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Spend -> ${id}, does not exists!`);
    }

    await this.spendRepository.delete(id);
  }
}

export default SpendService;
