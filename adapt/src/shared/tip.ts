
export enum TipType {
    Financial = 0,
    StateFederalPrograms = 1,
    BuildingProfessionals = 2,
    Product = 3,
    Videos = 4,
    Technology = 5
}



export class Tip {

    name: string;
    id: number;
    description: string;
    type: number;
    website: string;
    subType: string;
    
    constructor(tipJSON?: {
        name: string,
        id: number,
        description: string,
        type: number,
        website: string,
        subType?: string,
    }) {
        this.name = tipJSON.name;
        this.id = tipJSON.id;
        this.description = tipJSON.description;
        this.type =  tipJSON.type;
        this.website = tipJSON.website;
        this.subType = tipJSON.subType;
    }

}