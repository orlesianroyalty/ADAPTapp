


export class Resident {
    name: string = "";
    age: Number = 0;
    physicalConcerns: any[] = [];
    income: Number = 0;
    state: string = "";
    id?: Number = 0;


    constructor(resJSON?: {
        name: string,
        id: number,
    }) {
        this.name = resJSON && resJSON.name;
        this.id =  resJSON && resJSON.id;
    }
}