import { IGain } from "./IGain";

export interface IGainService{
    create: ({ total_ganhos: number }) => Promise<IGain>
}
