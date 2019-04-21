
export enum RecommendationCategory {
    Safety = 0,
    Mobility = 1,
    Visibility = 2
}


export interface WebSite {
    name: String
    url: String
}

export class Recommendation {

    name: string;
    id: number;
    description: string;
    imageURL: string;
    cost: number;
    type: number;
    websites: WebSite[]
    
    constructor(recJSON?: {
        name: string,
        id: number,
        description: string,
        imageURL: string,
        cost: number,
        type: number,
        websites: WebSite[]
    }) {
        this.name = recJSON.name;
        this.id = recJSON.id;
        this.description = recJSON.description;
        this.cost = recJSON.cost;
        this.imageURL = recJSON.imageURL;
        this.type =  recJSON.type;
        this.websites = recJSON.websites;
    }

}