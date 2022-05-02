import { IAccount } from "./IAccount";

export interface IAccountService{
        create: ({
          nome, cpf, data_nascimento, usuario_id, ganhos_id, gastos_id,
        }) => Promise<IAccount>
        find: () => Promise<IAccount | IAccount[]>
        updated: (id: string, payload) => Promise<void>
        delete: (id: string) => Promise<void>
}
