
export enum TipType {
    Financial = 0,
    Building = 1
}

export class Tip {

    name: string;
    id: number;
    description: string;
    type: number;
    websites: String[]
    
    constructor(tipJSON?: {
        name: string,
        id: number,
        description: string,
        type: number,
        websites: String[]
    }) {
        this.name = tipJSON.name;
        this.id = tipJSON.id;
        this.description = tipJSON.description;
        this.type =  tipJSON.type;
        this.websites = tipJSON.websites;
    }

}