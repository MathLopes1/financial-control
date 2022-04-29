import { getRepository } from "typeorm";
import Spend from "../entities/SpendModel";
import { ISpend } from "../Interfaces/Spend/ISpend";
import { ISpendRepository } from "../Interfaces/Spend/ISpendRepository";

class SpendRepository implements ISpendRepository {
  async create(
    entretenimento: number,
    alimentacao: number,
    educacao: number,
    saude: number,
    transporte: number,
  ): Promise<ISpend> {
    const repo = getRepository(Spend);
    const newSpend: ISpend = new Spend(
      entretenimento,
      alimentacao,
      educacao,
      saude,
      transporte,
    );
    const result: ISpend = await repo.save(newSpend);
    return result;
  }
}

export default SpendRepository;
