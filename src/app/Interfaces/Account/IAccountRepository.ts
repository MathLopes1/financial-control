import { IAccount } from "./IAccount";

export interface IAccountRepository{
    create: (
        nome: string,
        cpf: string,
        data_nascimento: string,
        email: string,
        senha: string) => Promise<IAccount>
    find: () => Promise<IAccount | IAccount[]>
    updated: (id: string, payload) => Promise<void>
    delete: (id: string) => Promise<void>
}
