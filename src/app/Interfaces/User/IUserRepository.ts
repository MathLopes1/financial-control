import { IUser } from "./IUser";

export interface IUserRepository {
    create: (email: string, senha: string, habilitado: string) => Promise<IUser>
    login: (email: string) => Promise<IUser>
}
