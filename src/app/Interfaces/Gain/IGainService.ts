import { IGain } from "./IGain";

export interface IGainService{
    create: ({ total_ganhos: number }) => Promise<IGain>
    find: () => Promise<IGain | IGain[]>
    updated: (id: string, payload) => Promise<void>
}
