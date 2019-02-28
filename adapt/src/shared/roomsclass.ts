
export enum RoomType {
  Bedroom = 1,
  Bathroom = 2,
  Livingroom = 3,
  Office = 4,
  Kitchen = 5
}


export class Room {
    roomID: number = -1;
    name: string = "";

    type: RoomType = 1;
    description: string = "";
    id: Number = 0;
    constructor() {}
}
