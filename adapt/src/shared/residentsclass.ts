export enum PhysicalConcerns {
    WheelChair = 0,
    Blindness = 1,
    SpeechImpairment = 2
}


export class Resident {
    name: string = "";
    age: Number = 0;
    gender: Number = 0;
    physicalConcerns: Number[] = [];
    income: Number = 0;
    state: string = "";
    id?: Number = 0;


    constructor(resJSON?: {
        name: string,
        id: number,
        age: Number,
        gender: Number,
        physicalConcerns: Number[],
        income: Number,
        state: string,
    }) {
        this.name = resJSON && resJSON.name;
        this.id =  resJSON && resJSON.id;
    }

    toNetworkJSON(){
        var jsonObj = {
            name:this.name,
            age:this.age,
            gender: this.gender,
            physicalConcernse:this.physicalConcerns,
            income: this.income,
            location:this.state
        }
        return jsonObj
    }
}