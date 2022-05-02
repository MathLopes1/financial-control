import { ILogin } from "./ILogin";
import { IUser } from "./IUser";

export interface IUserService {
    create: ({ email, senha, habilitado }) => Promise<IUser>
    login: ({ email, senha }) => Promise<ILogin>
}
