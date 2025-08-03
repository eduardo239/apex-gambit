export class Item {
    name: string;
    type: string;
    price: number;
    value: number;
    constructor(name: string, type: string, price: number, value: number) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.value = value;
    }
}