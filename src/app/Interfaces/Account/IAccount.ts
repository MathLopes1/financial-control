export interface IAccount {
    id: string,
    nome: string,
    cpf: string,
    data_nascimento: string;
    email: string;
    senha: string;
    created_at: Date;
    ganhos_id: string,
    gastos_id: string,
}
