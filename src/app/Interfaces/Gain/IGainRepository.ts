import { IGain } from "./IGain";

export interface IGainRepository{
    create: (total_ganhos: number) => Promise<IGain>
    find: () => Promise<IGain | IGain[]>
    updated: (id: string, payload) => Promise<void>
    delete: (id: string) => Promise<void>
}
