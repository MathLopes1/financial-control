import { ISpend } from "./ISpend";

export interface ISpendRepository {
    create: (
        entretenimento: number,
        alimentacao: number,
        educacao: number,
        saude: number,
        transporte: number) => Promise<ISpend>
    find: () => Promise<ISpend | ISpend[]>
    updated: (id: string, payload) => Promise<void>
    delete: (id: string) => Promise<void>
}
