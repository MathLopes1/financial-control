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
    await this.spendRepository.updated(id, payload);
  }
}

export default SpendService;
