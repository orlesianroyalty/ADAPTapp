
export enum RecommendationCategory {
    Safety = 0,
    Mobility = 1,
    Visibility = 2
}

export class Recommendation {

    name: string;
    id: number;
    description: string;
    cost: number;
    type: number;
    websites: String[]
    
    constructor(recJSON?: {
        name: string,
        id: number,
        description: string,
        cost: number,
        type: number,
        websites: String[]
    }) {
        this.name = recJSON.name;
        this.id = recJSON.id;
        this.description = recJSON.description;
        this.cost = recJSON.cost;
        this.type =  recJSON.type;
        this.websites = recJSON.websites;
    }

}