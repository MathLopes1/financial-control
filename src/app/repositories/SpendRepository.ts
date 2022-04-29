import { getRepository } from "typeorm";
import Spend from "../entities/SpendModel";
import NotFound from "../Errors/errorsHttp/NotFound";
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

  async find(): Promise<ISpend | ISpend[]> {
    const repo = getRepository(Spend);
    const findSpend = repo.find();
    return findSpend;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Spend);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Spend -> ${id}, does not exists!`);
    }

    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Spend);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Spend -> ${id}, does not exists!`);
    }

    await repo.delete(id);
  }
}

export default SpendRepository;
