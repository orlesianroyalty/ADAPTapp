export class Room {
    name: string = "";
    type: number = 0;
    description: string = "";
    id: Number = 0;
    
    
    constructor(roomJSON?: {
        name: string,
        id: number,
        type: number,
        description: string
    }) {
        this.name = roomJSON && roomJSON.name;
        this.id =  roomJSON && roomJSON.id;
        this.type =  roomJSON && roomJSON.type;
        this.description = roomJSON && roomJSON.description;
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