export enum RoomType {
    SpaceOutsideTheHome = 0,
    Entrance = 1,
    TravelSpace = 2,
    Kitchen = 3,
    Bedroom = 4,
    Storage = 5,
    Laundry = 6,
    General = 7
}


export class Room {
    name: string = "";
    type: number = 0;
    description: string = "";
    id: Number = 0;
    houseId: Number = 0;
    
    
    constructor(roomJSON?: {
        name: string,
        id: number,
        type: number,
        description: string,
        houseId: Number
    }) {
        this.name = roomJSON && roomJSON.name;
        this.id =  roomJSON && roomJSON.id;
        this.type =  roomJSON && roomJSON.type;
        this.description = roomJSON && roomJSON.description;
        this.houseId = roomJSON && roomJSON.houseId
    }

    toNetworkJSON(){
        var jsonObj = {
            name:this.name,
            type: this.type,
            description: this.description
        }
        return jsonObj
    }


}