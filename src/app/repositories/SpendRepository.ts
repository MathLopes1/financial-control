import { getRepository, Repository } from "typeorm";
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
    const repo: Repository<Spend> = getRepository(Spend);
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

  async find(): Promise<ISpend | ISpend[]> {
    const repo: Repository<Spend> = getRepository(Spend);
    const findSpend = repo.find();
    return findSpend;
  }

  async updated(id: string, payload): Promise<void> {
    const repo: Repository<Spend> = getRepository(Spend);
    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo: Repository<Spend> = getRepository(Spend);
    await repo.delete(id);
  }
}

export default SpendRepository;
