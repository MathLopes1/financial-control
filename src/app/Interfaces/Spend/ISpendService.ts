import { ISpend } from "./ISpend";

export interface ISpendService {
    create: ({
      entretenimento,
      alimentacao,
      educacao,
      saude,
      transporte,
    }) => Promise<ISpend>
}
