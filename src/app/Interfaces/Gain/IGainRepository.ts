import { IGain } from "./IGain";

export interface IGainRepository{
    create: (total_ganhos: number) => Promise<IGain>
}
