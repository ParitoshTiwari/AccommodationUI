
export class allProperties {
    busStopDuration: number;
    dishwasher: boolean;
    dryer: boolean;
    garrage: boolean;
    microwave: boolean;
    name: string;
    oven: boolean;
    phone: number;
    propertyAddress: string;
    propertyId: number;
    propertyName: string;
    refrigerator: boolean;
    userId: number;
    washer: boolean;

    constructor(busStopDuration: number, dishwasher: boolean, dryer: boolean, garrage: boolean, microwave: boolean,
        name: string, oven: boolean, phone: number, propertyAddress: string, propertyId: number,
        propertyName: string, refrigerator: boolean, userId: number, washer: boolean){
        this.busStopDuration = busStopDuration;
        this.dishwasher = dishwasher;
        this.dryer = dryer;
        this.garrage = garrage;
        this.microwave = microwave;
        this.name = name;
        this.oven = oven;
        this.phone = phone;
        this.propertyAddress = propertyAddress;
        this.propertyId = propertyId;
        this.propertyName = propertyName;
        this.refrigerator = refrigerator;
        this.userId = userId;
        this.washer = washer;
    }
}