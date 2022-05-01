import { IAccount } from "./IAccount";

export interface IAccountService{
        create: ({
          nome, cpf, data_nascimento, email, senha,
        }) => Promise<IAccount>
        find: () => Promise<IAccount | IAccount[]>
        updated: (id: string, payload) => Promise<void>
        delete: (id: string) => Promise<void>
}
