import { Room } from './roomsclass';
import { Resident } from './residentsclass';
export class House {
    name: string = "";
    residents: Resident[] = [];
    rooms: Room[] = [];
    id: Number = 0;
    numberOfResidents: Number = 0;
    constructor() {}
}