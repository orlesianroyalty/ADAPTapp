export enum PhysicalConcerns {
    WheelChair = 0,
    Blindness = 1,
    SpeechImpairment = 2
}


export class Resident {
    name: string = "";
    age: Number = 0;
    gender: Number = 0;
    concerns: Number[] = [];
    income: Number = 0;
    state: Number = 0;
    id?: Number = 0;


    constructor(resJSON?: {
        name: string,
        id: number,
        age: Number,
        gender: Number,
        concerns: Number[],
        income: Number,
        state: Number,
    }) {
        this.name = resJSON && resJSON.name;
        this.id =  resJSON && resJSON.id;
    }

    toNetworkJSON(){
        var jsonObj = {
            name:this.name,
            age:this.age,
            gender: this.gender,
            concerns:this.concerns,
            income: this.income,
            location:this.state
        }
        return jsonObj
    }
}