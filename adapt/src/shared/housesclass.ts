import { Room } from './roomsclass';
import { Resident } from './residentsclass';



export class House {
    name: string = "";
    id?: Number = 0;
    numberOfResidents: Number = 0;


    constructor(houseJSON?: {
        name: string,
        id: number,
        numResident: number
    }) {
        console.log("fake")
        this.name = houseJSON && houseJSON.name;
        this.id =  houseJSON && houseJSON.id;
        this.numberOfResidents = houseJSON && houseJSON.numResident;
    }

    toNetworkJSON(){
        var jsonObj = {
            name:this.name
        }
        return jsonObj
    }

}