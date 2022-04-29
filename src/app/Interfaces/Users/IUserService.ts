import { IUser } from "./IUser";

export interface IUserService{
        create: ({
          nome, data_nascimento, email, senha,
        }) => Promise<IUser>
}
