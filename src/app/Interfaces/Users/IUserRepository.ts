import { IUser } from "./IUser";

export interface IUserRepository{
    create: (nome: string, data_nascimento: string, email: string, senha: string) => Promise<IUser>
}
