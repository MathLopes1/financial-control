import { ISpend } from "./ISpend";

export interface ISpendService {
    create: ({
      entretenimento,
      alimentacao,
      educacao,
      saude,
      transporte,
    }) => Promise<ISpend>
    find: () => Promise<ISpend | ISpend[]>
    updated: (id: string, payload) => Promise<void>
    delete: (id: string) => Promise<void>
}
